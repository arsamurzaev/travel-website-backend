const Tour = require("../models/Tour.model");

module.exports.tourController = {
  postTour: async (req, res) => {
    const { creatorTour, hotelId, name, rooms, description, route, info } = req.body;
    console.log(route);
    try {
      const tour = await Tour.create({
        creatorTour,
        hotelId,
        name,
        rooms,
        description,
        route,
        info,
      });
      res.status(200).json(tour);
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
  getTours: async (req, res) => {
    try {
      const tours = await Tour.find({});
      res.json(tours);
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
};
