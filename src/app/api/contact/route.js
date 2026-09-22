import { NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/serverClient'
import { isValidSyrianPhone } from '@/lib/syrianPhone'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, company, phone, serviceType, projectDescription } = body

    if (!name?.trim() || !company?.trim() || !phone || !serviceType?.trim() || !projectDescription?.trim()) {
      return NextResponse.json(
        { error: 'All form fields are required.' },
        { status: 400 }
      )
    }

    if (!isValidSyrianPhone(phone)) {
      return NextResponse.json(
        { error: 'A valid Syrian phone number starting with +963 is required.' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      throw new Error('Email delivery is not configured. Please set RESEND_API_KEY.')
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ALMATAR Website <info@almatar-oil.com>',
        to: ['info@almatar-oil.com'],
        subject: `New quote request from ${name.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Company: ${company.trim()}`,
          `Phone: ${phone.trim()}`,
          `Service type: ${serviceType.trim()}`,
          `Project description: ${projectDescription.trim()}`,
        ].join('\n'),
      }),
    })

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text()
      throw new Error(`Email delivery failed: ${emailError}`)
    }

    // Store a copy in Sanity when a write token is configured. Email delivery
    // remains the primary submission path so a missing Sanity token does not
    // make the quotation form fail for the visitor.
    let submission = null
    if (process.env.SANITY_API_WRITE_TOKEN) {
      try {
        submission = await writeClient.create({
          _type: 'contactSubmission',
          name: name.trim(),
          company: company.trim(),
          phone: phone.trim(),
          serviceType: serviceType.trim(),
          projectDescription: projectDescription.trim(),
          submittedAt: new Date().toISOString(),
          status: 'new',
        })
      } catch (sanityError) {
        console.error('Sanity contact submission failed after email delivery:', sanityError)
      }
    } else {
      console.warn('SANITY_API_WRITE_TOKEN is not configured; contact submission was emailed but not stored in Sanity.')
    }

    return NextResponse.json({
      success: true,
      id: submission?._id || null,
      message: 'Quotation request submitted successfully!',
    })
  } catch (error) {
    console.error('Error submitting contact request:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit form to Sanity.' },
      { status: 500 }
    )
  }
}
