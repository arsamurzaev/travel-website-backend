const { Router } = require("express");
const { hotelsController } = require("../controllers/hotels.controller");

const router = Router();

router.get("/hotels", hotelsController.getAllHotels);
router.get("/hotels/:id", hotelsController.getHotelById);
router.post("/hotels", hotelsController.createHotel);
router.patch("/hotels/:id", hotelsController.editHotel);
router.delete("/hotels/:id", hotelsController.deleteHotel);

module.exports = router;
