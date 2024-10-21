import React from 'react'
import Card from '../Pages/Card';
import Sdata from '../Pages/Sdata';
import Courses1 from '../asset/Courses1.jpg'
import '../Pages/Courses.css';
import computerguru3 from '../asset/Computerguru3.jpeg'
import logo from '../asset/logo.png'


function Courses() {
  return (
    <>
     <section className='banners1 contentss '> 
     
     <img src={Courses1} width="100%" height="60%" className='img-fluid mx-auto'></img>
    
    <div className='about-page '>
      <p className='us my-4'> Courses</p>
      <p style={{fontSize:"18px"}}> <a href="/" style={{color: "white", textDecoration:"none"}} > Home.</a>Courses</p>
    </div>
    
  
 </section>
    
    <div className='container my-5 py-5'>
  
          <div className='row '>
          {
            Sdata.map((val, index) =>{
              return <Card imgsrc ={val.imgsrc}
              title = {val.title} /> }
 )
}
            </div>
            </div>


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

export default Courses