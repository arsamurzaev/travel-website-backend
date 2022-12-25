const BasketTour = require('../models/Basket.model')

module.exports.basketController = {
    addBasket: async (req, res)=>{
        
        try {
            const tour = await BasketTour.findOneAndUpdate({userId:req.user.id}, {
                $addToSet:{
                    tours: req.body
                }
            },{new: true})
            res.json(tour)
        } catch (error) {
            res.json({error: error.toString()})
        }
    }
}