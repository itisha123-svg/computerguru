import React from 'react'
import Banner4 from '../asset/Banner4.jpg';
import '../Pages/Contact.css'
import computerguru3 from '../asset/Computerguru3.jpeg'
import logo from '../asset/logo.png'


function Contact() {
  return (
    <>
     <section className='banners1 contentss '> 
     
     <img src={Banner4} width="100%" height="60%" className='img-fluid mx-auto'></img>
    
    <div className='about-page mt-2 '>
      <p className='us my-2 mt-5 '> Contact Us</p>
      <p style={{fontSize:"20px"}}> <a href="/" style={{color: "white", textDecoration:"none"}} > Home.</a>Contact Us</p>
    </div>
    
  
 </section>

 <div className='my-5'>
 <div style={{width: "100%"}} className='mt-4'><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=cgti%20shyampur,%20rishikesh,%20uttarakhand,%20India+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
 </div>

 <section>
  <div className='container mx-4'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='px-4'>
          <h1>Get in Touch</h1>
          <p>Have any doubts? Want to speak to us? Just reach out and we will get back to you as soon as possible!</p>
          <div className='d-flex justify-content-center '>
            <div className='mx-2'>
              <div style={{width:"50px", height:"50px", backgroundColor:"blue", borderRadius:"50px"}} className='me-4' > <i class="bi bi-geo-alt d-flex justify-content-center"  style={{ fontSize:"36px", color:"white"}}></i></div>
            </div>
            <div>
              <h5 style={{ color:"black"}}> Main Branch: IDPL (Rishikesh)</h5>
              <p style={{ color:"grey"}}>Gali No. 15, Geeta Nagar, IDPL, Virbhadra, Rishikesh,
                <br/>
              Dist.- Dehradun, Uttarakhand-249202</p>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
            <div className='mx-4'>
              <div style={{width:"50px", height:"50px", backgroundColor:"blue", borderRadius:"50px"}} > <i class="bi bi-geo-alt d-flex justify-content-center"  style={{ fontSize:"36px", color:"white"}}></i></div>
            </div>
            <div>
              <h5 style={{ color:"black"}}>Branch-2: Shyampur (Rishikesh)</h5>
              <p style={{ color:"grey"}}>Guljar Farm, Gali No.22, Hatt Road Shyampur, Rishikesh,
              
                <br/>
              Dist.- Dehradun, Uttarakhand-249202</p>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
            <div className='mx-4'>
              <div style={{width:"50px", height:"50px", backgroundColor:"blue", borderRadius:"50px"}} > <i class="bi bi-envelope ms-2"  style={{ fontSize:"36px", color:"white"}}></i></div>
            </div>
            <div>
              <h5 style={{ color:"black"}}> Mail Us:</h5>
              <p style={{ color:"grey"}}>Guljar Farm, Gali No.22, Hatt Road Shyampur, Rishikesh,
              
                <br/>
              Dist.- Dehradun, Uttarakhand-249202</p>
            </div>
          </div>

          <div className='d-flex justify-content-start'>
            <div className='mx-4'>
              <div style={{width:"50px", height:"50px", backgroundColor:"blue", borderRadius:"50px"}} > <i class="bi bi-telephone ms-2"  style={{ fontSize:"36px", color:"white"}}></i></div>
            </div>
            <div>
              <h5 style={{ color:"black"}}> Phone Us:</h5>
              <p style={{ color:"grey"}}>+91-7500679066, 7455857367</p>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className='col-md-6'>
        <div className='my-5'>
          <h5 style={{color:"black"}} className='text-center'>Send Us a Message</h5>
          <div className='mx-5 mt-3 inputs-type'>
          <form>
  
  <div class="mb-3 ">
    
    <input type="password" class="form-control" id="exampleInputPassword1"  required placeholder='Name' />
  </div>
  <div class="mb-3 ">
    <input type="email" class="form-control" id="exampleCheck1" required placeholder='Email'/>
  </div>
  <div class="mb-3 ">
    <input type="text" class="form-control" id="exampleCheck1" required placeholder='Number'/>
  </div>

  <div class="mb-3 ">
    <input type="text" class="form-control" id="exampleCheck12" required placeholder='Subject'/>
  </div>
  <div class="mb-3 ">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
 
</div>
  <button type="submit" class="btn btn-primary">Send a message</button>
</form>
          </div>
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

export default Contact