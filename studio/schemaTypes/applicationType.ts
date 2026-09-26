import { defineField, defineType } from 'sanity'

export const applicationType = defineType({
  name: 'jobApplication',
  title: 'Job Application',
  type: 'document',
  fields: [
    defineField({ name: 'fullName', title: 'Full Name', type: 'string', readOnly: true }),
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'phone', title: 'Phone', type: 'string', readOnly: true }),
    defineField({ name: 'jobTitle', title: 'Applied Position', type: 'string', readOnly: true }),
    defineField({ name: 'jobId', title: 'Vacancy Document ID', type: 'string', readOnly: true }),
    defineField({ name: 'message', title: 'Applicant Message', type: 'text', rows: 6, readOnly: true }),
    defineField({ name: 'resumeFileName', title: 'Resume File Name', type: 'string', readOnly: true }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime', readOnly: true }),
    defineField({ name: 'status', title: 'Status', type: 'string', options: { list: ['new', 'reviewing', 'shortlisted', 'rejected'], layout: 'radio' }, initialValue: 'new' }),
    defineField({ name: 'adminNotes', title: 'Admin Notes', type: 'text', rows: 4 }),
  ],
  preview: {
    select: { title: 'fullName', job: 'jobTitle', date: 'submittedAt' },
    prepare({ title, job, date }) {
      return { title: title || 'Unnamed applicant', subtitle: `${job || 'General application'} · ${date ? new Date(date).toLocaleDateString() : ''}` }
    },
  },
})
