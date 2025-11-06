// schemaTypes/mcq.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mcq',
  title: 'MCQ Quiz',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Quiz Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      // We are embedding the mcqQuestion object directly here
      of: [{type: 'mcqQuestion'}],
    }),
  ],
})