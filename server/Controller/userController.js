// controllers/userController.js
const mysqlConnection = require('../configDB');

const registrarUsuario = (req, res) => {
  const { identificacion, nombres, apellidos, email, direccion, password, telefono } = req.body;
  if (!identificacion || !nombres || !apellidos || !email || !direccion || !password || !telefono) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const query = 'INSERT INTO usuarios (identificacion, nombres, apellidos, email, direccion, password, telefono) VALUES (?, ?, ?, ?, ?)';
  mysqlConnection.query(query, [identificacion, nombres, apellidos, email, direccion, password, telefono], (err, result) => {
    if (err) {
      console.error('Error al registrar usuario en MySQL:', err);
      return res.status(500).json({ error: 'Error al registrar usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  });
};

const iniciarSesion = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Correo electrónico y contraseña son obligatorios' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  mysqlConnection.query(query, [email, password], (err, rows) => {
    if (err) {
      console.error('Error al buscar usuario en MySQL:', err);
      return res.status(500).json({ error: 'Error al buscar usuario' });
    }

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado o contraseña incorrecta' });
    }

    const user = rows[0];
    res.json({ message: 'Inicio de sesión exitoso', user });
  });
};

module.exports = { registrarUsuario, iniciarSesion };
