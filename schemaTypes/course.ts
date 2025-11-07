// schemas/course.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    // ... (title, slug, mainImage, description fields are unchanged)
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Course Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
      rows: 4,
    }),

    // --- ADD THESE NEW FIELDS ---
    defineField({
      name: 'onlineFee',
      title: 'Online Fee',
      type: 'string',
      description: 'e.g., "BDT 5,000" or "Contact for fee"',
    }),
    defineField({
      name: 'offlineFee',
      title: 'Offline Fee',
      type: 'string',
    }),
    defineField({
      name: 'bkashNumber',
      title: 'Bkash Payment Number',
      type: 'string',
      description: 'The number for students to send payment to.',
    }),
    // ----------------------------
    
    // This is the changed field
    defineField({
      name: 'modules',
      title: 'Course Modules',
      type: 'array',
      of: [{type: 'reference', to: {type: 'courseModule'}}], // <-- Updated reference
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})