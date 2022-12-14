const User = require('../models/User.midel')

module.exports.userController={
    
    postUser: async (req, res)=>{
        const {firstName, secondName, lastName, mail, numderPhone, birthday, gender, adress, documents,seriesOfTheDocument, numberOfTheDocument, dataOfIssue, issuedByWhom, divisionCode } = req.body
        try {
           const user = await User.create({
            firstName, secondName, lastName, mail, numderPhone, birthday, gender, adress, documents,seriesOfTheDocument, numberOfTheDocument, dataOfIssue, issuedByWhom, divisionCode
           }) 
           res.json(user)

        } catch (error) {
            res.json({error: error.toString()})
        }
    }, 
    getUser: async(_, res) =>{
        try {
            const user = await User.find()
            res.json(user)
        } catch (error) {
            res.json({error: error.toString()})
        }
    }
}