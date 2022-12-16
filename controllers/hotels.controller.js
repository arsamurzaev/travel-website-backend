const Hotel = require("../models/Hotel.model");

module.exports.hotelsController = {
  getAllHotels: async (req, res) => {
    try {
      const hotels = await Hotel.find();

      res.json(hotels);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getHotelById: async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.json(hotel);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  createHotel: async (req, res) => {
    const { hotelName, image, mood, rating, description, rooms } = req.body;
    try {
      const hotel = await Hotel.create({
        hotelName,
        $push: {
          image,
        },
        mood,
        rating,
        description,
        rooms,
      });

      res.json(hotel);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  editHotel: async (req, res) => {
    const { hotelName, image, mood, rating, description, rooms } = req.body;
    try {
      const hotel = await Hotel.findByIdAndUpdate(req.params.id, {
        hotelName,
        $push: {
          image,
        },
        mood,
        rating,
        description,
        rooms,
      });

      res.json(hotel);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteHotel: async (req, res) => {
    try {
      const hotel = await Hotel.findByIdAndDelete(req.params.id);

      res.json(hotel);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
