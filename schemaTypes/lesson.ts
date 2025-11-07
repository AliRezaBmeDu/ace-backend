// schemaTypes/lesson.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Lesson Title',
      type: 'string',
      validation: (Rule) => Rule.required(), // Good to make this required
    }),
    
    // --- ADD THIS NEW SLUG FIELD ---
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
    // ---------------------------------
    
    defineField({
      name: 'videoLecture',
      title: 'Video Lecture',
      type: 'mux.video',
    }),
    defineField({
      name: 'content',
      title: 'Lesson Content',
      type: 'array',
      of: [
        {
          type: 'block', // Rich text editor
        },
      ],
    }),
    defineField({
      name: 'lectureNotes',
      title: 'Lecture Notes (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'quiz',
      title: 'Quiz',
      type: 'reference',
      to: [{type: 'mcq'}],
    }),
  ],
})