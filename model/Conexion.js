//clase donde instanciamos mongo: ORM

const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/db_redsocial");
    console.log("Conexion exitosa a la base de datos");
  } catch (error) {
    console.log("Error en la conexion: " + error.message);
    //throw new Error(error.message);
  }
};
module.exports = conexion;
