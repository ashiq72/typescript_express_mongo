import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

const PORT = 4000;

async function bootstarp() {
  try {
    await mongoose.connect(config.database_url as string); // eta keno
    app.listen(PORT, () =>
      console.log(`Server is running http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
}

bootstarp();
