const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Bonjour du backend de Arcadia Zoo!');
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});