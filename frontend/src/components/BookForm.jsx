import React, { useState } from 'react'; 
// Importa React e o hook useState para gerenciar estados do componente.

import api from '../services/api'; 
// Importa a configuração da API para fazer requisições ao backend.

import '../App.css'; 
// Importa o arquivo CSS para aplicar os estilos no componente.

const BookForm = () => {
    // Estados para armazenar os valores dos campos do formulário.
    const [title, setTitle] = useState(''); 
    const [author, setAuthor] = useState(''); 
    const [genre, setGenre] = useState(''); 
    const [year, setYear] = useState('');

    // Função para lidar com o envio do formulário.
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        // Evita o comportamento padrão do formulário (recarregar a página).

        await api.post('/books', { title, author, genre, year }); 
        // Envia os dados do livro para o backend via método POST.

        alert('Livro adicionado!'); 
        // Mostra um alerta confirmando a adição do livro.

        // Reseta os campos do formulário após o envio.
        setTitle(''); 
        setAuthor(''); 
        setGenre(''); 
        setYear('');
    };

    return (
        <div className="form-container"> 
            {/* Contêiner do formulário com estilos aplicados da classe "form-container". */}
            <h2>Adicionar novo livro</h2>
            {/* Título do formulário */}

            <form onSubmit={handleSubmit}> 
                {/* Formulário com a função de envio vinculada */}

                {/* Campo para o título do livro */}
                <div className="form-group"> 
                    <label htmlFor="title">Título</label>
                    <input 
                        id="title" 
                        placeholder="Título" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>

                {/* Campo para o autor do livro */}
                <div className="form-group"> 
                    <label htmlFor="author">Autor</label>
                    <input 
                        id="author" 
                        placeholder="Nome do autor" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                </div>

                {/* Campo para o gênero do livro */}
                <div className="form-group"> 
                    <label htmlFor="genre">Gênero</label>
                    <input 
                        id="genre" 
                        placeholder="Gênero do livro" 
                        value={genre} 
                        onChange={(e) => setGenre(e.target.value)} 
                    />
                </div>

                {/* Campo para o ano de publicação */}
                <div className="form-group"> 
                    <label htmlFor="year">Ano</label>
                    <input 
                        id="year" 
                        placeholder="Ano de publicação" 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)} 
                    />
                </div>

                {/* Botão para enviar o formulário */}
                <button type="submit" className="button">Adicionar livro</button>
            </form>
        </div>
    );
};

export default BookForm; 
// Exporta o componente para ser utilizado em outros arquivos.
