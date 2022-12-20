const User = require('../models/User.midel')

module.exports.userController={
    
    postUser: async (req, res)=>{
        // console.log(req.body);
        const {firstName, secondName, lastName, mail, numderPhone, birthday, gender, fullAdress, documents } = req.body
        console.log(firstName);
        try {
           const user = await User.create({
            firstName: firstName,
            secondName: secondName,
            lastName: lastName,
            mail: mail,
            numderPhone: numderPhone,
            birthday: birthday,
            gender: gender,
            fullAdress: fullAdress ,
            documents: documents
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