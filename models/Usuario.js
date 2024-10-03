import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Usuario = db.define('usuarios', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Agregar el método para verificar la contraseña
Usuario.prototype.verificarPassword = function (password) {
  return this.password === password; // Compara directamente
};

export default Usuario;
