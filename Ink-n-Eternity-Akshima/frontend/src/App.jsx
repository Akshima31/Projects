
import Header from './components/Header'
import Home from './pages/Home'
import Cart from "./pages/Cart"
import Footer from './components/Footer'
import Hero from './components/Hero'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Genre from './pages/Genre'
import Orders from './pages/Orders'

import { BrowserRouter , Routes ,Route } from 'react-router-dom'


function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path='/genre/:name' element={<Genre />} />
    <Route path="/orders" element={<Orders />} />
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
