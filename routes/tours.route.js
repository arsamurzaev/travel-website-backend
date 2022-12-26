const { Router } = require('express')
const { tourController } = require('../controllers/tours.controller')

const router = Router()

router.post("/post/tour", tourController.postTour)
router.get("/get/tours", tourController.getTours)
module.exports = router 