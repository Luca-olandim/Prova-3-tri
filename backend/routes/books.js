const express = require('express'); 
// Importa o framework Express para criar e gerenciar rotas.

const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/booksController');
// Importa as funções do controlador que manipulam as operações de CRUD no banco de dados.

const router = express.Router(); 
// Cria uma nova instância do roteador do Express, usada para definir rotas específicas deste recurso.

router.get('/', getBooks); 
// Define a rota HTTP GET para listar todos os livros.
// Quando um cliente faz uma requisição GET para a raiz ('/'), a função `getBooks` será executada.

router.post('/', addBook); 
// Define a rota HTTP POST para adicionar um novo livro.
// A função `addBook` será executada ao receber dados do cliente para criar um novo registro.

router.put('/:id', updateBook); 
// Define a rota HTTP PUT para atualizar um livro existente com base no `id` passado como parâmetro.
// A função `updateBook` será executada para realizar essa operação.

router.delete('/:id', deleteBook); 
// Define a rota HTTP DELETE para excluir um livro com base no `id` fornecido como parâmetro.
// A função `deleteBook` será chamada para realizar a exclusão.

module.exports = router; 
// Exporta o roteador para que ele possa ser usado no `app.js` ou em outras partes da aplicação.
