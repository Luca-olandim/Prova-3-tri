import axios from 'axios'; 
// Importa o módulo Axios, utilizado para fazer requisições HTTP.

const api = axios.create({
    baseURL: 'http://localhost:3000/api', 
    // Configura a instância do Axios com uma base URL.
    // Todas as requisições feitas usando esta instância terão a URL base definida,
    // evitando a necessidade de repetir a URL para cada chamada.
});

export default api; 
// Exporta a instância do Axios configurada para ser usada em outros arquivos.
