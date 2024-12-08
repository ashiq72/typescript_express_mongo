import express from 'express'
import { studentControllers } from '../controllers/student'
import { courseControllers } from '../controllers/course'

const router = express.Router()

// will call controller function
router.post('/create-student', studentControllers.createStudent)
router.post('/create-course', courseControllers.createCourse)
router.get('/students', studentControllers.getAllStudents)

export const StudentRoutes = router
export const CourseRoutes = router
