const formularioLogin = (req, res) => {
  res.json({ msg: 'login' });
};

const formularioRegistro = (req, res) => {
  res.json({ msg: 'registro' });
};

const formularioOlvidePassword = (req, res) => {
  res.json({ msg: 'Olvido password' });
};

const registrar = (req, res) => {
  res.json({ msg: 'Registrandoo..' });
};

export {
  formularioLogin,
  formularioRegistro,
  registrar,
  formularioOlvidePassword,
};
