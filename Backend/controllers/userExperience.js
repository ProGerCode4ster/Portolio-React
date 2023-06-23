const mongoose = require ('mongoose')
const Experience = require ("../models/experienceModel");


//funcions to get all the experience in the database
async function getAllExperience(req, res, next){
    try {
        const experiences = await Experience.find({})
    
        return next(
            res.status(200).json(experiences)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
    
}

//function to create a document to the database
async function createExperience(req, res, next){
    const experienceData= req.body;

    try {
        const newExperience = await Experience.create(experienceData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Experience succefully added!"
            })
        
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
    
}

//functions to get one document from the database
async function getOneExperience(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const experience = await Experience.findById({_id : id })

    if(!experience){
        return next(
            res.status(404).json({
                message: "Experience  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (experience)
    )
}


//function to update an experience

async function updateExperience(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const experience = await Experience.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!experience){
        return next(
            res.status(404).json({
                message: "experience Not Found"
            })
        )
    }

    return next(
        res.status(200).json(experience)
    )
}

//function to delete an experience from  a database
async function deleteExperience(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const experience = await Experience.findByIdAndDelete({_id: id })

if(!experience){
        return next(
            res.status(404).json({
                message: "experience Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Experience succefully deleted!"
        })
       
    )
}

module.exports = { getAllExperience, getOneExperience, createExperience, updateExperience, deleteExperience }

