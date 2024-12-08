import express, { Request, Response } from 'express'
import cors from 'cors'
import { CourseRoutes, StudentRoutes } from './routes/student.route'
const app = express()

// parsers
app.use(express.json())
app.use(cors())

//applications routes
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/coures', CourseRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Home page')
})

export default app
