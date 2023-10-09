import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";

import {userRouter} from "./routes/users.js"

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("App connected to database");
  app.listen(process.env.PORT || 3001, () => {
    console.log(`App is listening to port: ${process.env.PORT}`);
  });
}).catch((error) => {
  console.log(error);
})

app.get("/", (req, res) => {
  res.send("This is home page");
});

