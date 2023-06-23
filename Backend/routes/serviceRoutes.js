const express = require("express");
const { getAllService, getOneService, updateService, createService, deleteService } = require("../controllers/userService");

const router = express.Router();

// Get all Services
router.get("/", getAllService);

// Get a single Service
router.get("/:id", getOneService);

// Update a Service
router.patch("/:id", updateService);

// Create a new Service 
router.post("/", createService);

// delete a Service 
router.delete("/:id", deleteService);

module.exports = router;