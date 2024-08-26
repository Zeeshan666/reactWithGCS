import React, { useContext } from 'react';
import { useBookContext } from '../Contexts/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useBookContext();
  return (
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <button onClick={() => dispatch({ type: 'REMOVE', id: book.id })}> Remove Book </button>
    </li>
  );
}

export default BookDetails;