import React from 'react';
import './Eyeglasses.css'
import { Link, useNavigate } from 'react-router-dom';

import { TbMathGreater } from "react-icons/tb";
import { HiPlus,HiMinusSm } from "react-icons/hi";
import { TbCurrencyRupee } from "react-icons/tb";
import { FaCircle,FaHeart } from "react-icons/fa";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import {LuSettings2} from "react-icons/lu";
import {BiHeart} from "react-icons/bi";



import Offcanvas from 'react-bootstrap/Offcanvas';



import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {STATUSES,fetchProducts} from '../ReduxComponent/Reducers/productSlice'
import ProductAnimation from '../LoadingAnimations/ProductAnimation';

import { addToCart } from '../ReduxComponent/Reducers/cartSlice';


const Eyeglasses = ({progress,setProgress}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
    const [open4, setOpen4] = React.useState(false);
    const handleClick4 = () => {
        setOpen4(!open4);
    };
    const [open5, setOpen5] = React.useState(false);
    const handleClick5 = () => {
        setOpen5(!open5);
    };
    const [open6, setOpen6] = React.useState(false);
    const handleClick6 = () => {
        setOpen6(!open6);
    };
    const [open7, setOpen7] = React.useState(false);
    const handleClick7 = () => {
        setOpen7(!open7);
    };
    const [open8, setOpen8] = React.useState(false);
    const handleClick8 = () => {
        setOpen8(!open8);
    };
    const [open9, setOpen9] = React.useState(false);
    const handleClick9 = () => {
        setOpen9(!open9);
    };
    const [open10, setOpen10] = React.useState(false);
    const handleClick10 = () => {
        setOpen10(!open10);
    };
    const [open11, setOpen11] = React.useState(false);
    const handleClick11 = () => {
        setOpen11(!open11);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
    
    const [oopen, setOOpen] = React.useState(false);
    const handleSuccess = () => {
        setOOpen(true);
      };

      const handleCloose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOOpen(false);
      };  
    


    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
  
    let navigate = useNavigate();
     
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
  
    const [term, setTerm] = useState('');
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(term);
    }

      const addToCartHandler = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProduct));
    
  };
  
    // if (status === STATUSES.LOADING) {
    //   return <h2>Loading....</h2>;
    // }
  
    // if (status === STATUSES.ERROR) {
    //   return <h2>Something went wrong!</h2>;
    // }

   

    let Helpimg = new URL ("/public/Images/help.png",import.meta.url)

    // let ItemPoster1 = new URL ("/public/Images/EyeGlassItemPAge/poster1Eyeglass.avif",import.meta.url) 

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

  return (
      <>
       
          <div className='containr-1'>
          <div className='jh'>
                  <Stack spacing={2} sx={{ width: '30%' }}>
                      <Snackbar open={oopen} autoHideDuration={3000} onClose={handleCloose} >
                          <Alert onClose={handleCloose} severity="success" sx={{ width: '100%' }}>
                              Added To Cart Sucessfully
                          </Alert>
                      </Snackbar>
                  </Stack>
          </div>
              <div className='text-container-1'>
                  <div>
                      <span className='containr-1-link'><Link to='/' style={{ textDecoration: 'none' }}><span onClick={()=> { setProgress(progress+100)}}> Home </span> </Link> <TbMathGreater /> <span> Eyeglasses </span> </span>
                  </div>
                  <div>
                      <span className='containr-1-head'>Buy Prescription Eyeglasses</span>
                  </div>
              </div>
          </div>

          <div className='product-containr'>
              <div className='filter-containr sticky-top'>
              <div>
                <span className='text-fil'>Filters</span>
              </div>
              <div>

              </div>
                  <div className='mt-5'>
                      <div>
                          <List sx={{ width: '100%' }}
                              aria-labelledby="nested-list-subheader">
                              <ListItemButton onClick={handleClick1}>

                                  <ListItemText primary="Gender" />
                                  {open1 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open1} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Men" />
                                              <FormControlLabel control={<Checkbox />} label="Women" />
                                              <FormControlLabel control={<Checkbox />} label="Unisex" />
                                              <FormControlLabel control={<Checkbox />} label="Kids" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick2}>

                                  <ListItemText primary="Brand" />
                                  {open2 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open2} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Ray-Ban" />
                                              <FormControlLabel control={<Checkbox />} label="Oakley" />
                                              <FormControlLabel control={<Checkbox />} label="ARNETTE" />
                                              <FormControlLabel control={<Checkbox />} label="RFLKT" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick3}>

                                  <ListItemText primary="Size" />
                                  {open3 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open3} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Large" />
                                              <FormControlLabel control={<Checkbox />} label="Medium" />
                                              <FormControlLabel control={<Checkbox />} label="Small" />
                                              <FormControlLabel control={<Checkbox />} label="Extra Small" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick4}>

                                  <ListItemText primary="Shape" />
                                  {open4 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open4} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Rectangle" />
                                              <FormControlLabel control={<Checkbox />} label="Oval" />
                                              <FormControlLabel control={<Checkbox />} label="AViator" />
                                              <FormControlLabel control={<Checkbox />} label="Heart" />
                                              <FormControlLabel control={<Checkbox />} label="Square" />
                                              <FormControlLabel control={<Checkbox />} label="Round" />
                                              <FormControlLabel control={<Checkbox />} label="Horn" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick5}>

                                  <ListItemText primary="Color" />
                                  {open5 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open5} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'7f1a1a',margin:'2px'}} /> />
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'Blue',margin:'2px'}} /> />
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'Black',margin:'2px'}} /> />
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'White',margin:'2px',borderStyle:'groove',borderColor:'black',borderWidth:'1px',borderRadius:'10px'}} /> />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick6}>

                                  <ListItemText primary="Price" />
                                  {open6 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open6} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Men" />
                                              <FormControlLabel control={<Checkbox />} label="Women" />
                                              <FormControlLabel control={<Checkbox />} label="Unisex" />
                                              <FormControlLabel control={<Checkbox />} label="Kids" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              {/* ------------------------------------------------------------------- */}
                          </List>
                      </div>
                      <div className='filtr-help'>
                      <img src={Helpimg} alt='X' className='d-flex w-100' />
                      </div>
                    </div>
               </div>
{/* -------------------------------------- */}
              <div className='items-containr'>
                  <div className='itemShortOption'>
                      <div className='Item-filter-tgle'>
                          <button style={{borderStyle:'none',backgroundColor:'white'}} onClick={handleShow}><h5 style={{color:'grey'}} >Filter <LuSettings2 /></h5></button>
                      </div>
                      <div >
                          <Offcanvas show={show} onHide={handleClose} className="sm">
                              <Offcanvas.Header closeButton>
                                  <Offcanvas.Title>Filter</Offcanvas.Title>
                              </Offcanvas.Header>
                              <Offcanvas.Body>
                              <div>
                          <List sx={{ width: '100%' }}
                              aria-labelledby="nested-list-subheader">
                              <ListItemButton onClick={handleClick1}>

                                  <ListItemText primary="Gender" />
                                  {open1 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open1} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Men" />
                                              <FormControlLabel control={<Checkbox />} label="Women" />
                                              <FormControlLabel control={<Checkbox />} label="Unisex" />
                                              <FormControlLabel control={<Checkbox />} label="Kids" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick2}>

                                  <ListItemText primary="Brand" />
                                  {open2 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open2} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Ray-Ban" />
                                              <FormControlLabel control={<Checkbox />} label="Oakley" />
                                              <FormControlLabel control={<Checkbox />} label="ARNETTE" />
                                              <FormControlLabel control={<Checkbox />} label="RFLKT" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick3}>

                                  <ListItemText primary="Size" />
                                  {open3 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open3} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Large" />
                                              <FormControlLabel control={<Checkbox />} label="Medium" />
                                              <FormControlLabel control={<Checkbox />} label="Small" />
                                              <FormControlLabel control={<Checkbox />} label="Extra Small" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick4}>

                                  <ListItemText primary="Shape" />
                                  {open4 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open4} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Rectangle" />
                                              <FormControlLabel control={<Checkbox />} label="Oval" />
                                              <FormControlLabel control={<Checkbox />} label="AViator" />
                                              <FormControlLabel control={<Checkbox />} label="Heart" />
                                              <FormControlLabel control={<Checkbox />} label="Square" />
                                              <FormControlLabel control={<Checkbox />} label="Round" />
                                              <FormControlLabel control={<Checkbox />} label="Horn" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick5}>

                                  <ListItemText primary="Color" />
                                  {open5 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open5} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'7f1a1a',margin:'2px'}} /> />
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'Blue',margin:'2px'}} /> />
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'Black',margin:'2px'}} /> />
                                              <FormControlLabel control={<Checkbox />} label=<FaCircle style={{color:'White',margin:'2px',borderStyle:'groove',borderColor:'black',borderWidth:'1px',borderRadius:'10px'}} /> />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              <hr></hr>
                              {/* ------------------------------------------------------------------- */}
                              <ListItemButton onClick={handleClick6}>

                                  <ListItemText primary="Price" />
                                  {open6 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open6} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                          </ListItemIcon>
                                          <FormGroup>
                                              <FormControlLabel control={<Checkbox />} label="Men" />
                                              <FormControlLabel control={<Checkbox />} label="Women" />
                                              <FormControlLabel control={<Checkbox />} label="Unisex" />
                                              <FormControlLabel control={<Checkbox />} label="Kids" />
                                          </FormGroup>
                                      </ListItemButton>
                                  </List>
                              </Collapse>
                              {/* ------------------------------------------------------------------- */}
                          </List>
                      </div>
                              </Offcanvas.Body>
                          </Offcanvas>
                      </div>
                      <div >
                          <FormControl sx={{ m: 1, minWidth: 140 }} size="small" className='itemShortdivv'>
                              <InputLabel id="demo-select-large-label" style={{ fontWeight: '600' }}>Sort</InputLabel>
                              <Select
                                  labelId="demo-select-small-label"
                                  id="demo-select-small"
                                  value={age}
                                  label="Age"
                                  onChange={handleChange}
                              >
                                  <MenuItem value={10}>Price: High to Low</MenuItem>
                                  <MenuItem value={20}>Price: Low to High</MenuItem>
                                  <MenuItem value={30}>Name A to Z</MenuItem>
                              </Select>
                          </FormControl>
                      </div>
                      
                  </div>

                <div className='itemPoster'>
                </div>
                
                <div className='akdv'>
                      {status === STATUSES.LOADING ?<ProductAnimation/>:products.map((v) => {
                        
                          return (
                              <div className='EyeItemsCard' key={v.id}>
                                  <div className='EyeItemsCardImage'>
                                  <div ><button className='favbtn' ><FaHeart/></button></div>
                                      <img src={v.image2} className="img2 w-100" alt="X" />
                                      <img src={v.image} className="img1 w-100" alt="X" />
                                  </div>
                                  <div className='ItemDtail'>
                                      <h5 className="mb-1 " style={{fontSize:'1.2rem'}}>{v.name}<br/><TbCurrencyRupee style={{margin:'-5 -2 -2 -2'}} />{v.price} <span className='text-muted' style={{fontSize:'medium'}}>(+GST)</span></h5>
                                      <h6 className="mb-0">Size {v.size}</h6>
                                      <span>Color</span><span>{v.color[0]==='red'?<FaCircle style={{color:'7f1a1a',margin:'2px'}} />:''}</span><span>{v.color[1]==='blue'?<FaCircle style={{color:'blue',margin:'2px'}} />:''}</span><span>{v.color[2]==='black'?<FaCircle style={{color:'black',margin:'2px'}} />:''}</span><span>{v.color[3]==='white'?<FaCircle style={{color:'white',margin:'2px',borderStyle:'groove',borderColor:'black',borderWidth:'1px',borderRadius:'10px'}} />:''}</span>
                                      <div ><button className='buybtn'onClick={() => {addToCartHandler(v); handleSuccess()}} >Add to Cart</button></div>
                                  </div>
                              </div>
                                 )})}
                </div>
              </div>
          </div>

          <div className='containr-2 mt-5'>
              <div className='containr-2-text mt-5'>
                  <h1 >Worry-Free Shopping</h1>
                  <span>To make sure you're completely happy with your purchase, we offer a 14-Day Fit and Style Guarantee, and a 12-Month Guarantee overall, with every online prescription glasses order. If you have any questions about entering your eyeglass prescription information, get in touch with our expert customer service team any time. We’re always happy to help!</span>
              </div>
          </div>

          <div className='containr-3 mt-5'>
              <div className='containr-3-text mt-5'>
                  <h1 className='mb-4'>FAQ</h1>
                  <list sx={{ width: '100%' }}
                      aria-labelledby="nested-list-subheader">
                      <ListItemButton onClick={handleClick7}>
                          <h5 style={{marginRight:'1rem',fontWeight:'500'}}>What are optical glasses ? </h5>
                          {open7 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </ListItemButton>
                      <Collapse in={open7} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                              <ListItemButton >
                                  <span>
                                  Optical glasses, or prescription glasses, are specifically designed to help people who have vision trouble see better. These frames manipulate light to focus on the retina in the eye, which allows for clearer vision with the appropriate prescriptions. Optical glasses also help in the correction of other vision problems like myopia, hyperopia, and astigmatism.
                                  </span>
                              </ListItemButton>
                          </List>
                      </Collapse>
                  </list>
                  <hr></hr>

                  <list sx={{ width: '100%' }}
                      aria-labelledby="nested-list-subheader">
                      <ListItemButton onClick={handleClick8}>
                          <h5 style={{marginRight:'1rem',fontWeight:'500'}}>How much are eyeglasses ? </h5>
                          {open8 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </ListItemButton>
                      <Collapse in={open8} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                              <ListItemButton >
                                  <span>
                                  Prices vary greatly based on the kind of frame, lenses, and retailer. Luckily at Eyepops, we offer affordable options for every budget, with frames starting at just Rs.1000!
                                   </span>
                              </ListItemButton>
                          </List>
                      </Collapse>
                  </list>
                  <hr></hr>

                  <list sx={{ width: '100%' }}
                      aria-labelledby="nested-list-subheader">
                      <ListItemButton onClick={handleClick9}>
                          <h5 style={{marginRight:'1rem',fontWeight:'500'}}>Where to get eyeglasses </h5>
                          {open9 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </ListItemButton>
                      <Collapse in={open9} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                              <ListItemButton >
                                  <span>
                                  eyepops can save you hundreds of rupees when purchasing prescription glasses online. We offer a variety of styles, as well as multiple lens options, at an affordable price — without compromising the quality of your glasses! On top of that, we provide a 365-Day Guarantee and 14-Day Free Returns policy.
                                  </span>
                              </ListItemButton>
                          </List>
                      </Collapse>
                  </list>
                  <hr></hr>

                  <list sx={{ width: '100%' }}
                      aria-labelledby="nested-list-subheader">
                      <ListItemButton onClick={handleClick10}>
                          <h5 style={{marginRight:'1rem',fontWeight:'500'}}>How much do eyeglasses cost ? </h5>
                          {open10 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </ListItemButton>
                      <Collapse in={open10} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                              <ListItemButton >
                                  <span>
                                  At Eyepops, we offer frames starting at Rs.600 per pair, while our most popular frames range from Rs.3200 to Rs.5500. If you’re looking to add prescription lenses, we offer options starting at Rs2000.
                                  </span>
                              </ListItemButton>
                          </List>
                      </Collapse>
                  </list>
                  <hr></hr>

                  <list sx={{ width: '100%' }}
                      aria-labelledby="nested-list-subheader">
                      <ListItemButton onClick={handleClick11}>
                          <h5 style={{marginRight:'1rem',fontWeight:'500'}}>How should eyeglasses fit ? </h5>
                          {open11 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </ListItemButton>
                      <Collapse in={open11} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                              <ListItemButton >
                                  <span>
                                  Take our fun Fit & Style Quiz to find out which styles will best suit you! We'll handpick an exclusive range of frames curated just for you, to help you find your perfect pair.
                                  </span>
                              </ListItemButton>
                          </List>
                      </Collapse>
                  </list>

              </div>

          </div>

      </>
  );
}

export default Eyeglasses;
