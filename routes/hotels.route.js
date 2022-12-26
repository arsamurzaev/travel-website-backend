const { Router } = require("express");
const { hotelsController } = require("../controllers/hotels.controller");

const router = Router();

router.get("/", hotelsController.getAllHotels);
router.get("/:id", hotelsController.getHotelById);
router.post("/", hotelsController.createHotel);
router.patch("/:id", hotelsController.editHotel);
router.delete("/:id", hotelsController.deleteHotel);

module.exports = router;
