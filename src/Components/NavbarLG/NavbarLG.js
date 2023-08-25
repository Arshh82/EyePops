import React from 'react'
import './NavbarLG.css'


import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";




import { Link } from 'react-router-dom';


let Logo = new URL ("/public/Images/Navbar-Logo/Brand Lgo.PNG",import.meta.url)


const NavbarLG = () => {
  return (
    <>
          <div className='Navbar-LG-Container'>

              <div className='LG-Navbar-secA'>
              <Link to='/' className='llink' style={{ textDecoration: 'none' }}> <img src={Logo} alt='X' className='Brand-logo ' /></Link>
              </div>

               <div className='Eyeglass-sec'>
                 <span>Eyeglasses</span>
       
               </div>

               <div className='Sunglass-sec'>
                 <span>Sunglasses</span>
       
               </div>

               <div className='Computer-sec'>
                 <span>Computer glasses</span>
       
               </div>

              <div className='LG-Navbar-secB'>
                  <Link to='/favorite' className='llink' style={{ textDecoration: 'none' }}> <AiOutlineHeart className='Logo-togle' /></Link>
                  <Link to='/cart' className='llink' style={{ textDecoration: 'none' }}><BsCart2 className='Logo-togle' /></Link><div className='Cart-count'>10</div>
                  <Link to='/signin' style={{ textDecoration: 'none' }}><div className='login-butn'>Sign in <IoIosArrowDown style={{fontSize:'1.5rem'}} /></div></Link>
              </div>

          </div>
    </>
  )
}

export default NavbarLG
