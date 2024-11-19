const { Pool } = require('pg');
// Importa a classe `Pool` do módulo `pg`, usada para criar um pool de conexões com o banco de dados PostgreSQL.

require('dotenv').config();
// Carrega as variáveis de ambiente do arquivo `.env` para o `process.env`.

const pool = new Pool({
    user: process.env.DB_USER,         // Nome do usuário PostgreSQL
    host: process.env.DB_HOST,         // Endereço do servidor
    database: process.env.DB_DATABASE, // Nome do banco de dados
    password: process.env.DB_PASSWORD, // Senha do usuário PostgreSQL
    port: process.env.DB_PORT,         // Porta padrão do PostgreSQL
});


module.exports = pool;
// Exporta o pool de conexões para ser reutilizado em outros módulos da aplicação.
