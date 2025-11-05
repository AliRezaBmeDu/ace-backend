// schemas/course.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
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
        source: 'title', // Automatically generates a slug from the title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Course Image',
      type: 'image',
      options: {
        hotspot: true, // Enables smart image cropping
      },
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
      rows: 4,
    }),
    // This is where we will link to our Modules
    defineField({
      name: 'modules',
      title: 'Course Modules',
      type: 'array',
      of: [{type: 'reference', to: {type: 'module'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})