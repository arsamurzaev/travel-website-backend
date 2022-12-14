const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
  requisites: {
    name_organization: { type: String, required: true },
    INN: { type: Number, required: true },
    legal_address: { type: String, required: true },
    BIK_bank: { type: Number, required: true },
    initials_user: { type: String, required: true },
  },
  contacts: {
    adress: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
  },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
