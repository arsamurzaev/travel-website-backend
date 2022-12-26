const mongoose = require('mongoose')

const basketSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: "User"
    },
    tours: [{
        toursId:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Tour"
        }
    }],
    
})

const BasketTour = mongoose.model('BasketTour', basketSchema)

module.exports = BasketTour