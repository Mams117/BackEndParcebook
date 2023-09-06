//controlador de aprendiz :crear,delete,buscar,actualizar
//creacion usando programacion funcional
//crear

const Crear = (req, res) => {
  return res.status(200).json({
    id: 100,
    nombre: "pedro",
    estado: true,
  });
};

const Borrar = (req, res) => {
  return res.status(200).json({
    mensaje: "borrado registro correctamente",
  });
};

const Actualizar = (req, res) => {
  return res.status(200).json({
    actualizado: "correctamente",
  });
};

const Consultar = (req, res) => {
  return res.status(200).json({
    actualizado: "correctamente",
  });
};

module.exports = {
  Crear,
  Borrar,
  Actualizar,
  Consultar,
};
