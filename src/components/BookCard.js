import React from 'react';

const BookCard = ({ title, author, image, details }) => {
    return (
        <div className="book-card">
            <img src={image} alt={title} />
            <div className="details">
                <h2>{title}</h2>
                <p>Author: {author}</p>
                <p>{details}</p>
            </div>
        </div>
    );
}

export default BookCard;