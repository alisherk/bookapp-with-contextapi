import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = props => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
      e.preventDefault(); 
      dispatch({ type: 'ADD_BOOK', book: {
        title, 
        author 
      }}); 
      setTitle(''); 
      setAuthor(''); 
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={e => setTitle(e.target.value)}
        required
        type='text'
        placeholder='book title'
        value={title}
      />
       <input
        onChange={e => setAuthor(e.target.value)}
        required
        type='text'
        placeholder='author'
        value={author}
      />
      <input type='submit' value='Add book' />
    </form>
  );
};
export default BookForm;
