import mongoose from 'mongoose'
import { Student } from './student.interface'
import { StudentModel } from '../student.model'

const createStudentIntoDB = async (student: Student) => {
  // Connect to your MongoDB database here
  // await mongoose.connect(database_url);
  const result = await StudentModel.create(student)
  return result
}

export const studentServices = {
  createStudentIntoDB,
}
