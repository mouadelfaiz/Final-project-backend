import express from "express";
import mongoose from "mongoose";
import { ProjectsModel } from "../modules/Projects.js";
import { UserModel } from "../modules/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await ProjectsModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// Create a new Project
router.post("/", async (req, res) => {
  const project = new ProjectsModel(req.body);
  try {
    const response = await project.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// Save a Project
router.put("/", async (req, res) => {
  try {
    const project = await ProjectsModel.findById(req.body.projectID);
    const user = await UserModel.findById(req.body.userID);
    user.savedProjects.push(project);
    await user.save();
    res.json({ savedProjects: user.savedProjects });
  } catch (error) {
    res.json(error);
  }
});

 router.get('/doneprojects/ids/:userID', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID)
    res.json({doneProjects: user?.savedProjects})
  } catch (error) {
    res.json(error)
  }
 })

// get saved projects
router.get("/doneprojects/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    const savedProjects = await ProjectsModel.find({_id: {$in: user.savedProjects}})
    res.json({savedProjects})
  } catch (error) {
    res.json(error);
  }
});

export { router as projectsRouter };

