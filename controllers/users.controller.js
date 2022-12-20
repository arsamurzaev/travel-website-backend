const User = require('../models/User.model')
const bcrypt = require('bcrypt') // imported bcrypt [npm i bcrypt]
const { validationResult } = require('express-validator') // importede validator from express-validator [npm i express-validator]
const jwt = require('jsonwebtoken') // jwt, we donwloaded [npm i jsonwebtoken]
const { secret } = require('../config')

// funtions
// Кароче этот булзит помогает генерировать токен
// Можно заставить его принимать аргументы какие угодно,
// будь то юзер нейм, пароль или как в нашем случае роль и айди
const generateAccesToken = (id, role) => {
    // Пайлод эт как бы данные да, которые будут в дальнейшем
    // обрабатываться, очевидно
    const payload = {
        id
    }
    // Вот таким образом собсна генерируется сам токен, еперный театр. 
    // метод sign принимает пайлод, секретный код (который в файле конфиг) 
    // и время действия токена
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

// controller 

module.exports.userController={
    //Запрос на добавление юзера
    postUser: async (req, res)=>{
        // console.log(req.body);
 
        try {
            // выгружаем "результат валидации". 
            const errors = validationResult(req)
            // Еррорс коли не ппуст, то выврлим ошибку, ясен пень.
            if (!errors.isEmpty) {
                res.json(400).res({message: "Ошибка при регистрации"})
            }
            const {firstName, secondName, lastName, mail, numderPhone, birthday, gender, fullAdress, documents } = req.body

            const hashPassword = bcrypt.hashSync(password, 5)
            // Сохраняем на бэке эти данные, предварительно поменяв данные, а то там останется
            // по умолчанию с бэка
            const user = await User.create({
                firstName: firstName,
                secondName: secondName,
                lastName: lastName,
                mail: mail,
                numderPhone: numderPhone,
                birthday: birthday,
                gender: gender,
                fullAdress: fullAdress ,
                documents: documents,           
                password: hashPassword
            })
            // это уже ответ пользователю, возвращается юзер
            res.status(200).json(user)

        } catch (error) {
            // Ну тут итак все ясно
            res.json({ error: error.toString() })
        }
    },
    login: async (req, res) => {
        try {
            // Как обычно выгружаем с req body необходимое для дальнейшей обработки
            const {mail, numderPhone, password} = req.body
            // Ищем юзера по ключу, сравнивая
            const user = await User.findOne({mail})
            // Если юзера нет, то воот
            if (!user) {
                res.status(400).json(`Пользователя с почтой ${mail} не существует`)
            }
            // Тут проверяетсяя, валиден ли пароль. Скорее всего, он говорит тру, фолс
            const validPassword = bcrypt.compareSync(password, user.password)
            // Если Нэт валид пасворда, то вооот
            if (!validPassword) {
                res.status(400).json(`Пароль недействителен`)
            }

            const token = generateAccesToken(user._id)

            res.json(token)
        } catch (error) {
            res.json({ error: error.toString() })
        }
    },
    getUsers: async (req, res) => {
        try {
            const allUsers = await User.find()
            res.status(200).json(allUsers)
        } catch (error) {
            res.status(400).json({error: error.toString()})
        }
    }
  }
//   пишу теперь возможности авторизированному пользователю