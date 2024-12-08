import { Course } from '../interfaces/course'
import { CourseModel } from '../models/course'

const createCourseDB = async (course: Course) => {
  const result = await CourseModel.create(course)
  return course
}

export const courseServices = {
  createCourseDB: createCourseDB,
}
