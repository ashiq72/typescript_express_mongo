import { Student } from '../interfaces/student'
import { StudentModel } from '../models/student'

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)

  return result
}

const getAllStudentsFormDB = async () => {
  const result = await StudentModel.find()
  return result
}

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFormDB,
}
