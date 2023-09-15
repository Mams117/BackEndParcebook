//controlador de Usuario :crear,delete,buscar,actualizar
//creacion usando programacion funcional
//crear

const Usuario = require("../model/Usuario");
const bcrypt = require("bcrypt");

//Insercion en la base de datos
//TODO:validacion de los datos antes de los cambios: validator
//TODO:subir archivos y fotos a la base de datos
const Crear = (req, res) => {
  try {
    //recibir los datos del formulario
    let data = req.body; //llega toda la data del formulario serializada en url encode
    //instanciar el objeto para envio de los datos
    let Usuario = new Usuario(data);
    //guardar informacion en mongo
    Usuario.save();
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

const registrar = async (req, res) => {
  try {
    //datos que llegan del request
    let data = req.body;
    //instanciamos el modelo Usuario (creamos un objeto usuario basado en la superclase)
    let usuarioNuevo = new Usuario(data);

    let consulta = await Usuario.find({
      $or: [
        { apodo: usuarioNuevo.apodo.toLowerCase() },
        { apodo: usuarioNuevo.email.toLowerCase() },
      ],
    }).exec();

    if (consulta.length > 0) {
      return res.status(500).json({
        mensaje: "el email o usuario ya existe en la base de datos",
      });
    } else {
      let passwordEncriptado = await bcrypt.hash(usuarioNuevo.password, 10);
      usuarioNuevo.password = passwordEncriptado;
      usuarioNuevo.save();
      return res.status(200).json({
        status: "ok",
        mensaje: "registro exitoso",
      });
    }
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error en consulta",
      //resultado: consulta,
    });
  }
};

const listarTodos = async (req, res) => {
  try {
    let consulta = await Usuario.find({}).sort({ apodo: -1 }).limit(2).exec();
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
    let consulta = await Usuario.findById(id).exec();
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
    let consulta = await Usuario.findByIdAndDelete(id).exec();
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
    let consulta = await Usuario.findByIdAndUpdate({ _id: id }, data).exec();
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

  //recibir toda la informacion modificada

  //buscar y editar el registro de acuerdo al id
};

module.exports = {
  Crear,
  registrar,
  Actualizar,
  listarTodos,
  listarUno,
  eliminarUno,
};
