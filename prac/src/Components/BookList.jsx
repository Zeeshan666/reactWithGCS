import React  from 'react';
import BookEntry from './BookEntry';
import { useBookContext } from '../Contexts/BookContext';


const BookList = () => {
  const { books } = useBookContext();
  return books.length ? (
    <div>
      <ul>
        {books.map(book => {
          return ( <BookEntry book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div>No books yet.</div>
  );
}

export default BookList;