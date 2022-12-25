const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  // Организация разместившая тур
  creatorTour: { type: mongoose.SchemaTypes.ObjectId, 
  ref: "Organization" },
  // Отель который организовывает тур
  hotelId: { type: mongoose.SchemaTypes.ObjectId, ref: "Hotel" },
  // Навзание тура
  name: { type: String, required: true },
  // список номеров учавствующих в туре
  rooms: [],
  // Описание тура
  description: {
    type: String,
    default: "",
  },
  // Маршруты
  route: {
    MainPointsOfVisit: Array,
  },
  // Дополнительная информация
  info: {
    // питание
    food: { type: String, default: "Без питания" },
    // тип тура
    restType: { type: String, default: "Городские туры" },
    // тип пляжа
    beach: { type: String, default: "Песчанный пляж" },
    // тип перелета
    flight: { type: String, default: "Чартерный" },
    // цена
    price: { type: Number, default: 60000 },
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
