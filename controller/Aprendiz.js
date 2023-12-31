//controlador de aprendiz :crear,delete,buscar,actualizar
//creacion usando programacion funcional
//crear

const Aprendiz = require("../model/Aprendiz");

//Insercion en la base de datos
//TODO:validacion de los datos antes de los cambios: validator
//TODO:subir archivos y fotos a la base de datos
const Crear = (req, res) => {
  try {
    //recibir los datos del formulario
    let data = req.body; //llega toda la data del formulario serializada en url encode
    //instanciar el objeto para envio de los datos
    let aprendiz = new Aprendiz(data);
    //guardar informacion en mongo
    aprendiz.save();
    return res.status(200).send({
      mensaje: "insercion Exitosa",
      estado: true,
    });
  } catch (error) {
    return res.status(400).send({
      mensaje: "error en la insercion",
      estado: false,
      error: error.message,
    });
  }
};

//borrado de un registro
const Borrar = (req, res) => {};

//consultar un registro

//TODO:asi se hacia  hasta la version anteriror de mongoose

/* const listarTodos = (req, res) => {
  try {
    let consulta = Aprendiz.find({}).exec((error, listado) => {
      return res.status(200).send({
        listado: "Consulta realizada correctamente",
      });
    });
  } catch (error) {}
}; */
const listarTodos = async (req, res) => {
  try {
    let consulta = await Aprendiz.find({}).sort({ apodo: -1 }).exec();
    return res.status(200).json({
      mensaje: "Consulta exitosa",
      resultado: consulta,
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en consulta",
      resultado: consulta,
    });
  }
};

//listar por ID
const listarUno = async (req, res) => {
  let id = req.params.id;
  try {
    let consulta = await Aprendiz.findById(id).exec();
    return res.status(200).json({
      mensaje: "Consulta exitosa",
      resultado: consulta,
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en consulta",
    });
  }
};

const eliminarUno = async (req, res) => {
  let id = req.params.id;
  try {
    let consulta = await Aprendiz.findByIdAndDelete(id).exec();
    return res.status(200).json({
      mensaje: "Eliminado exitoso",
      resultado: consulta,
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en consulta",
    });
  }
};

//consultar todos los registros
const Actualizar = async (req, res) => {
  //recibir el id del registro a editar

  let id = req.params.id;
  let data = req.body;
  try {
    let consulta = await Aprendiz.findByIdAndUpdate({ _id: id }, data).exec();
    return res.status(200).json({
      actualizado: "correctamente",
      id: id,
      DatosNuevos: data,
    });
  } catch (error) {
    return res.status(400).json({
      actualizado: "Error en la edicion",
      resultado: consulta,
    });
  }
};

module.exports = {
  Crear,
  Borrar,
  Actualizar,
  listarTodos,
  listarUno,
  eliminarUno,
};
