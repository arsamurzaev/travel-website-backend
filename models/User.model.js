const mongoose = require("mongoose");
//модель для юзера
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  mail: { type: String, unique: true, required: true },
  numderPhone: { type: Number, unique: true, required: true },
  birthday: { type: String, required: true, default: "" },
  gender: { type: String, required: true, default: "" },
  fullAdress: { type: String, required: true, default: "" },
  documents: {
    document: { type: String, required: true, default: "" },
    seriesOfTheDocument: {
      type: String,
      unique: true,
      required: true,
      default: "",
    },
    numberOfTheDocument: {
      type: String,
      unique: true,
      required: true,
      default: "",
    },
    dataOfIssue: { type: String, required: true, default: "" },
    issuedByWhom: { type: String, required: true, default: "" },
    divisionCode: { type: String, required: true, default: "" },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
