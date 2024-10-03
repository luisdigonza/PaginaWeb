const formularioLogin = (req, res) => {
  res.json('auth/login', { msg: 'login' });
};

const formularioRegistro = (req, res) => {
  res.json('auth/registro', { msg: 'registro' });
};

export { formularioLogin, formularioRegistro };
