const { Router } = require ('express')
const { basketController } = require('../controllers/basket.controller')
const middleware = require('../middlewares/authMiddleware')

const router = Router()

router.patch("/update/basket", middleware, basketController.addBasket)

module.exports = router 