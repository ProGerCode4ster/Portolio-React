const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please add a name"]
    },
    email: {
        type: String,
        required:[true,"Please add an Email"],
        unique: true,
        trim: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required:[true,"Please add a password"],
        minLength:[6,"Paaword must be equal to 6 characters"],
        maxlength:[23, "Password less than 23 characters"]
    },
    photo:{
        type: String,
        required:[true,"Please add a photo"],
        default: "+234"
    },
    bio:{
        type: String,
        maxlength:[250,"Bio must not be more than 250"],
        default:"bio",
    },
},
{
    timestamps: true, 
}
);

const Experience = mongoose.model("user", userSchema)
module.exports = Experience 