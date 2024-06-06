import React, { useState } from 'react'
import './Holi.css'
import Lottie from 'react-lottie-player'
import lottieJson from '../Assets/Holi.json'
import Nav from './Nav'
import Footer from './Footer'

const Home = () => {
    const [clicked, setClicked] = useState(true);

    const handleClick = () => {
      setClicked(!clicked);
      if (clicked) {
        document.body.style.backgroundColor = 'red'; 
        
      } else {
        document.body.style.backgroundColor = 'lightblue';   
         }
    };
   
    return (
      <div>
        <Nav />
        {/* <div className='bgimg'> */}
          <div className='container py-4'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                
              <div  className='b fs-1'>Holi Festival</div>
                <p className='a fs-2'> Uniting Hearts in the Brilliance of Holi</p>
                <div className='d-flex justify-content-evenly'>
                  <button
                    className={clicked ? "button clicked" : "button"}
                    onClick={handleClick}
                  >
                    <h6 className='btn-btn-primary' style={{backgroundColor:clicked=='white'?'blue':''}}>click here</h6>
                  </button>
    <button className='btn btn-outline-primary'> sec button</button>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 600, height: 300 }}
                />
              </div>
            </div>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    )
  }

  export default Home
