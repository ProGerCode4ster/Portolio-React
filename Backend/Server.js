const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const projectRoutes = require("./routes/projectRoutes")
const testimonialRoutes = require("./routes/testimonialRoutes")
const experienceRoutes = require("./routes/experienceRoutes")
const serviceRoutes = require("./routes/serviceRoutes")


const app = express()

//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

// Connect to DB and Start Server
const PORT = process.env.PORT || 4000;
mongoose
     .connect(process.env.MONGO_URI)
     .then(()=>{
        app.listen(PORT,() => {
            console.log(`Server Running on port ${PORT}`);
        })
        console.log("Connected to Database successfully!")
     })
     .catch((err) => console.log(err))
        
//Route middleware
app.use("/api/projects", projectRoutes)
app.use("/api/experiences", experienceRoutes)
app.use("/api/services", serviceRoutes)
app.use("/api/testimonials", testimonialRoutes)
app.use("/", (req, res)=>{
    console.log(req.path, req.method)
})