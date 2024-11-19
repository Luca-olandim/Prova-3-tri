const pool = require('../config/db.js'); 
// Importa a configuração do banco de dados PostgreSQL, representada pelo pool de conexões.

const getBooks = async (req, res) => {
    // Handler para obter todos os livros do banco de dados.
    const result = await pool.query('SELECT * FROM books'); 
    // Executa uma consulta SQL para selecionar todos os registros da tabela "books".
    res.json(result.rows); 
    // Retorna os dados obtidos como uma resposta JSON.
};

const addBook = async (req, res) => {
    // Handler para adicionar um novo livro ao banco de dados.
    const { title, author, genre, year } = req.body; 
    // Obtém os dados do livro do corpo da requisição (JSON enviado pelo cliente).
    await pool.query(
        'INSERT INTO books (title, author, genre, year) VALUES ($1, $2, $3, $4)', 
        [title, author, genre, year]
        // Executa a consulta SQL para inserir os dados na tabela "books".
        // Os parâmetros ($1, $2, ...) previnem injeções SQL.
    );
    res.status(201).send('Book added successfully'); 
    // Retorna um status HTTP 201 (Criado) e uma mensagem de sucesso.
};

const updateBook = async (req, res) => {
    // Handler para atualizar os dados de um livro específico.
    const { id } = req.params; 
    // Obtém o ID do livro a partir dos parâmetros da URL.
    const { title, author, genre, year } = req.body; 
    // Obtém os novos dados do corpo da requisição.
    try {
        await pool.query(
            'UPDATE books SET title = $1, author = $2, genre = $3, year = $4 WHERE id = $5',
            [title, author, genre, year, id]
            // Executa a consulta SQL para atualizar o registro correspondente ao ID fornecido.
        );
        res.send(`Book with ID ${id} updated successfully`); 
        // Retorna uma mensagem indicando sucesso na atualização.
    } catch (error) {
        res.status(500).send('Error updating book'); 
        // Em caso de erro, retorna um status HTTP 500 (Erro Interno) e uma mensagem de erro.
    }
};

const deleteBook = async (req, res) => {
    // Handler para excluir um livro específico.
    const { id } = req.params; 
    // Obtém o ID do livro a partir dos parâmetros da URL.
    try {
        await pool.query('DELETE FROM books WHERE id = $1', [id]); 
        // Executa a consulta SQL para excluir o registro correspondente ao ID fornecido.
        res.send(`Book with ID ${id} deleted successfully`); 
        // Retorna uma mensagem indicando sucesso na exclusão.
    } catch (error) {
        res.status(500).send('Error deleting book'); 
        // Em caso de erro, retorna um status HTTP 500 (Erro Interno) e uma mensagem de erro.
    }
};

module.exports = { getBooks, addBook, updateBook, deleteBook }; 
// Exporta as funções para serem usadas em outras partes da aplicação, como no roteador de rotas.
