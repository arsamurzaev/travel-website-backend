
const {Router} = require('express')
const {userController} = require('../controllers/users.controller')
const router = Router()
const {check} = require('express-validator')
const middleware = require('../middlewares/authMiddleware')
// тут сверху - валидатор от экспресс. Ниже он применяется как мидлвейр


router.post("/add/user", [
    // остается дописать валидацию для:
    // номера телефона, гендера, и если надо документов (хз зочем)
    check('firstName', 'поле не должно быть пустым').notEmpty(),
    check('secondName', 'поле не должно быть пустым').notEmpty(),
    check('lastName', 'поле не должно быть пустым').notEmpty(),
    check('password', 'пароль должен содердать 4-18 символов').isLength({min: 4, max: 18}),
    check('mail', 'почта должна быть в формате intocode@intocode.ru').isEmail(),
], userController.postUser);
router.post("/login", userController.login);
router.patch("/edit/user/:id", userController.editUserById)
router.get("/users", middleware, userController.getUsers)
// 


module.exports = router;
