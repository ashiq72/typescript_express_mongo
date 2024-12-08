import { Schema, model, connect } from 'mongoose'
import { Gurdian, localGurdian, Student, userName } from '../interfaces/student'
import validator from 'validator'

const userNameSchema = new Schema<userName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [20, 'More than 20 characters'],
    trim: true,
    validate: {
      validator: function (value: String) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
        if (value !== firstNameStr) {
          return false
        }
        return false
      },
      message: '{VALUE} is not ',
    },
  },
  middleName: { type: 'string' },
  lastName: {
    type: 'string',
    required: [true, 'First name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not',
    },
  },
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
  id: { type: 'string', required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dateOfBirth: { type: 'String' },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid email',
    },
  },
  contactNo: { type: 'String', required: true },
  emargencyNo: { type: 'String', required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B'],
  },
  presentAddress: { type: 'String', required: true },
  permanentAddress: { type: 'String', required: true },
  gurdian: {
    type: gurdianSchema,
    required: true,
  },
  localGurdian: { type: localGurdianSchemas, required: true },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
})

export const StudentModel = model<Student>('Student', studentSchema)
