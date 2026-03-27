import { useState } from 'react'
import Header from './Header'
import "./App.css";
import Product from './Product';
import { Route, Routes } from "react-router-dom";
import CartList from './CartList'

function App() {

  return (
    <>
      
      <Header />
      {/* <Routes>
        <Route path='/' element={<Product />}/>
        <Route path='/cart' element={<CartList />}/>
      </Routes> */}

      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<CartList />} />
      </Routes>
      
    </>
  )
}

export default App
