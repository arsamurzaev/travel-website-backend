const { Router } = require("express");

const router = Router();

router.use("/hotels", require("./hotels.route"));
router.use(require("./users.route"));
router.use(require('./organizations.route'))

module.exports = router;


