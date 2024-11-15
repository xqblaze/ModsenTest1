import React, { useState } from 'react';
import { fetchBooks } from '../api/api.js'; 
import '../styles/BookSearch.css';

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState({}); 
  const searchBooks = async () => {
    try {
      const data = await fetchBooks(searchQuery, 'all', 'relevance', 0);
      setSearchResults(data.items || []); 
    } catch (error) {
      console.error('Ошибка при поиске книг:', error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const toggleDescription = (index) => {
    setIsExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getImageUrl = (book) => {
  
    return book.volumeInfo.imageLinks?.large || 
           book.volumeInfo.imageLinks?.medium || 
           book.volumeInfo.imageLinks?.thumbnail;
  };

  return (
    <div className="BookSearch">
      <h2>Book Search</h2>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search for books..." 
      />
      <button onClick={searchBooks}>Search</button>

      {/* Количество найденных книг */}
      <div className="result-count">
        {searchResults.length > 0 && <p>{searchResults.length} books found</p>}
      </div>

      {/* Отображение результатов поиска */}
      <div className="book-results">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((book, index) => (
            <div key={index} className="book-card">
              <h3>{book.volumeInfo.title}</h3>
              <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
              <img src={getImageUrl(book)} alt={book.volumeInfo.title} />
              <p>
                {isExpanded[index] 
                  ? book.volumeInfo.description || 'No description available'
                  : truncateText(book.volumeInfo.description, 100)}
              </p>
              <button className="expand-button" onClick={() => toggleDescription(index)}>
                {isExpanded[index] ? 'Show less' : 'Read more'}
              </button>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
