const { Router } = require("express");

// все роуты сюда
const router = Router();

router.use("/hotels", require("./hotels.route"));

module.exports = router;
