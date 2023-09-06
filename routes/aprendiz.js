//creacion de las rutas
const express = require("express");
const router = express.Router();

const aprendizControlador = require("../controller/Aprendiz");
const clientesControlador = require("../controller/clientes");

//rutas con la logica del controlador

router.get("/aprendiz/Crear", aprendizControlador.Crear);
router.delete("/aprendiz/Borrar", aprendizControlador.Borrar);
router.put("/aprendiz/Actualizar", aprendizControlador.Actualizar);
router.put("/aprendiz/Consultar", aprendizControlador.Consultar);

router.get("/clientes/Crear", clientesControlador.Crear);
router.delete("/clientes/Borrar", clientesControlador.Borrar);
router.put("/clientes/Actualizar", clientesControlador.Actualizar);
router.put("/clientes/Consultar", clientesControlador.Consultar);

module.exports = router;
