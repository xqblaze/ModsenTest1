import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css'; 
const BookDetails = () => {
    const { id } = useParams();

    return (
        <div className="BookDetails">
            <h2>Book Details</h2>
            <p>Book ID: {id}</p>
        </div>
    );
}

export default BookDetails;