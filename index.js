//librerias necesarias para la aplicacion
const express = require("express"); //para programar los verbos HTTP
const cors = require("cors");

const app = express();
const puerto = 3900;

//conexion base de datos

const conexion = require("./model/Conexion");
conexion();
//middleware :servicios comunes para la aplicacion ayuda en la construccion

app.use(cors()); //acepta llamadas de url no conocidas
app.use(express.json()); //permite intercambiar en formato JSON
app.use(express.urlencoded({ extended: true }));

//instanciamos las rutas por controlador
const aprendiz = require("./routes/aprendiz");
const usuarioRuta = require("./routes/usuario");

//usar las rutas de acuerdo al controlador

app.use("/api", aprendiz);
app.use("/api", usuarioRuta);

//activamos el servidor del backEnd
app.listen(puerto, () => {
  console.log("corriendo en el puerto ", puerto);
});
