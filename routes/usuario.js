//creacion de las rutas
const express = require("express");
const router = express.Router();

const usuarioControlador = require("../controller/usuario");

//rutas con la logica del controlador
router.get("/usuario/listarTodos", usuarioControlador.listarTodos);
router.get("/usuario/listarUno/:id", usuarioControlador.listarUno);
router.post("/usuario/Crear", usuarioControlador.Crear);
router.post("/usuario/registrar", usuarioControlador.registrar);
router.delete("/usuario/eliminarUno/:id", usuarioControlador.eliminarUno);
router.put("/usuario/Actualizar/:id", usuarioControlador.Actualizar);

module.exports = router;
