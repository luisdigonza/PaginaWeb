import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';

// Crear la app
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Conexion a la base de datos
try {
  await db.authenticate();
  console.log('conexion correcta a la base de datos');
} catch (error) {
  console.log(error);
}

// Routing
app.use('/auth', usuarioRoutes);

// Definir puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${3000}`);
});
