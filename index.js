const express = require('express');

// Crear la app
const app = express();

// Routing
app.get('/', function (req, res) {
  res.json({ msg: 'Hola mundo en express' });
});

app.get('/nosotros', function (req, res) {
  res.send('Hola mundo en express 2');
});

// Definir puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${3000}`);
});
