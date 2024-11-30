import { Schema, model, connect } from 'mongoose'
import {
  Gurdian,
  localGurdian,
  Student,
  userName,
} from './student/student.interface'

const userNameSchema = new Schema<userName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: { type: 'string' },
  lastName: { type: 'string', required: true },
})

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const localGurdianSchemas = new Schema<localGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  Address: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
  id: { type: 'string' },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: 'String' },
  email: { type: String, required: true },
  contactNo: { type: 'String', required: true },
  emargencyNo: { type: 'String', required: true },
  bloodGroup: { type: ['A+', 'A-', 'B'], default: null },
  presentAddress: { type: 'String', required: true },
  permanentAddress: { type: 'String', required: true },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchemas,
  profileImage: { type: String },
  isActive: ['active', 'blocked'],
})

export const StudentModel = model<Student>('Student', studentSchema)
