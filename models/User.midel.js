const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {type:String, required: true},
    secondName:{type:String, required:true},
    lastName: {type:String, required:true},
    mail:{type:String, required:true},
    numderPhone:{type:Number, required:true},
    birthday:{type:String, required:true},
    gender:{type:String, required:true},
    fullAdress:{ type: String, require: true}, 
    documents:{
        document:{type: String, required:true},
        seriesOfTheDocument:{type: String, required:true},
        numberOfTheDocument:{type: String, required:true},
        dataOfIssue:{type: String, required:true},
        issuedByWhom:{type:String, required:true},
        divisionCode:{type: String, required:true}
    }
})

const User = mongoose.model("User",  userSchema)

module.exports = User