import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; 
import BookDetails from './components/BookDetails';
import BookSearch from './components/BookSearch';
import BookCard from './components/BookCard'; 
import './App.css'; 
function App() {
    return (
        <>
            <header> 
                <Link to='/' className="StoreLink">Search</Link>
                <Link to='/details' className="StoreLink">BookDetails</Link>
            </header>
            <div className="app">
                <h1>Book Search App</h1>
                <Routes>
                    <Route path="/" element={<BookSearch />} />
                    <Route path="/details" element={<BookDetails />} />
                </Routes>
                <BookCard 
                    // title="Sample Book Title"
                    // author="John Doe"
                    // image="https://example.com/book.jpg"
                    // details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </div>
        </>
    );
}

export default App;