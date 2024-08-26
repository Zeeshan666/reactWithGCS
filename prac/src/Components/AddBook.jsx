import React from "react";
import { useState } from "react";
import { useBookContext } from "../Contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: { title, author }});
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author Name" value={author}
        onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="Add Book" />
    </form>
  );
}
 
export default NewBookForm;