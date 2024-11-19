const express = require('express'); 
// Importa o framework Express, usado para criar e configurar o servidor HTTP.

const cors = require('cors'); 
// Importa o middleware CORS para permitir o acesso da API por aplicações frontend hospedadas em origens diferentes.

const bodyParser = require('body-parser'); 
// Importa o middleware Body Parser, usado para processar o corpo das requisições em formato JSON.

const bookRoutes = require('./routes/books'); 
// Importa as rotas definidas no módulo `books` para gerenciar operações de CRUD no recurso "livros".

const app = express(); 
// Cria uma instância do aplicativo Express.

app.use(cors()); 
// Habilita o CORS, permitindo que o frontend se comunique com o backend, mesmo que estejam em servidores diferentes.

app.use(bodyParser.json()); 
// Configura o middleware para que o servidor consiga interpretar JSON enviado no corpo das requisições.

app.use('/api/books', bookRoutes); 
// Define que todas as rotas iniciadas com `/api/books` devem ser tratadas pelo roteador `bookRoutes`.

module.exports = app; 
// Exporta o aplicativo Express para ser usado em outro módulo.
