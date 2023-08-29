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

let Disimga = new URL ("/public/Images/Homepage/Display 1/1 copy.png",import.meta.url)
let Disimgb = new URL ("/public/Images/Homepage/Display 1/2 copy.png",import.meta.url)
let Disimgc = new URL ("/public/Images/Homepage/Display 1/3 copy.png",import.meta.url)
let Disimgd = new URL ("/public/Images/Homepage/Display 1/4 copy.png",import.meta.url)

let Dis2imge = new URL ("/public/Images/Homepage/Display 2/1.avif",import.meta.url)
let Dis2imgf = new URL ("/public/Images/Homepage/Display 2/2.avif",import.meta.url)
let Dis2imgg = new URL ("/public/Images/Homepage/Display 2/3.avif",import.meta.url)

let Dis3imgh = new URL ("/public/Images/Homepage/Display 3/a.avif",import.meta.url)
let Dis3imgi = new URL ("/public/Images/Homepage/Display 3/b.avif",import.meta.url)






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
          <img src={Himga} alt='x' className='H-imga' />
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
          <div className='CHcard-container'>

          <div className='ch-b-Glas-card'>
              <div className='ch-b-imgcard'>
              <img src={Disimga} alt='x' className='chcarda-img'/>

              </div>
              <div className='mt-3'><span style={{ fontSize: 'larger', fontWeight: '500' }}>St Michel <br/> Rs.1500</span></div>

            </div>

            <div className='ch-b-Glas-card'>
              <div className='ch-b-imgcard'>
              <img src={Disimgb} alt='x' className='chcarda-img'/>

              </div>
              <div className='mt-3'><span style={{ fontSize: 'larger', fontWeight: '500' }}>Vinyl  <br/> Rs.4500</span></div>

            </div>

            <div className='ch-b-Glas-card'>
              <div className='ch-b-imgcard'>
              <img src={Disimgc} alt='x' className='chcarda-img'/>

              </div>
              <div className='mt-3'><span style={{ fontSize: 'larger', fontWeight: '500' }}>Ember  <br/> Rs.2200</span></div>

            </div>

            <div className='ch-b-Glas-card'>
              <div className='ch-b-imgcard'>
              <img src={Disimgd} className='chcarda-img'/>

              </div>
              <div className='mt-3'><span style={{ fontSize: 'larger', fontWeight: '500' }}>Good Vibrations  <br/> Rs.5500</span></div>

            </div>

          </div>

          </div>
          <div className='ch-b-btn'>
          <button className='btn-cha'>Shop best Sellers</button>

          </div>

        </div>
        
        <div className='section-d'>
          <div className='section-d-card-container'>
            <div className='section-d-card'>
              <div className='section-d-cardimage'>
                <img src={Dis2imge} alt='x' className='section-d-cimage' />
              </div>
              <h2 className='mt-3' style={{ fontWeight: '700' }}>Trending Titanium</h2>
              <p>Lightweight eyewear that’s made to last.</p>
              <button className='mt-4 btn-cha'>Shop now</button>
            </div>

            <div className='section-d-card'>
              <div className='section-d-cardimage'>
                <img src={Dis2imgf} alt='x' className='section-d-cimage' />
              </div>
              <h2 className='mt-3' style={{ fontWeight: '700' }}>Glasses On Sale</h2>
              <p>Good looking out. Enjoy up to 50% off these eyewear picks!</p>
              <button className='mt-0 btn-cha'>Shop now</button>
            </div>

            <div className='section-d-card'>
              <div className='section-d-cardimage'>
                <img src={Dis2imgg} alt='x' className='section-d-cimage' />
              </div>
              <h2 className='mt-3' style={{ fontWeight: '700' }}>Fit & Style Quiz</h2>
              <p>Need some help figuring out which glasses are right for you? Find your perfect pair.</p>
              <button className='mt-0 btn-cha'>Shop now</button>
            </div>
          </div>
        </div>

        <div className='section-e'>
          <div className='section-e-container'>
            <div className='section-e-card '>
              <img src={Dis3imgh} alt='x' className='d-flex w-100' />
              <div className='e-card-text mb-2'>
                <h1 style={{ fontSize: 'xxx-large' }}>Eco Eyewear</h1>
                <p style={{ fontSize: 'larger', fontWeight: '500' }}>Featuring thoughtful sourced materials <br /> that support a sustainable future.</p>
                <button className='mt-1 btn-cha ' style={{ backgroundColor: 'white', borderStyle: 'none' }}>Shop now</button>
              </div>
            </div>

            <div className='section-e-card'>
              <img src={Dis3imgi} alt='x' className='d-flex w-100' />
              <div className='e-card-text mb-2'>
                <h1 style={{ fontSize: 'xxx-large' }}>Designer Eyeglasses Sale</h1>
                <p style={{ fontSize: 'larger', fontWeight: '500' }}>50% OFF Lenses + 30 % OFF Frames with code: <br /> DBSAVINGS</p>
                <button className='mt-1 btn-cha ' style={{ backgroundColor: 'white', borderStyle: 'none' }}>Shop now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='section-f '>
        <div className='section-f-textcontainer'>
          <h2 >Ordering eyeglasses online made easy</h2>
          <span style={{fontWeight:'600',fontSize:'medium'}}>
            Eyebuydirect is the online glasses store of your dreams (according to you!). Since 2005, we’ve been putting a focus on<br /> affordable, high-quality frame and eyeglass lenses, which is why our customers consistently rate us the best place to buy<br /> prescription eyewear. From our on-trend designs, to our everyday prices, see why our <span style={{color:'#a52a2a'}}>affordable prescription eyeglasses,</span> <br />
            progressive lenses, sunglasses, <span style={{color:'#a52a2a'}}>blue light glasses,</span> and <span style={{color:'#a52a2a'}}>lens coatings</span> have landed everywhere from Vogue to Buzzfeed.<br />
            Forbes, and more — all thanks to you!
          </span>
          </div>
        </div>

        <div className='section-g'>
         <div className='section-g-child-a'>
          <h1>The reviews are in!</h1>
         </div>
         <div className='section-g-child-b'>
          
         </div>

        </div>



      </div>
      
     
    </>
  );
}

export default Home;
