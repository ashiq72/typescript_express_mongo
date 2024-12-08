import { Request, Response } from 'express'
import { courseServices } from '../services/course'

const createCourse = async (req: Request, res: Response) => {
  try {
    const course = req.body.course

    // will call service function to send this data

    const result = await courseServices.createCourseDB(course)

    res.status(200).send({
      success: true,
      message: 'Course created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const courseControllers = {
  createCourse,
}
