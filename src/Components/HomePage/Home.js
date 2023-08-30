import React , { Component } from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect/';



import { BsArrowCounterclockwise } from "react-icons/bs";
import { BiSupport,BiCheckShield } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";


import Slider from "react-slick";
import { RxWidth } from 'react-icons/rx';


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

// let Custimga = new URL ("https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",import.meta.url)










const Home = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

  
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
              <img src={Disimgd} alt='x' className='chcarda-img'/>

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
            <div>
              <Slider {...settings} >
                <div>
                  <div className='section-g-card'>
                    <div className='g-card-up' >
                      <div className='gcard-cintainer'>
                        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='X' className='d-flex w-100' style={{borderRadius:'6rem'}} />
                      </div>
                      <div className='gcard-text'>
                        <h5 style={{fontWeight:'700'}}>SAMANTHA J.</h5>
                        <h5 style={{color:'#D39D4E'}}>I LOVE eyepopsDirect</h5>
                      </div>
                    </div>
                    <hr style={{margin:'2rem 2rem 1rem 2rem '}} ></hr>
                    <div className='gcard-cmnt' >
                      <h5 style={{textAlign:'start',margin:'0rem 2rem 0rem 2rem'}}>
                        It's so user friendly and the customer service is incredible! I tell everyone who compliments my glasses (which happens a lot!) to use this site. Thank you
                      </h5>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='section-g-card'>
                    <div className='g-card-up' >
                      <div className='gcard-cintainer'>
                        <img src='https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png' alt='X' className=' d-flex w-100 h-100' style={{borderRadius:'5rem'}} />
                      </div>
                      <div className='gcard-text'>
                        <h5 style={{fontWeight:'700'}}>MICKAELIA W</h5>
                        <h5 style={{color:'#D39D4E'}}>Great Quality</h5>
                      </div>
                    </div>
                    <hr style={{margin:'2rem 2rem 1rem 2rem '}} ></hr>
                    <div className='gcard-cmnt' >
                      <h5 style={{textAlign:'start',margin:'0rem 2rem 0rem 2rem'}}>
                      So easy to order and great prices to top it off. I also like the fact that they carry Oakley brand products.
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='section-g-card'>
                    <div className='g-card-up' >
                      <div className='gcard-cintainer'>
                        <img src='https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U=' alt='X' className='d-flex w-100' style={{borderRadius:'5rem'}} />
                      </div>
                      <div className='gcard-text'>
                        <h5 style={{fontWeight:'700'}}>EMILY S.</h5>
                        <h5 style={{color:'#D39D4E'}}>Great customer service!</h5>
                      </div>
                    </div>
                    <hr style={{margin:'2rem 2rem 1rem 2rem '}} ></hr>
                    <div className='gcard-cmnt' >
                      <h5 style={{textAlign:'start',margin:'0rem 2rem 0rem 2rem'}}>
                      This is by far the easiest eyewear website to use when comparing different frames. It's helpful to have the sizes and try-on feature readily available in the favorites section.
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='section-g-card'>
                    <div className='g-card-up' >
                      <div className='gcard-cintainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJktgxGN_T3zisMxJb0GazGPI5Wsme2LAIGw&usqp=CAU' alt='X' className='d-flex w-100' style={{borderRadius:'6rem'}} />
                      </div>
                      <div className='gcard-text'>
                        <h5 style={{fontWeight:'700'}}>CARLEE A. B.</h5>
                        <h5 style={{color:'#D39D4E'}}>Perfect Fit</h5>
                      </div>
                    </div>
                    <hr style={{margin:'2rem 2rem 1rem 2rem '}} ></hr>
                    <div className='gcard-cmnt' >
                      <h5 style={{textAlign:'start',margin:'0rem 2rem 0rem 2rem'}}>
                      The website was easy to use, the glasses shipped quickly, and I get nothing but compliments on my new glasses! Thanks!!
                      </h5>
                    </div>
                  </div>
                </div>


                <div>
                  <div className='section-g-card'>
                    <div className='g-card-up' >
                      <div className='gcard-cintainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63KoribGVDB_dswx8iUX99udIebJK_EsaYYTwg2vJoIeIECXhO8iWnI5VBU64wLJ-8gg&usqp=CAU' alt='X' className='d-flex w-100' style={{borderRadius:'6rem'}} />
                      </div>
                      <div className='gcard-text'>
                        <h5 style={{fontWeight:'700'}}>PAUHOV X.</h5>
                        <h5 style={{color:'#D39D4E'}}>Awesome!</h5>
                      </div>
                    </div>
                    <hr style={{margin:'2rem 2rem 1rem 2rem '}} ></hr>
                    <div className='gcard-cmnt' >
                      <h5 style={{textAlign:'start',margin:'0rem 2rem 0rem 2rem'}}>
                      These glasses fit perfectly! They are super lightweight, yet also feel very sturdy at the same time. The colors and design are beautiful. Will be a returning customer!
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='section-g-card'>
                    <div className='g-card-up' >
                      <div className='gcard-cintainer'>
                        <img src='https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/avatar/avatar-1.png' alt='X' className='d-flex w-100' style={{borderRadius:'6rem'}} />
                      </div>
                      <div className='gcard-text'>
                        <h5 style={{fontWeight:'700'}}>JUAN F.</h5>
                        <h5 style={{color:'#D39D4E'}}>So easy</h5>
                      </div>
                    </div>
                    <hr style={{margin:'2rem 2rem 1rem 2rem '}} ></hr>
                    <div className='gcard-cmnt' >
                      <h5 style={{textAlign:'start',margin:'0rem 2rem 0rem 2rem'}}>
                      So easy to order and great prices to top it off. I also like the fact that they carry Oakley brand products.
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='section-g-card'>
                    <div className='g-card-up' >
                      <div className='gcard-cintainer'>
                        <img src='https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/avatar/avatar-2.png' alt='X' className='d-flex w-100' style={{borderRadius:'6rem'}} />
                      </div>
                      <div className='gcard-text'>
                        <h5 style={{fontWeight:'700'}}>Justin J.</h5>
                        <h5 style={{color:'#D39D4E'}}>Perfect</h5>
                      </div>
                    </div>
                    <hr style={{margin:'2rem 2rem 1rem 2rem '}} ></hr>
                    <div className='gcard-cmnt' >
                      <h5 style={{textAlign:'start',margin:'0rem 2rem 0rem 2rem'}}>
                        I tell everyone who compliments my glasses (which happens a lot!) to use this site. Thank you
                      </h5>
                    </div>
                  </div>
                </div>
               
               
              </Slider>
            </div>
          </div>

        </div>



      </div>
      
     
    </>
  );
}

export default Home;
