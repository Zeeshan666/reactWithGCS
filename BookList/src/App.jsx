
import BookList from './Components/BookList'
import Navbar from './Components/Navbar'
import ThemeToggle from './Components/ThemeToggle'
import { ThemeContextProvider } from './Contexts/ThemeContextProvider'
import { AuthContextProvider } from './Contexts/AuthContextProvider'


function App() {
  

  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
