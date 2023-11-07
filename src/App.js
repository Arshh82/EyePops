import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Components/HomePage/Home';
import Cart from './Components/Cart/Cart'
import NavbarLG from './Components/NavbarLG/NavbarLG';
import Favorite from './Components/Favorite/Favorite';
import Signin from './Components/Sign in page/Signin';
import Footer from './Components/Footer/Footer';
import Eyeglasses from './Components/Eyeglasses/Eyeglasses';

import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


const App = () => {
  const [progress, setProgress] = useState(0)
  return (
    <>
    <LoadingBar
        color='linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'
        progress={progress}
        height={4}
      />
      <NavbarLG setProgress={setProgress} progress={progress} />
        <Routes>
          <Route path='/'  element={<Home setProgress={setProgress} progress={progress}  />}></Route>
          <Route path='/cart' element={<Cart setProgress={setProgress} progress={progress}/>}></Route>
          <Route path='/favorite' element={<Favorite />}></Route>
          <Route path='/signin' element={<Signin  setProgress={setProgress} progress={progress}/>}></Route>
          <Route path='/eyeglasses' element={<Eyeglasses  setProgress={setProgress} progress={progress}/>}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App ;
