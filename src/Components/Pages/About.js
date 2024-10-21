import React from 'react'
import '../Pages/About.css';
import Abouts from '../asset/Abouts.jpg'
import logo from '../asset/logo.png'
import computerguru3 from '../asset/Computerguru3.jpeg'
function About() {
  return (
   <>
   <section className='banner contentss'> 
     
       <img src={Abouts} width="100%" height="auto" className='img-fluid mx-auto'></img>
      
      <div className='about-page'>
        <p className='us '> About Us</p>
        <p style={{fontSize:"20px"}}> <a href="/" style={{color: "white", textDecoration:"none"}} > Home.</a>About Us</p>
      </div>
      
    
   </section>
   <section className='my-3 py-3'>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='mt-3 ms-5'>
            <img src={logo} className=' ms-5'></img>
            <h4 style={{fontWeight:"bold"}} className='mt-3 '>  Computer Guru Training Institute</h4>
          </div>
        </div>
        <div className='col-md-6'>
          <div className=''>
            <h6 style={{color:"black", lineHeight:"29px", textTransform:"lowercase"}}>Computers have become an inevitable part of human life. Nowadays, we live in a world where Alexa plays music and Siri sets alarms on the phone. We cannot overlook the importance of computers in education with the launch of so many education portals and apps that have made it necessary to use computers in education. </h6>
            <p style={{color:"grey", lineHeight:"29px", fontWeight:"400", textTransform:"lowercase"}}>
            We know that the future is going to be digital with computers and smart devices. It will not change under any circumstances. Actually, with time, a lot of things are becoming digital in our daily routine of living. So, the way technology must be progressing, everyone is updated with the new technology. Computer Guru Institute is one of the best training institutes in Rishikesh, which provides new technology and excellent computer training to the students with 100% satisfaction. Computer Guru Training Institute has highly qualified teachers with an updated system and many facilities for our students.
            </p>
        </div>
      </div>
      </div>
    </div>
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

export default About