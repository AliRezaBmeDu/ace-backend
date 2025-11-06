// schemaTypes/mcqQuestion.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mcqQuestion',
  title: 'MCQ Question',
  type: 'object', // This is an object, not a document
  fields: [
    defineField({
      name: 'questionText',
      title: 'Question Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'string'}], // A list of text options
      validation: (Rule) => Rule.min(2).error('You must have at least 2 options.'),
    }),
    defineField({
      name: 'correctAnswerIndex',
      title: 'Correct Answer Index',
      type: 'number',
      description: 'The index of the correct answer (e.g., 0 for the first option, 1 for the second).',
      validation: (Rule) =>
        Rule.required().min(0).integer().error('Please provide a valid index number.'),
    }),
  ],
  preview: {
    select: {
      title: 'questionText',
    },
  },
})