import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()

// parsers
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  var a = 10
  res.send(a)
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)

  res.send('post request')
})

export default app
