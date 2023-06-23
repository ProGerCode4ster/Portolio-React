const express = require("express");
const { getAllTestimonial, getOneTestimonial, updateTestimonial, createTestimonial, deleteTestimonial } = require("../controllers/userTestimonial");

const router = express.Router();

// Get all Testimonials
router.get("/", getAllTestimonial);

// Get a single Testimonial
router.get("/:id", getOneTestimonial);

// Update a Testimonial
router.patch("/:id", updateTestimonial);

// Create a new Testimonial 
router.post("/", createTestimonial);

// delete a Testimonial 
router.delete("/:id", deleteTestimonial);

module.exports = router;