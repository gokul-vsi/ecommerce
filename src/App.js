import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Shoes } from './Shoes';
import { Slides } from './Slides';
import { Cart } from './Cart';
import { Contact } from './Contact';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route element={<Header/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shoes' element={<Shoes cart={cart} setCart={setCart}/>}></Route>
        <Route path='/slides' element={<Slides cart={cart} setCart={setCart}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
