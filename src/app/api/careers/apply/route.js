import { NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/serverClient'

export const runtime = 'nodejs'
const MAX_RESUME_BYTES = 5 * 1024 * 1024

export async function POST(request) {
  try {
    const formData = await request.formData()
    const fullName = String(formData.get('fullName') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const jobId = String(formData.get('jobId') || '').trim()
    const jobTitle = String(formData.get('jobTitle') || '').trim()
    const applicationEmail = String(formData.get('applicationEmail') || '').trim()
    const message = String(formData.get('message') || '').trim()
    const resume = formData.get('resume')

    if (!fullName || !email || !jobId || !jobTitle || !(resume instanceof File)) {
      return NextResponse.json({ error: 'Name, email, vacancy, and resume are required.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json({ error: 'Resume must be smaller than 5 MB.' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) throw new Error('Email delivery is not configured. Please set RESEND_API_KEY.')

    const resumeBuffer = Buffer.from(await resume.arrayBuffer())
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'ALMATAR Website <info@almatar-oil.com>',
        to: [applicationEmail || process.env.CAREERS_APPLICATION_EMAIL || 'hr@almatar.com'],
        reply_to: email,
        subject: `New application: ${jobTitle} — ${fullName}`,
        text: [`Position: ${jobTitle}`, `Applicant: ${fullName}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`, '', message || 'No message provided.'].join('\n'),
        attachments: [{ filename: resume.name, content: resumeBuffer.toString('base64') }],
      }),
    })
    if (!emailResponse.ok) throw new Error(`Email delivery failed: ${await emailResponse.text()}`)

    let application = null
    if (process.env.SANITY_API_WRITE_TOKEN) {
      try {
        application = await writeClient.create({
          _type: 'jobApplication', fullName, email, phone, jobId, jobTitle, message,
          resumeFileName: resume.name, submittedAt: new Date().toISOString(), status: 'new',
        })
      } catch (error) {
        console.error('Could not save job application in Sanity:', error)
      }
    }

    return NextResponse.json({ success: true, id: application?._id || null })
  } catch (error) {
    console.error('Career application failed:', error)
    return NextResponse.json({ error: error.message || 'Could not submit application.' }, { status: 500 })
  }
}
