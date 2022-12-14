const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  lastName: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  numderPhone: { type: Number, required: true, unique: true },
  birthday: { type: String, required: true },
  gender: { type: String, required: true },
  adress: {
    city: { type: String, required: true },
    fullStreet: { type: String, required: true },
    postalode: { type: String, required: true },
  },
  documents: {
    document: { type: String, required: true, unique: true },
    seriesOfTheDocument: { type: String, required: true, unique: true },
    numberOfTheDocument: { type: String, required: true, unique: true },
    dataOfIssue: { type: String, required: true },
    issuedByWhom: { type: String, required: true },
    divisionCode: { type: String, required: true },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
