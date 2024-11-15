import React from 'react';
import BookDetails from './components/BookDetails';
import BookSearch from './components/BookSearch';
import './styles/App.css';

const App = () => (
  <div>
    <header>
      <a href="/" className="StoreLink">Search</a>
      {/* <a href="/details" className="StoreLink">BookDetails</a> */}
    </header>
    <div className="app">
      <h1>Book Search App</h1>
      <BookSearch />
      {/* <BookDetails bookId="" /> */}
      {/* <BookCard
        // title="Sample Book Title"
        // author="John Doe"
        // image="https://example.com/book.jpg"
        // details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> */}
    </div>
  </div>
);

export default App;