import Usuario from '../models/Usuario.js';

const formularioLogin = (req, res) => {
  res.json({ msg: 'login' });
};

const formularioRegistro = (req, res) => {
  res.json({ msg: 'registro' });
};

const formularioOlvidePassword = (req, res) => {
  res.json({ msg: 'Olvido password' });
};

// const registrar = (req, res) => {
//   const datos = req.body;
//   // Enviar los datos como respuesta en formato JSON
//   res.json({
//     message: 'Datos recibidos correctamente',
//     data: datos,
//   });
// };

const registrar = async (req, res) => {
  const datos = req.body;

  // Verificar si el cuerpo de la solicitud está vacío
  if (!datos || Object.keys(datos).length === 0) {
    return res.status(400).json({
      error: 'No se recibieron datos en la solicitud',
    });
  }

  try {
    // Crear el usuario en la base de datos
    const usuario = await Usuario.create(req.body);

    // Enviar la respuesta con el usuario creado
    res.json({
      message: 'Usuario registrado correctamente',
      data: usuario,
    });
  } catch (error) {
    // Manejar errores en la creación del usuario
    res.status(500).json({
      error: 'Ocurrió un error al registrar el usuario',
      details: error.message,
    });
  }
};

export {
  formularioLogin,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
};
