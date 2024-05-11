import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Arenda from './pages/Arenda'
import Plane from './pages/Plane'
import Taxi from './pages/Taxi'
import Variant from './pages/Variant'
import Product from './pages/Product.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Adminlogin from './pages/Adminlogin.jsx'
import Admin from './pages/Admin.jsx'
import Adminadd from './pages/Adminadd.jsx'
import Favourite from './pages/Favourite.jsx'
import Cart from './pages/Cart.jsx'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/rent" element={<Arenda/>}/>
    <Route path="/aviaticket" element={<Plane/>}/>
    <Route path="/taxi" element={<Taxi/>}/>
    <Route path="/variant" element={<Variant/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/adminlogin" element={<Adminlogin/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/adminadd" element={<Adminadd/>}/>
    <Route path="/favourite" element={<Favourite/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App