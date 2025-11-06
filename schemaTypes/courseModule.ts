// schemaTypes/courseModule.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'courseModule', // Changed from 'module'
  title: 'Course Module', // Changed from 'Module'
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Module Title',
      type: 'string',
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [{type: 'reference', to: {type: 'lesson'}}],
    }),
  ],
})