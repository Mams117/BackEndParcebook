const { Schema, model } = require("mongoose");

//TODO:revisar los tipos de datos:https://mongoosejs.com/docs/schematypes.html
const Usuario = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apodo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      default: "email@email.com",
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      default: "user",
    },
    imagen: {
      type: String,
      default: "foto.png",
    },
    fechaCreacion: {
      type: String,
      default: Date.now,
    },
  },
  { collection: "usuario" }
);

module.exports = model("Usuario", Usuario);
