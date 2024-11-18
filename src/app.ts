import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.send("post request");
});

export default app;
