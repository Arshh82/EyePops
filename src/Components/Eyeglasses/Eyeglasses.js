import React from 'react';
import './Eyeglasses.css'
import { Link } from 'react-router-dom';

import { TbMathGreater } from "react-icons/tb";
import { HiPlus,HiMinusSm } from "react-icons/hi";




import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {STATUSES,fetchProducts} from '../ReduxComponent/Reducers/productSlice'


const Eyeglasses = () => {
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

    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
  
    const [term, setTerm] = useState('');
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(term);
    }
  
    if (status === STATUSES.LOADING) {
      return <h2>Loading....</h2>;
    }
  
    if (status === STATUSES.ERROR) {
      return <h2>Something went wrong!</h2>;
    }

   

    let Helpimg = new URL ("/public/Images/help.png",import.meta.url)

    // let ItemPoster1 = new URL ("/public/Images/EyeGlassItemPAge/poster1Eyeglass.avif",import.meta.url) 


  return (
      <>
          <div className='containr-1'>
              <div className='text-container-1'>
                  <div>
                      <span className='containr-1-link'><Link to='/' style={{ textDecoration: 'none' }}><span> Home </span> </Link> <TbMathGreater /> <span> Eyeglasses </span> </span>
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
                                              {/* <StarBorder /> */}
                                          </ListItemIcon>
                                          {/* <ListItemText primary="Starred" />
                                              <ListItemText primary="Starred" /> */}
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
                                              {/* <StarBorder /> */}
                                          </ListItemIcon>
                                          {/* <ListItemText primary="Starred" />
                                              <ListItemText primary="Starred" /> */}
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
                              <ListItemButton onClick={handleClick3}>

                                  <ListItemText primary="Size" />
                                  {open3 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open3} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                              {/* <StarBorder /> */}
                                          </ListItemIcon>
                                          {/* <ListItemText primary="Starred" />
                                              <ListItemText primary="Starred" /> */}
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
                              <ListItemButton onClick={handleClick4}>

                                  <ListItemText primary="Shape" />
                                  {open4 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open4} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                              {/* <StarBorder /> */}
                                          </ListItemIcon>
                                          {/* <ListItemText primary="Starred" />
                                              <ListItemText primary="Starred" /> */}
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
                              <ListItemButton onClick={handleClick5}>

                                  <ListItemText primary="Color" />
                                  {open5 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open5} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                              {/* <StarBorder /> */}
                                          </ListItemIcon>
                                          {/* <ListItemText primary="Starred" />
                                              <ListItemText primary="Starred" /> */}
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
                              <ListItemButton onClick={handleClick6}>

                                  <ListItemText primary="Price" />
                                  {open6 ? <HiMinusSm /> : <HiPlus />}
                              </ListItemButton>
                              <Collapse in={open6} timeout="auto" unmountOnExit>
                                  <List component="div" disablePadding>
                                      <ListItemButton >
                                          <ListItemIcon>
                                              {/* <StarBorder /> */}
                                          </ListItemIcon>
                                          {/* <ListItemText primary="Starred" />
                                              <ListItemText primary="Starred" /> */}
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

                </div>

                <div className='itemPoster'>

                </div>
                
                <div className='akdv'>
                {products.map((v) => {
                    console.log(v.image)
            return (
                <div className='EyeItemsCard' key={v.id}>
                    <div>
                        <img src={v.image} className="w-100" alt="X" />
                    </div>
                    <div>
                        <h5 className="mt-2">{v.name}</h5>
                        <h6 className="mb-2">Size {v.size}</h6>
                        <h6 className='mb-2'>Rs.{v.amount} <span className='text-muted'>(+GST)</span></h6>
                    </div>



                </div>
                
                )})}
                </div>

              </div>

          </div>
          <div className='t2'></div>

      </>
  );
}

export default Eyeglasses;
