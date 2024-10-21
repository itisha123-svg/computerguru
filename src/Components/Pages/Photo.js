import React from 'react'
import Banner5 from '../asset/Banner5.jpg';
import Swiper3 from '../Swiper3';
import logo from '../asset/logo.png'
import computerguru3 from '../asset/Computerguru3.jpeg'

function Photo() {
  return (
   <>
    <section className='banner contentss'> 
     
     <img src={Banner5} width="100%" height="100%" className='img-fluid mx-auto'></img>
    
    <div className='about-page'>
      <p className='us'> Photo Gallery</p>
      <p style={{fontSize:"20px"}}> <a href="/" style={{color: "white", textDecoration:"none"}} > Home.</a>photo Gallery</p>
    </div>
    
  
 </section >
 <section className='my-5'>
 <Swiper3/>
 </section>

 <section className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='py-5 my-3'>
              <img src={logo}></img>
              <p style={{color:"grey", fontWeight:"500", lineHeight:"30px"}} className='mt-4'>
              The best training centers in Rishikesh provide pupils with top-notch computer instruction and cutting-edge technology with a 100% satisfaction rate.
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='py-5 my-5'>
              <h5 className='ms-4'>QUICK LINK</h5>
              <ul >
                <li>Home</li>
                <li>About Us</li>
                <li> Courses</li>
                <li>Photo Gallery</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
          <div className='py-5 my-5'>
              <h5 className='ms-5'>PHONE</h5>
              <ul>
                <li>+91-7500679066</li>
                <li> +91-7455857367</li>
                </ul>
                <h5 className='ms-5'> EMAIL</h5>
                <ul>
                <li>support@computerguru.co.in </li>
                <li>cgtirishikesh@gmail.com</li>
                
              </ul>
            </div>
          </div>

          <div className='col-md-3'>
          <div className='py-5 my-5'  >
              <h5 >LATEST NEWS</h5>
             <div className='d-flex justify-content-center mt-4'>
              <div className='ms-3'> <img src={computerguru3} width="60%" height="50%"></img></div>
              <div className='me-5'> 
                <h6>यमकेश्वर ब्लाक</h6>
                <p>December 28, 2022</p>
              </div>
             </div>
            </div>

          </div>
        </div>
      </div>
    </section>

 
   </>
  )
}

export default Photo