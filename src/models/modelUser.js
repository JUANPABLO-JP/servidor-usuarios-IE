const { Schema, model } = require("mongoose");

const userUptc = Schema({
  Nombre: { type: String },
  Email: { type: String },
  Telefono: { type: String },

});

module.exports = model("Users", userUptc);
