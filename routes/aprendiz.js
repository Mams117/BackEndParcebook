//creacion de las rutas
const express = require("express");
const router = express.Router();

const aprendizControlador = require("../controller/Aprendiz");

//rutas con la logica del controlador
router.get("/aprendiz/listarTodos", aprendizControlador.listarTodos);
router.get("/aprendiz/listarUno/:id", aprendizControlador.listarUno);
router.post("/aprendiz/Crear", aprendizControlador.Crear);
router.delete("/aprendiz/eliminarUno/:id", aprendizControlador.eliminarUno);
router.put("/aprendiz/Actualizar", aprendizControlador.Actualizar);

module.exports = router;
