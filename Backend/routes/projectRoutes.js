const express = require("express");
const { getAllProjects, getOneProject, updateProject, createProject, deleteProject } = require("../controllers/userProject");

const router = express.Router();

// Get all Projects
router.get("/", getAllProjects);

// Get a single Project
router.get("/:id", getOneProject);

// Update a Project
router.patch("/:id", updateProject);

// Create a new Project 
router.post("/", createProject);

// delete a Project 
router.delete("/:id", deleteProject);

module.exports = router;