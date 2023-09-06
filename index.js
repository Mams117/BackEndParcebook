//librerias necesarias para la aplicacion
const express = require("express"); //para programar los verbos HTTP
const cors = require("cors");

const app = express();
const puerto = 3900;
//middleware :servicios comunes para la aplicacion ayuda en la construccion

app.use(cors()); //acepta llamadas de url no conocidas
app.use(express.json()); //permite intercambiar en formato JSON

//rutas

/* app.get("/", (req, res) => {
  //console.log("ruta base");
  return res.status(200).send(`<h1> bienvenido al backend de parcebook</h1>
  <ul>
  <li>javaScript</li>
  <li>Php</li>
  <li>Phyton</li>
  </ul>
  `);
});

app.get("/clientes", (req, res) => {
  return res.status(200).send({
    id: 230,
    nombre: "mario",
    estado: true,
    edad: 20,
  });
}); */

//instanciamos las rutas por controlador
const aprendiz = require("./routes/aprendiz");

//usar las rutas de acuerdo al controlador

app.use("/api", aprendiz);

//activamos el servidor del backEnd
app.listen(puerto, () => {
  console.log("corriendo en el puerto ", puerto);
});
