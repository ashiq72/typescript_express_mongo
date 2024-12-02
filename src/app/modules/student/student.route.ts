import express from 'express'
import { studentControllers } from './student.controller'

const router = express.Router()

// will call controller function
router.post('/create-student', studentControllers.createStudent)
router.get('/students', studentControllers.getAllStudents)

export const StudentRoutes = router
