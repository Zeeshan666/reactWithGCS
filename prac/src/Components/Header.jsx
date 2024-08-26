import React from 'react';
import { useBookContext } from '../Contexts/BookContext';

const Header = () => {
    const { books } = useBookContext();

    return (
        <div>
            <h1>My Book List</h1>
            <p>Currently {books.length} books to get through...</p>
        </div>
    );
}

export default Header;
