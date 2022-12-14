const User = require('../models/User.model')
const bcrypt = require('bcrypt')

module.exports.userController = {

    postUser: async (req, res) => {
        // Выгрузка данных с req.body
        const {
            firstName,
            secondName,
            lastName,
            password,
            mail,
            numderPhone,
            birthday,
            gender,
            adress,
            document,
            seriesOfTheDocument,
            numberOfTheDocument,
            dataOfIssue,
            issuedByWhom,
            divisionCode,
        } = req.body
        try {
            const hashPassword = bcrypt.hashSync(password, 5)
            // Сохраняем на бэке эти данные, предварительно поменяв данные, а то там останется
            // по умолчанию с бэка
            const user = await User.create({
                firstName,
                secondName,
                lastName,
                mail,
                numderPhone,
                birthday,
                gender,
                adress,
                document,
                seriesOfTheDocument,
                numberOfTheDocument,
                dataOfIssue,
                issuedByWhom,
                divisionCode,
                password: hashPassword
            })
            // это уже ответ пользователю, возвращается юзер
            res.json(user)

        } catch (error) {
            // Ну тут итак все ясно
            res.json({ error: error.toString() })
        }
    },
    getUser: async (_, res) => {
        try {
            const user = await User.find()
            res.json(user)
        } catch (error) {
            res.json({ error: error.toString() })
        }
    }
}