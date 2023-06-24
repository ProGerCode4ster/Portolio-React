const express = require('express');
const mongoose = require("mongoose");
const projectRoute = require('./routes/projectRoutes');
const serviceRoute = require('./routes/serviceRoutes');
const testimonialRoute = require('./routes/testimonialRoutes');
const experienceRoute = require('./routes/experienceRoutes');
require('dotenv').config({path: './.env'});
const cors = require("cors")

const app =express();

const PORT = process.env.PORT;
const DBURL = process.env.DBURL;

mongoose.connect(DBURL)
.then(()=>{
    app.listen(PORT, function(){
        console.log ("listening on port",PORT)
    })
    console.log("Successfully connected to the Database")
})
.catch((error)=>{
    console.log("Database Error", error)}
)

// middleware
app.use(express.json());
app.use( (req, res, next) =>{
    console.log(req.path, req.method);
    next();
});
app.use(cors({
    "origin" : ["http://127.0.0.1:3000", "https://myportfolio-react-czib.onrender.com/"],
    "methods" : ["GET", "POST", "DELETE", "PATCH"]
}));


//defining route
app.use("/projects", projectRoute);
app.use("/services", serviceRoute);
app.use("/experiences", experienceRoute)
app.use("/testimonials", testimonialRoute);
app.use("/", (req, res)=>{
    return (
        res.status(200).json({
            message: "Root URL, Please navigate to a valid Endpoint"
        })
    )
})
