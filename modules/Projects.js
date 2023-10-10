import mongoose from "mongoose";


const ProjectsShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
})

export const ProjectsModel = mongoose.model("Projects", ProjectsShema)