import React from 'react'
import './NavbarLG.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas/';


import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";



import { RiArrowDownSLine,RiArrowUpSLine} from "react-icons/ri";



import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { useAuth0 } from '@auth0/auth0-react';





let Logo = new URL ("/public/Images/Navbar-Logo/Brand Lgo.PNG",import.meta.url)

let eyemodel1 = new URL ("/public/Images/Hover-menu/Eyeglass/frem-1.avif",import.meta.url)
let eyemodel2 = new URL ("/public/Images/Hover-menu/Eyeglass/frem-2.avif",import.meta.url)
let eyemodel3 = new URL ("/public/Images/Hover-menu/Eyeglass/frem-3.avif",import.meta.url)

let sunmodel1 = new URL ("/public/Images/Hover-menu/Sunglass/2frem-1.avif",import.meta.url)
let sunmodel2 = new URL ("/public/Images/Hover-menu/Sunglass/2frem-2.avif",import.meta.url)
let sunmodel3 = new URL ("/public/Images/Hover-menu/Sunglass/2frem-3.avif",import.meta.url)

let brandmodel1 = new URL ("/public/Images/Hover-menu/Brand/brand-1.avif",import.meta.url)
let brandmodel2 = new URL ("/public/Images/Hover-menu/Brand/Brand-2.avif",import.meta.url)
let brandmodel3 = new URL ("/public/Images/Hover-menu/Brand/brand-3.avif",import.meta.url)
let brandmodel4 = new URL ("/public/Images/Hover-menu/Brand/Brand-4.avif",import.meta.url)
let brandmodel5 = new URL ("/public/Images/Hover-menu/Brand/Brand-5.avif",import.meta.url)



