import mongoose from "mongoose";


const UserShema = new mongoose.Schema({
  username: {type: String, require: true, unique: true},
  password:{type: String, require: true},
  savedProjects: [{type: mongoose.Schema.Types.ObjectId, ref: "projects"}]
})

export const UserModel = mongoose.model("users", UserShema)