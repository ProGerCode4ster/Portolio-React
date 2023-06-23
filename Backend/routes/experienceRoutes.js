const express = require("express");
const { getAllExperience, getOneExperience, updateExperience, createExperience, deleteExperience } = require("../controllers/userExperience");

const router = express.Router();

// Get all Experiences
router.get("/", getAllExperience);

// Get a single Experience
router.get("/:id", getOneExperience);

// Update a Experience
router.patch("/:id", updateExperience);

// Create a new Experience 
router.post("/", createExperience);

// delete a Experience 
router.delete("/:id", deleteExperience);

module.exports = router;