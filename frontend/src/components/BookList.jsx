import React, { useState, useEffect } from 'react'; 
// Importa React e os hooks useState e useEffect.

import api from '../services/api'; 
// Importa a configuração da API para fazer requisições ao backend.

import '../App.css'; 
// Importa o arquivo CSS para estilizar o componente.

const BookList = () => {
    const [books, setBooks] = useState([]); 
    // Estado para armazenar a lista de livros.

    const [editingBook, setEditingBook] = useState(null); 
    // Armazena o ID do livro que está sendo editado.

    const [updatedBook, setUpdatedBook] = useState({ title: '', author: '', genre: '', year: '' }); 
    // Armazena os dados do livro em edição.

    // Carrega os livros do backend quando o componente é montado.
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await api.get('/books'); 
            // Faz uma requisição GET para obter os livros.
            setBooks(response.data); 
            // Atualiza o estado com os livros recebidos.
        };
        fetchBooks();
    }, []); 
    // O array vazio [] indica que este efeito será executado apenas uma vez.

    // Função para habilitar o modo de edição.
    const handleEdit = (book) => {
        setEditingBook(book.id); 
        // Define o ID do livro em edição.

        setUpdatedBook({ ...book }); 
        // Preenche o estado com os dados atuais do livro.
    };

    // Função para salvar as alterações no livro.
    const handleUpdate = async () => {
        await api.put(`/books/${editingBook}`, updatedBook); 
        // Faz uma requisição PUT para atualizar os dados do livro.

        alert('Livro atualizado!'); 
        // Exibe uma mensagem de sucesso.

        setEditingBook(null); 
        // Sai do modo de edição.

        window.location.reload(); 
        // Recarrega a página para atualizar a lista (pode ser substituído por métodos mais eficientes).
    };

    // Função para excluir um livro.
    const handleDelete = async (id) => {
        await api.delete(`/books/${id}`); 
        // Faz uma requisição DELETE para remover o livro.

        alert('Livro deletado!'); 
        // Exibe uma mensagem de sucesso.

        setBooks(books.filter((book) => book.id !== id)); 
        // Atualiza o estado removendo o livro da lista (sem recarregar a página).
    };

    return (
        <div className="book-list"> 
            {/* Contêiner principal da lista de livros */}
            <h2>Livros</h2>
            <ul>
                {/* Itera sobre a lista de livros para renderizar cada item */}
                {books.map((book) => (
                    <li key={book.id} className="book-item"> 
                        {/* Cada livro é renderizado como um item da lista */}
                        {editingBook === book.id ? ( 
                            // Se o ID do livro em edição corresponder, renderiza o modo de edição.
                            <>
                                <input
                                    value={updatedBook.title}
                                    onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
                                />
                                <input
                                    value={updatedBook.author}
                                    onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
                                />
                                <input
                                    value={updatedBook.genre}
                                    onChange={(e) => setUpdatedBook({ ...updatedBook, genre: e.target.value })}
                                />
                                <input
                                    value={updatedBook.year}
                                    onChange={(e) => setUpdatedBook({ ...updatedBook, year: e.target.value })}
                                />
                                <div>
                                    <button id="editbutton" onClick={handleUpdate}>Salvar</button> &nbsp;
                                    <button onClick={() => setEditingBook(null)}>Cancelar</button>
                                </div>
                            </>
                        ) : (
                            // Caso contrário, exibe o livro em modo de visualização.
                            <>
                                <p>{book.title} ({book.genre}) - de {book.author} - publicado em {book.year}</p>
                                <div>
                                    <button id="editbutton" onClick={() => handleEdit(book)}>Editar</button> &nbsp;
                                    <button onClick={() => handleDelete(book.id)}>Deletar</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList; 
// Exporta o componente para uso em outros arquivos.
