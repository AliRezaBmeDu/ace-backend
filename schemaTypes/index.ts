// schemaTypes/index.ts

import course from './course'
import courseModule from './courseModule'
import lesson from './lesson'
import mcq from './mcq'                 // <-- Import this
import mcqQuestion from './mcqQuestion' // <-- And this

export const schemaTypes = [
  course, 
  courseModule, 
  lesson,
  mcq,           // <-- Add this
  mcqQuestion    // <-- And this
]