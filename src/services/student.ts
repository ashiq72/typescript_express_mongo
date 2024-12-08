import mongoose from 'mongoose'
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

const getSingleStudentFromDB = async (studentId: String) => {
  const result = await StudentModel.findOne(studentId)
  // const result = id
  return result
}

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFormDB,
  getSingleStudentFromDB,
}