const NavbarLG = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleClick1 = () => {
      setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
      setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(false);
  const handleClick3 = () => {
      setOpen3(!open3);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {data} = useSelector(state => state.cart);

  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();


  return (
    <>
         <div className='home-top-offersec'><span>Designer Eyeglasses Sale | Code: DBSAVINGS <span style={{color:'#a52a2a'}}>Shop now</span></span></div>
          <div className='Navbar-LG-Container sticky-top'>

              <div className='menu-togle'>
              <RxHamburgerMenu style={{fontSize:'1.7rem'}} onClick={handleShow}/>

              </div>
              <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <Link to='/' onClick={(()=> setShow(false) )}><img src={Logo} alt='X' className='d-flex w-50 ' /></Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                    <div>
                          <List sx={{ width: '100%' }}
                              aria-labelledby="nested-list-subheader">
                              <ListItemButton onClick={handleClick1}>
                                  <ListItemText primary="Eyeglasses" />
                                  {open1 ? <RiArrowUpSLine /> : <RiArrowDownSLine/>}
                              </ListItemButton>
                              <Collapse in={open1} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup >
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Computer & Eye Glasses" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Women's EyeGlasses" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Men's EyeGlasses" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Kid's EyeGlasses" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="On sale" className='mb-2' /></Link>
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick2}>

                                  <ListItemText primary="Sunglasses" />
                                  {open2 ?  <RiArrowUpSLine /> : <RiArrowDownSLine/>}
                              </ListItemButton>
                              <Collapse in={open2} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                          <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Unisex Sunglasses" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Women's Sunglasses" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Men's Sunglasses" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Kid's Sunglasses" className='mb-2' /></Link>
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick3}>

                                  <ListItemText primary="Premium Brands" />
                                  {open3 ?  <RiArrowUpSLine /> : <RiArrowDownSLine/>}
                              </ListItemButton>
                              <Collapse in={open3} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Ray-Ban" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="Oakley" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />}  label="ARNETTE" className='mb-2' /></Link>
                                              <Link to='/eyeglasses' onClick={(()=> setShow(false) )} id='bblack'><FormControlLabel  control={<List />} label="RFLKT" className='mb-2' /></Link>
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                          </List>
                      </div>
          
        </Offcanvas.Body>
      </Offcanvas>

              <div className='LG-Navbar-secA'>
                <Link to='/' className='llink' style={{ textDecoration: 'none' }}> 
                 <img src={Logo} alt='X' className='Brand-logo ' />
                </Link>
              </div>
               <Link style={{ textDecoration: 'none' }}>
               <div className='Eyeglass-sec'>
                 <span style={{margin:'2rem 1.5rem 2rem 1.5rem',fontWeight:'500'}} className='P-brand'>Eyeglasses</span>
            <div className='eyeglass-hover-menu'>
              <div className='menu-style1'>
                <ul style={{ listStyle: 'none', color: 'black', fontWeight: '500' }}>
                  <li>
                    <div className='style1-top'>Shop</div>
                  </li>
                  <li>
                    <Link to='/eyeglasses' style={{ textDecoration: 'none' }}><div  style={{ color: '#D09839' }}>Computer & Eye Glasses</div></Link>
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
                    <div style={{ color: 'red' }}>On Sale</div>
                  </li>
                </ul>
              </div>

              <div className='menu-style1'>
                <ul style={{ listStyle: 'none', color: 'black', fontWeight: '500' }}>
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
                   <span className='frem1text'>Vintage Spirit</span>
              </div>
              <div className='eyeglass-hover-imgfrem1'>
                <img src={eyemodel3} alt='X' className='imgfrem1s d-flex w-100 h-100' />
                   <span className='frem1text'>Bio-Nylon</span>
              </div>

            </div>
       
               </div>
               </Link>  
               
               <Link>
               <div className='Sunglass-sec'>
                 <span style={{margin:'2rem 1.5rem 2rem 1.5rem',fontWeight:'500'}} className='P-brand'>Sunglasses</span>
                 <div className='eyeglass-hover-menu2'>
              <div className='menu-style1'>
                <ul style={{ listStyle: 'none', color: 'black', fontWeight: '500' }}>
                  <li>
                    <div className='style1-top'>Shop</div>
                  </li>
                  <li>
                    <div>Sunglasses</div>
                  </li>
                  <li>
                    <div>Women's Sunglasses</div>
                  </li>
                  <li>
                    <div>Men's Sunglasses</div>
                  </li>
                  <li>
                    <div>Kids' Sunglasses</div>
                  </li>
                  
                  
                </ul>
              </div>

              <div className='menu-style1'>
                <ul style={{ listStyle: 'none', color: 'black', fontWeight: '500' }}>
                  <li>
                    <div className='style1-top'>Featured</div>
                  </li>
                  <li>
                    <div>New Arrivals</div>
                  </li>
                  <li>
                    <div>Prescription Sunglasses</div>
                  </li>
                  <li>
                    <div>Polarized Sunglasses</div>
                  </li>
                  <li>
                    <div style={{color:'red'}}>On Sale</div>
                  </li>
                 
                </ul>
              </div>

             

              <div className='eyeglass-hover-imgfrem1'>
                <img src={sunmodel1} alt='X' className='imgfrem1s d-flex w-100 h-100' />
                <span className='frem1text'>Ray Ban Sunglasses</span>
              </div>
              <div className='eyeglass-hover-imgfrem1'>
                <img src={sunmodel2} alt='X' className='imgfrem1s d-flex w-100 h-100' />
                <span className='frem1text'>Oakley Sunglasses</span>
              </div>
              <div className='eyeglass-hover-imgfrem1'>
                <img src={sunmodel3} alt='X' className='imgfrem1s d-flex w-100 h-100' />
                <span className='frem1text'>Eco Friendly</span>
              </div>

            </div>
       
               </div>
          <div className='LoginSection'>
            <div>
              <form>
                <div class="input-group search-dev">
                  <div className='mt-3'>
                    <input type="email" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                  <div className='mt-2'>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's password" aria-describedby="basic-addon2" />
                  </div>
                  <div className='mt-3'>
                    <button type='submit' style={{ borderStyle: 'none', borderRadius: '5px', width: '12rem', height: '2.2rem', backgroundColor: 'blue', color: 'white', fontWeight: '500' }}>Sign in</button>
                  </div>
                </div>
              </form>
            </div>
            <div style={{position:'absolute', bottom:'0.5rem'}}>
              <span>Don`t have Account?<br/><b>Sign up Now</b> </span>
            </div>

          </div>
               </Link>

        <Link>
        <div className='Brand-sec'>
          <span style={{margin:'2rem 1.5rem 2rem 1.5rem',fontWeight:'500'}} className='P-brand'>Premium Brands</span>

          <div className='eyeglass-hover-menu2'>
            <div className='eyeglass-hover-imgfrem2'>
              <img src={brandmodel1} alt='X' className='imgfrem1s d-flex w-100 h-100' />
              <span className='frem1text' style={{ color: 'black', fontWeight: '700' }}>Ray Ban</span>
            </div>
            <div className='eyeglass-hover-imgfrem2'>
              <img src={brandmodel2} alt='X' className='imgfrem1s d-flex w-100 h-100' />
              <span className='frem1text' style={{ color: 'black', fontWeight: '700' }}>OAKLEY</span>
            </div>
            <div className='eyeglass-hover-imgfrem2'>
              <img src={brandmodel3} alt='X' className='imgfrem1s d-flex w-100 h-100' />
              <span className='frem1text' style={{ color: 'black', fontWeight: '700' }}>ARNETTE</span>
            </div>
            <div className='eyeglass-hover-imgfrem2'>
              <img src={brandmodel4} alt='X' className='imgfrem1s d-flex w-100 h-100' />
              <span className='frem1text' style={{ color: 'black', fontWeight: '700' }}>Vogue</span>
            </div>
            <div className='eyeglass-hover-imgfrem2'>
              <img src={brandmodel5} alt='X' className='imgfrem1s d-flex w-100 h-100' />
              <span className='frem1text' style={{ color: 'black', fontWeight: '700' }}>RFLKT</span>
            </div>
          </div>

        </div>
        </Link>

        <div className='search-sec'>
        <form>
          <div class="input-group search-dev">
            <input type="text" class="form-control" placeholder="Search for eyewear..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
           
          </div>
          </form>

        </div>

              <div className='LG-Navbar-secB'>
                   {isAuthenticated ?
                    <button className='login-butn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                     Sign out  <IoIosArrowDown style={{ fontSize: '1.5rem' }} />
                     </button>:
                     <button className='login-butn' onClick={() => loginWithRedirect()}>
                        Sign in <IoIosArrowDown style={{ fontSize: '1.5rem' }} />
                     </button>
                     
                    }
                  <Link to='' className='llink' style={{ textDecoration: 'none', marginRight:'1px' }}> <AiOutlineHeart className='Logo-togle' id='fav' /></Link>
                  <Link to='/cart' className='llink' style={{ textDecoration: 'none' }}><BsCart2 className='Logo-togle' /></Link><div className='Cart-count'>{data.length}</div>
                  
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
