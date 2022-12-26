// next here - makes work next middleware
const jwt = require('jsonwebtoken');
require('dotenv').config()

const {JWT_SECRET} = process.env

module.exports = (req, res, next) => {

    // 25:26 // https://www.youtube.com/watch?v=d_aJdcDq6AY&t=1478s
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        // в authorization: "Bearer Asasfj23r52ajsa"
        // Поскольку токен передается как указанно выше
        // мы делим содержимое этого хидер.авторизейшн на две части
        //  и спользуем его вторую часть, сам токен [1]
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({message: 'пользователь не авторизован'})
        }
        //  Если токен все таки прилетел, нам необходимо его
        // декодировать, для этого необходим модуль jwt,
        // котрым мы и шифровали это
        // В данный момент в нем лежит тот самый пайлод
        // из контроллеров
        const decodeData = jwt.verify(token, JWT_SECRET)
        // Чтобы мы могли использовать эти данные внутри других
        // функций, пихуем в запросе новое поле юзер и данные туда
        req.organisation = decodeData
        // А эт штука активирует следущий по цепочке миддлвейр
        next()
    } catch (error) {
        console.log(error);
        return res.status(403).json({message: 'пользователь не авторизован'})
    }


}
//  По итогу эта шняга импортируется в роуты