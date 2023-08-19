import React from 'react'
import './NavbarLG.css'


import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';


let Logo = new URL ("/public/Images/Navbar-Logo/Brand Lgo.PNG",import.meta.url)


const NavbarLG = () => {
  return (
    <>
          <div className='Navbar-LG-Container'>

              <div className='LG-Navbar-secA'>
              <Link to='/' className='llink' style={{ textDecoration: 'none' }}> <img src={Logo} alt='X' className='Brand-logo ' /></Link>
              </div>

              <div className='LG-Navbar-secB'>
                  <Link to='/favorite' className='llink' style={{ textDecoration: 'none' }}> <MdFavorite className='Logo-togle' /></Link>
                  <Link to='/cart' className='llink' style={{ textDecoration: 'none' }}><HiShoppingCart className='Logo-togle' /></Link><div className='Cart-count'>10</div>
                  <button className='login-butn'>Login</button>
              </div>

          </div>
    </>
  )
}

export default NavbarLG
