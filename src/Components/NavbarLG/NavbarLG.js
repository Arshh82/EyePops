import React from 'react'
import './NavbarLG.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas/';


import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";




import { Link } from 'react-router-dom';


let Logo = new URL ("/public/Images/Navbar-Logo/Brand Lgo.PNG",import.meta.url)

let eyemodel1 = new URL ("/public/Images/Hover-menu/Eyeglass/frem-1.avif",import.meta.url)
let eyemodel2 = new URL ("/public/Images/Hover-menu/Eyeglass/frem-2.avif",import.meta.url)
let eyemodel3 = new URL ("/public/Images/Hover-menu/Eyeglass/frem-3.avif",import.meta.url)


const NavbarLG = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
         <div className='home-top-offersec'><span>Designer Eyeglasses Sale | Code: DBSAVINGS <span style={{color:'#a52a2a'}}>Shop now</span></span></div>
          <div className='Navbar-LG-Container sticky-top'>

              <div className='menu-togle'>
              <RxHamburgerMenu style={{fontSize:'1.7rem'}} onClick={handleShow}/>

              </div>
              <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

              <div className='LG-Navbar-secA'>
                <Link to='/' className='llink' style={{ textDecoration: 'none' }}> 
                 <img src={Logo} alt='X' className='Brand-logo ' />
                </Link>
              </div>
               <Link style={{ textDecoration: 'none' }}>
               <div className='Eyeglass-sec'>
                 <span>Eyeglasses</span>
            <div className='eyeglass-hover-menu'>
              <div className='menu-style1'>
                <ul style={{ listStyle: 'none', color:'black', fontWeight:'500' }}>
                  <li>
                    <div className='style1-top'>Shop</div>
                  </li>
                  <li>
                    <div>Eyeglass</div>
                  </li>
                  <li>
                    <div>Women`s Eyeglass</div>
                  </li>
                  <li>
                    <div>Men`s Eyeglass</div>
                  </li>
                  <li>
                    <div>Kid`s Eyeglass</div>
                  </li>
                  <li>
                    <div style={{color:'red'}}>On Sale</div>
                  </li>
                </ul>
              </div>

              <div className='menu-style1'>
                <ul style={{ listStyle: 'none', color:'black', fontWeight:'500' }}>
                  <li>
                    <div className='style1-top'>Featured</div>
                  </li>
                  <li>
                    <div>New Arrivals</div>
                  </li>
                  <li>
                    <div>Ray-Ban Glasses</div>
                  </li>
                  <li>
                    <div>2-Day Delivery</div>
                  </li>
                  <li>
                    <div>Eyeglass Frames</div>
                  </li>
                  <li>
                    <div>Glasses under $19</div>
                  </li>
                </ul>
              </div>

              <div className='eyeglass-hover-imgfrem1'>
                <img src={eyemodel1} alt='X' className='imgfrem1s d-flex w-100 h-100' />
                <span className='frem1text'>EBD Clear Premium</span>
              </div>
              <div className='eyeglass-hover-imgfrem1'>
                <img src={eyemodel2} alt='X' className='imgfrem1s d-flex w-100 h-100' />
              </div>
              <div className='eyeglass-hover-imgfrem1'>
                <img src={eyemodel3} alt='X' className='imgfrem1s d-flex w-100 h-100' />
              </div>

            </div>
       
               </div>
               </Link>  

               <div className='Sunglass-sec'>
                 <span>Sunglasses</span>
       
               </div>

               <div className='Computer-sec'>
                 <span>Computer glasses</span>
       
               </div>

        <div className='search-sec'>
        <form>
          <div class="input-group search-dev">
            <input type="text" class="form-control" placeholder="Search for eyewear..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
           
          </div>
          </form>

        </div>

              <div className='LG-Navbar-secB'>
                  <Link to='/signin' style={{ textDecoration: 'none' }}><div className='login-butn'>Sign in <IoIosArrowDown style={{fontSize:'1.5rem'}} /></div></Link>
                  <Link to='/favorite' className='llink' style={{ textDecoration: 'none' }}> <AiOutlineHeart className='Logo-togle' id='fav' /></Link>
                  <Link to='/cart' className='llink' style={{ textDecoration: 'none' }}><BsCart2 className='Logo-togle' /></Link><div className='Cart-count'>10</div>
                  
              </div>

          </div>

          <div className='sm-search '>
          <form>
          <div class="input-group search-devb">
            <input type="text" class="form-control" placeholder="Search for eyewear..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
           
          </div>
          </form>
          

          </div>
          
    </>
  )
}

export default NavbarLG
