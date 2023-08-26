import React from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect';



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
        <div>
          <img src={Himga} className='H-imga' />
          </div>
        </div>


      </div>
      
    </>
  );
}

export default Home;
