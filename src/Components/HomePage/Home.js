import React from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect/';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



import { BsArrowCounterclockwise } from "react-icons/bs";
import { BiSupport,BiCheckShield } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";




let Himga = new URL ("/public/Images/Homepage/cover image.PNG",import.meta.url)


const Home = () => {
 
  return (
    <>
    
      <div className='home-container'>
        <div className='home-offer-text'>
        <div>
          <h2 style={{fontWeight:'700',fontSize:'3.5rem'}}>BUY ONE <br /> GET ONE 50% OFF</h2>
          <h4 style={{fontSize:'1.5rem'}} >Chase the sun with two new looks and <br/> save before summer ends!</h4>
            <h3>CODE: <span style={{ fontWeight: '700', color: '#33495D' }}><Typewriter
              options={{
                strings: ['SUNSETSAVE50'],
                autoStart: true,
                loop: true,
              }}
            /></span> </h3><br/>
          <button className='btn btn-dark'>Shop now</button>
          </div>
        </div>

        <div className='home-poster'>
          <img src={Himga} className='H-imga' />
        </div>

       


      </div>

      <div className='delivery-line'>
        <div>
          <BsArrowCounterclockwise className='delv-icon' /><span style={{ fontSize: 'large' }}> 14-Day Free Returns</span>
        </div>
        <div className='v-line'></div>

        <div>
          <BiSupport className='delv-icon' /><span style={{ fontSize: 'large' }}> 24/7 Customer Service</span>
        </div>
        <div className='v-line'></div>

        <div>
          <BiCheckShield className='delv-icon' /><span style={{ fontSize: 'large' }}> Vision Insurence</span>
        </div>
        <div className='v-line'></div>

        <div>
          <TbTruckDelivery className='delv-icon' /><span style={{ fontSize: 'large' }}>Delivery All Over India</span>
        </div>
        <div className='v-line'></div>
      </div>

      <div className='section-c'>
        <div className='c-ch-a'>
            <h1 style={{fontSize:'xxx-large',fontWeight:'700',color:' rgb(153, 93, 90)'}}>Every Vision of You</h1>
            <h4 style={{fontWeight:'700'}} className='mt-3'>It`s always a good day to buy glasses online.</h4><br/>
            <h6 style={{fontSize:'large'}}>Express your every vision with affordable eyeglasses and prescription sunglasses.</h6>
            <h6 style={{fontSize:'large'}}>Shop thousands of glasses with Virtual Try-on Frames starting at just Rs.1000!</h6><br />
            <button className='mt-3 btn-cha'>Shop Eyeglasses</button>
            <button className='mt-3 btn-cha'>Shop Sunglasses</button>
        </div>

        <div className='c-ch-b'>
          <div className='ch-b-heading'>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Best Selling Glasses</h1>
          </div>

          <div className='ch-b-Pcard'>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            <div className='ch-b-Glas-card'>
              <div className='ch-b-imgcard'>

              </div>
              <div className='mt-3'><span style={{ fontSize: 'larger', fontWeight: '500' }}>St Michel Rs.1500</span></div>

            </div>
           
          </div>
          <div className='ch-b-btn'>
          <button className='btn-cha'>Shop best Sellers</button>

          </div>

        </div>

      </div>
      
     
    </>
  );
}

export default Home;
