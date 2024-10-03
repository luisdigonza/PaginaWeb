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

const registrar = (req, res) => {
  const datos = req.body;

  // Verificar si el cuerpo de la solicitud está vacío
  if (!datos || Object.keys(datos).length === 0) {
    return res.status(400).json({
      error: 'No se recibieron datos en la solicitud',
    });
  }

  // Si los datos existen, enviarlos como respuesta
  res.json({
    message: 'Datos recibidos correctamente',
    data: datos,
  });
};

export {
  formularioLogin,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
};
