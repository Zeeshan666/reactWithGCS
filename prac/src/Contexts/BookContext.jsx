
import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { BookReducer } from '../Reducers/BookReducer';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => { 
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {children}
        </BookContext.Provider>
    );
}

export const useBookContext = () => useContext(BookContext);
