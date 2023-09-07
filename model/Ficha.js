const { Schema, model } = require("mongoose");
const { schema } = require("./Aprendiz");
//TODO:revisar los tipos de datos:https://mongoosejs.com/docs/schematypes.html
const Ficha = new schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Ficha", Ficha);
