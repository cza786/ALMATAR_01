import { NextResponse } from 'next/server'
import { serverClient } from '@/sanity/lib/serverClient'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, company, phone, serviceType, projectDescription } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      )
    }

    // Create document in Sanity
    const submission = await serverClient.create({
      _type: 'contactSubmission',
      name: name.trim(),
      company: company?.trim() || 'Direct Inquiry',
      phone: phone.trim(),
      serviceType: serviceType || 'General Inquiry',
      projectDescription: projectDescription?.trim() || '',
      submittedAt: new Date().toISOString(),
      status: 'new',
    })

    return NextResponse.json({
      success: true,
      id: submission._id,
      message: 'Quotation request submitted successfully!',
    })
  } catch (error) {
    console.error('Error submitting to Sanity:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit form to Sanity.' },
      { status: 500 }
    )
  }
}
