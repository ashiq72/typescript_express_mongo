import express from 'express'
import { studentControllers } from '../controllers/student'

const router = express.Router()

// will call controller function
router.post('/create-student', studentControllers.createStudent)
router.get('/students', studentControllers.getAllStudents)

export const StudentRoutes = router
