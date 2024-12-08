import { model, Schema } from 'mongoose'
import { Course } from '../interfaces/course'

const courseSchema = new Schema<Course>({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true },
  maxStudents: { type: Number, required: true },
  students: [{ type: String }],
  teachers: [{ type: String }],
  semester: { type: String, required: true },
  semesterDuration: { type: Number, required: true },
  courseMaterials: [{ type: String }],
})

export const CourseModel = model<Course>('Course', courseSchema)
