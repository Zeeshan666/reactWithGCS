
import './App.css'

import AddBook from './Components/AddBook'
import BookList from './Components/BookList'
import Header from './Components/Header'
import { BookContextProvider } from './Contexts/BookContext'


function App() {


  return (
    <>
      <BookContextProvider>
        <Header />
        <BookList />
        <AddBook />
      </BookContextProvider>
    </>
  )
}

export default App
