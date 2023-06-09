import { Routes, Route} from 'react-router-dom'
import './App.css'
import './Media.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import User from './components/Users'
import { Login } from './components/Login'
import Alluser from './components/Alluser'
import Cat from './components/Cat'

function App() {
  return (
    <>
    <Navbar />
        <Routes>
            <Route path="/" element={<Cat />} />
            <Route path="/user" element={<Alluser />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/:id" element={<User />} />
        </Routes>
    </>
  )
}

export default App