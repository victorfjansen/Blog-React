import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import UserStorage from 'UserContext'

function App() {
  return (
    <UserStorage>
      <Header />
      <Home />
      <Footer />
    </UserStorage>
  )
}

export default App
