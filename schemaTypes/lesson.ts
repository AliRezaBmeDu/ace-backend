// schemas/lesson.ts
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
    }),
    // We will add Mux video, PDFs, and quizzes here later.
    // For now, let's add a simple text editor.
    defineField({
      name: 'content',
      title: 'Lesson Content',
      type: 'array',
      of: [
        {
          type: 'block', // 'block' is for rich text (bold, italics, etc.)
        },
      ],
    }),
    // --- ADD THIS NEW FIELD ---
    defineField({
      name: 'quiz',
      title: 'Quiz',
      type: 'reference',
      to: [{type: 'mcq'}], // This links to our new 'mcq' document type
    }),
    defineField({
      name: 'lectureNotes',
      title: 'Lecture Notes (PDF)',
      type: 'file',
      options: {
        accept: '.pdf', // Only allows PDF files to be uploaded
      },
    }),

    // ... inside the fields array ...
    defineField({
      name: 'videoLecture',
      title: 'Video Lecture',
      type: 'mux.video', // This type is now available from the plugin
    }),
// ...
    // -------------------------
  ],
})