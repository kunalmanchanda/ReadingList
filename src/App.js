import React from 'react'
import BookContextProvider from './contexts/BookContext'
// import BookContext from './contexts/BookContext'
import Navbar from './components/Navbar'
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import './App.css'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  )
}

export default App
