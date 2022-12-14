const {Router} = require('express')
const { userController } = require('../controllers/users.controller')
const router = Router()

router.post('/add/user', userController.postUser)
router.get('/users', userController.getUser)

module.exports = router