const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rota principal para os endpoints de livros
app.use('/api/books', bookRoutes);

// Porta do servidor obtida do arquivo .env ou padrão 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
