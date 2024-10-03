import { check, validationResult } from 'express-validator';

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

const registrar = async (req, res) => {
  // Validaciones
  await check('nombre')
    .notEmpty()
    .withMessage('El nombre no puede ir vacío')
    .run(req);

  await check('email').isEmail().withMessage('Eso no parece un email').run(req);

  await check('password')
    .isLength({ min: 6 })
    .withMessage('El password debe ser al menos 6 caracteres')
    .run(req);

  await check('repetirPassword')
    .equals(req.body.password)
    .withMessage('Las passwords no son iguales')
    .run(req);

  let resultado = validationResult(req);

  // Verificar si hay errores de validación
  if (!resultado.isEmpty()) {
    return res.status(400).json({
      errores: resultado.array(),
    });
  }

  // Extraer datos
  const { nombre, email, password } = req.body;

  try {
    // Verificar que el usuario no esté registrado
    const existeUsuario = await Usuario.findOne({ where: { email } });

    if (existeUsuario) {
      return res.status(400).json({
        error: 'El usuario ya está registrado',
      });
    }

    // Almacenar un usuario
    const usuario = await Usuario.create({
      nombre,
      email,
      password,
    });

    // Responder con el usuario creado
    res.status(201).json({
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
