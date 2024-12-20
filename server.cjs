const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'dist')));

// Rota para teste
app.get('/health', (req, res) => {
  res.send('Server is up and running');
});

app.listen(PORT, () => {
  console.log(`Server hosted at http://localhost:${PORT}`);
});
