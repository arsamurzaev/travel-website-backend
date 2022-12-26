const Organization = require('../models/Organization.model');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { secret } = require('../config')


// dotenv

const {JWT_SECRET} = process.env

// funtions
// Кароче этот булзит помогает генерировать токен
// Можно заставить его принимать аргументы какие угодно,
// будь то юзер нейм, пароль или как в нашем случае роль и айди
const generateAccesToken = (id) => {
    // Пайлод эт как бы данные да, которые будут в дальнейшем
    // обрабатываться, очевидно
    const payload = {
        id
    }
    // Вот таким образом собсна генерируется сам токен, еперный театр. 
    // метод sign принимает пайлод, секретный код (который в файле конфиг) 
    // и время действия токена
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '24h'})
}

module.exports.organizationController = {
    getAllOrganization: async (req, res) => {
    try {
        const organizations = await Organization.find();
        res.json(organizations);
    } catch (error) {
        res.json({ error: error.message })
    }
},
    createOrganization: async (req, res) => {
        try {
            const {
                login,
                password,
                requisites,
                contacts,
            } = req.body;

            const hashPassword = bcrypt.hashSync(password, 5);


            const organization = await Organization.create({
                login,
                password: hashPassword,
                requisites,
                contacts,
            });
            res.status(200).json(organization);
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    updateOrganization: async (req, res) => {
        try {
            const { login, password, requisites, contacts } = req.body;
            const organization = await Organization.findByIdAndUpdate(req.params.id, {
                login,
                password,
                requisites,
                contacts,
            },
            { new: true })
            
            res.status(200).json(organization);
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    deleteOrganization: async (req, res) => {
        try {
            const organization = await Organization.findByIdAndDelete(req.params.id);
            res.json(organization);
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    loginOrganisation: async (req, res) => {
        try {
            // выгружаем лог-пас из рек.бади
            const {login, password} = req.body

            // Поиск организации по логину
            const organization = await Organization.find({login})

            // если такого логина нет, то
            if (!organization) {
                res.status(400).json(`Организации с логином ${login} не существует.`)
            }

            // Чекает валиден ли этот пароль. Тру фолс вернет
            const validPassword = bcrypt.compareSync(password, organization.password)

            // Ну тут ясно
            if (!validPassword) {
                res.status(400).json(`Неверный пароль.`)
            }

            const token = generateAccesToken()

            res.json(token)

        } catch (error) {
            res.status(400).res({error: error})
        }
    }
};