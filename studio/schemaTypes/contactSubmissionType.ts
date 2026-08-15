import { defineField, defineType } from 'sanity'

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'Form Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'company',
      title: 'Company / Organization',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'serviceType',
      title: 'Requested Service',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description / Message',
      type: 'text',
      rows: 5,
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submission Date & Time',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '🟢 New / Unread', value: 'new' },
          { title: '🟡 In Review', value: 'in_review' },
          { title: '🔵 Contacted', value: 'contacted' },
          { title: '⚪ Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'adminNotes',
      title: 'Internal Admin Notes',
      type: 'text',
      rows: 3,
      description: 'Notes for internal team regarding follow-up, pricing, or assigned engineer.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      company: 'company',
      service: 'serviceType',
      status: 'status',
      date: 'submittedAt',
    },
    prepare({ title, company, service, status, date }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      const statusIcon =
        status === 'new'
          ? '🟢'
          : status === 'in_review'
          ? '🟡'
          : status === 'contacted'
          ? '🔵'
          : '⚪'
      return {
        title: `${statusIcon} ${title || 'Anonymous'} (${company || 'Direct'})`,
        subtitle: `${service || 'General Inquiry'} • ${formattedDate}`,
      }
    },
  },
})
