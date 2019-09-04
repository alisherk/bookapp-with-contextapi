import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
