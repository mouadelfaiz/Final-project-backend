import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../modules/Users.js"

const router = express.Router()

router.post("/register", async (req, res) => {
  const {username, password} = req.body

  const user = await UserModel.findOne({username})

  if (user) {
    return res.json({ message: "This username already exists!"})
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = new UserModel({username, password: hashedPassword})
  await newUser.save()

  res.json({ message: "User Registered Successfully"})
})

router.post("/login", async (req, res) => {
  const { username, password} = req.body
  const user = await UserModel.findOne({ username})

if (!user) {
  return res.json({message: "This User Doesn't Exist"})
}
const isPasswordValid = await bcrypt.compare(password, user.password)

if (!isPasswordValid) {
  return res.json({message: "User or Password Is Incorrect!"})
}

const token = jwt.
})

export {router as userRouter}