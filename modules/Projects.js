import mongoose, { modelNames } from "mongoose";

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  task: [
    {
      type: String,
      required: true,
    },
  ],

  imgUrl: {
    type: String,
    required: true,
  },
  worktime: {
    type: Number,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const ProjectsModel = mongoose.model("Projects", ProjectsSchema);
