import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("This is home page")
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening to port: ${process.env.PORT}`);
});
