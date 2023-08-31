import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Components/HomePage/Home';
import Cart from './Components/Cart/Cart'
import NavbarLG from './Components/NavbarLG/NavbarLG';
import Favorite from './Components/Favorite/Favorite';
import Signin from './Components/Sign in page/Signin';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <>
      <NavbarLG />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/favorite' element={<Favorite />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
