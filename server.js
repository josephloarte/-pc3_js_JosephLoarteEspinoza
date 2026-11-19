const express = require('express');
const app = express();

app.get('/api/universidades', async (req, res) => {
  try {
    const q = (req.query.q || '').toLowerCase();
    const response = await fetch('http://universities.hipolabs.com/search?country=Peru');
    const data = await response.json();
    const filtrados = data.filter(u => u.name.toLowerCase().includes(q));
    res.json(filtrados);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar la API' });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});