//ORM del documento aprendiz

//hacemos destructuring de la clase mongoose y extraemos los metodos Schema: Crear el documento y model para invocar metodos de consulta
const { Schema, model } = require("mongoose");

const AprendizSchema = new Schema({
  //   apodo: String,
  //   nombre: String,
  //   edad: Number,
  //   activo: Boolean,

  apodo: {
    type: String,
    required: true,
    default: "XT",
  },
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
  },

  estado: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Aprendiz", AprendizSchema);
