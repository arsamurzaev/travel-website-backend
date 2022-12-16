const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

module.exports.userController = {

    postUser: async (req, res) => {
        // Выгрузка данных с req.body
        try {
            // выгружаем "результат валидации". 
            const errors = validationResult(req)
            // Еррорс коли не ппуст, то выврлим ошибку, ясен пень.
            if (!errors.isEmpty) {
                res.json(400).res({message: "Ошибка при регистрации"})
            }
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
                documents,
            } = req.body

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
                documents,                
                password: hashPassword
            })
            // это уже ответ пользователю, возвращается юзер
            res.status(200).json(user)

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

