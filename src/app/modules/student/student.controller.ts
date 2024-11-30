import { Request, Response } from 'express'
import { studentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student

    // will call service function to send this data

    const result = await studentServices.createStudentIntoDB(student)

    res.status(200).send({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const studentControllers = {
  createStudent,
}
