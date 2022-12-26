const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  // Название отеля
  hotelName: { type: String, required: true },
  // Фотографии отеля максимум 4
  image: [],
  //Расположение
  mood: {
    // Адресс
    adress: {
      // координаты на карте
      card: { type: Number, required: true },
      // название страны
      side: { type: String, required: true },
      // название города
      city: { type: String, required: true },
      // название улицы
      street: { type: String, required: true },
      // номер дома при наличии
      numberBuilding: { type: Number, required: false },
    },
    // Почтовый индекс
    postalCode: { type: Number, required: true },
  },
  // рейтинг Отеля
  rating: { type: Number, default: 0 },
  // описание
  description: {
    // общее количество комнат
    numberAllRooms: { type: Number, required: true },
    // категория комнаты
    roomClass: {
      standart: { description: { type: String, default: "" }, roomNumber: [] },
      economy: { description: { type: String, default: "" }, roomNumber: [] },
      business: { description: { type: String, default: "" }, roomNumber: [] },
    },
    // подробное описание 
    text: String,
    // Комнаты
    rooms: [
      {
        // номер комнаты
        numberRoom: { type: Number, required: true },
        // квадраты комнаты
        widthRooms: { type: Number, default: 20 },
        // на сколько человек расчитано
        roomCapacity: {
          // взрослые
          adultAmount: { type: Number, default: 2 },
          // дети
          kidAmount: { type: Number, default: 1 },
        },
        // дополнительное описание комнаты
        roomDescription: { type: String, required: false },
        // свободна ли комната
        roomsFree: { type: Boolean, default: false },
        // id пользователя занявшего комнату
        roomsOccupied: [
          {
            userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
            room: Number,
          },
        ],
      },
    ],
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
