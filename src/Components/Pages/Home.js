import React from 'react'
import Swipers from '../Swipers'
import "./Home.css";
import price1 from "../asset/price1.png"
import price2 from "../asset/price2.png"
import price3 from "../asset/price3.png"
import price4 from "../asset/price4.png"
import home3 from '../asset/home3.png'
import lead from '../asset/lead.png'
import computerguru1 from "../asset/Computerguru1.png"
import computerguru2 from "../asset/Computerguru2.png"
import kajal from '../asset/Kajal.jpg'
import priya from '../asset/Priya.jpg'
import Pushpendra from '../asset/Pushpendra.jpg'
import Shivani from '../asset/Shivani.jpg'
import computerguru3 from '../asset/Computerguru3.jpeg'
import Swipers2 from '../Swipers2';
import logo from '../asset/logo.png'
// import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';


function Home() {
  return (
    <>
    <Swipers/>
    <section>
    <div className='container home-course '>
      <div className='row'>
        <div className='col-md-3 box '>
          <div className='mx-auto align-items-center text-center my-4 '>
          <img src={price1} width= "40%" />
          <h5 className='my-2'> 01. 100+ Courses</h5>
          <p>Explore a variety of new subjects</p>
          </div>

        </div>
        <div className='col-md-3  box '>
        <div className='mx-auto align-items-center text-center my-4 '>
          <img src={price4} width= "40%" />
          <h5 className='my-2'> 02. Lifetime Support
          </h5>
          <p>Lifetime support for upgradation</p>
          
          </div>

      </div>
        <div className='col-md-3 box'>
        <div className='mx-auto align-items-center text-center my-4 '>
          <img src={price2} width= "40%" />
          <h5 className='my-2'> 03. Experts Instruction
          </h5>
          <p>Certified & experienced instructor</p>
          </div>

     </div>
         <div className='col-md-3 box'>
         <div className='mx-auto align-items-center text-center my-4'>
          <img src={price3} width= "40%" />
          <h5 className='my-2'> 04. Recommended
         </h5>
          <p> Best reviews from our alumni</p>
          </div>

      </div>

      </div>
      </div>
    </section>


    <section className='my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='mx-5'>
              <img src= {home3} width="100%" height="34%" />

            </div>
          </div>
          <div className='col-md-6'>
            <div className='mx-3 '>
              <h1 className='text-center mb-4'>Computer Guru Training Institute - Rishikesh</h1>

              <p  style={ {color:"grey", lineHeight:"30px"}} >
              Computers have become an inevitable part of human life. Nowadays, we live in a world where Alexa plays music and Siri sets alarms on the phone. We cannot overlook the importance of computers in education with the launch of so many education portals and apps that have made it necessary to use computers in education. We know that the future is going to be digital with computers and smart devices. It will not change under any circumstances. Actually, with time, a lot of things are becoming digital in our daily routine of living. So, the way technology must be progressing, everyone is updated with the new technology.
              </p>
              <p style={ {fontWeight:"bold", lineHeight:"30px"}}>
              Computer Guru Institute is one of the best training institutes in Rishikesh, which provides new technology and excellent computer training to the students with 100% satisfaction. Computer Guru Training Institute has highly qualified teachers with an updated system and many facilities for our students.
              </p>

              <button className='btn btn-info btn-lg text-light'> explore more </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container">
      <div className='lead'>
        <img src= {lead} width="100%" height="100%"></img>

      </div>

    </div>

    <section className='services my-5'>
      <div className='container'>
      <div className='row '>
      <div className='col-md-6 mt-5 my-3'> 
        <h2  style={ {fontWeight:"bold", fontSize: "37px" }}>Courses tailored to your needs </h2>
      
      </div>
      <div className='col-md-6 mt-5 my-3'>
        <div> <p style={ {color:"grey", lineHeight:"30px"}}>
        Our computer courses are carefully designed to provide a comprehensive and dynamic learning experience for students of all levels, from beginners to advanced users.
          </p> </div>
      </div>
      </div>
      

      <div className='row'>
        <div className='col-md-4  '>
          <div className='mx-1 part px-4 py-4'>
          <i class="bi bi-code-square ms-3 "></i>
        <h5 style={ {fontWeight:"bold", lineHeight:"30px", color:"black"}}>
        Advance Diploma in Computer Applications (ADCA)
        </h5>
        <p  style={ {color:"grey", lineHeight:"30px"}} className='mt-3'> As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.</p>
        <ul style={ {color:"black", lineHeight:"34px"}} >
          <li> Basic Fundamental of computer</li>
          <li> Typing (English/Hindi)</li>
          <li> Microsoft Office</li>
          <li> Fundamentals of Accounts</li>
          <li> Accounting Package Tally</li>
          <li> Taxation (GST / TDS / TCS)</li>

        </ul>
        </div>
        </div>
        <div className='col-md-4 '>
          <div className='mx-1 part px-4 py-4'>
          <i class="bi bi-stack ms-3"></i>
        <h5 style={ {fontWeight:"bold", lineHeight:"30px", color:"black"}}>
        Advance Diploma in Computer Application & Programming (ADCAP)
        </h5>
        <p  style={ {color:"grey", lineHeight:"30px"}} className='mt-3'> As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.</p>
        <ul style={ {color:"black", lineHeight:"34px"}} >
          <li> Basic Fundamental of computer</li>
          <li> Typing (English/Hindi)</li>
          <li> Microsoft Office</li>
          <li> C++ Programming Language</li>
          <li> Java</li>
          <li> python</li>

        </ul>
        </div>
        </div>
        <div className='col-md-4 '>
          <div  className='mx-1 part px-4 py-4'>
          <i class="bi bi-gear-wide-connected ms-3"></i>
        <h5 style={ {fontWeight:"bold", lineHeight:"30px", color:"black"}}>
        Advance Diploma in Desktop Publishing / Graphic Designing (ADDP)
        </h5>
        <p  style={ {color:"grey", lineHeight:"30px"}} className='mt-3'> As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.</p>
        <ul style={ {color:"black", lineHeight:"34px"}} >
          <li> Basic Fundamental of computer</li>
          <li> Typing (English/Hindi)</li>
          <li> Microsoft Office</li>
          <li> Adobe Photoshop, Adobe Illustrator</li>
          <li> Adobe InDesign, Corel Draw</li>
          <li> Canva</li>

        </ul>
        </div>
        </div>

      </div>
      </div>

    </section>

    <section className='description my-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <img src={computerguru1} width="100%" height="100%" />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='mx-2'>
              <h2 className='my-4' style={ {fontWeight:"bold", lineHeight:"40px"}}> What we promise for the bright future of the student</h2>
              <p style={ { color:"grey", lineHeight:"30px"}}> we are always supportive of empowering our students with the necessary knowledge, skills and opportunities for a bright and successful future.</p>

              <div className='d-flex justify-content-center'>
              <div></div>
                <div> <p style={ { color:"grey", lineHeight:"30px"}}> <span style={{fontWeight:"bold", color:"black"}}>Quality Education: </span> We provide high-quality education with a focus on the latest curriculum and expert instructors dedicated to your success.</p></div>
                
              </div>

              <div className='d-flex justify-content-center'>
              <div></div>
                <div> <p style={ { color:"grey", lineHeight:"30px"}}> <span style={{fontWeight:"bold", color:"black"}}>Industry Relevance: </span> Our courses are designed to meet the demands of the ever-evolving technology industry, ensuring that you are well prepared for real-world challenges.</p></div>
                
              </div>
              <div className='d-flex justify-content-center'>
              <div></div>
                <div> <p style={ { color:"grey", lineHeight:"30px"}}> <span style={{fontWeight:"bold", color:"black"}}>Flexibility: </span>: With flexible scheduling options including 1 Year Diploma, 6 Months Certificate Course, Short Term and Professional Course, we meet your unique needs and commitments.</p></div>
                
              </div>
              <button className='btn btn-info text-light'> explore more </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className=' breif'>
      <div className='container my-3'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='mx-4'>
              <h1  style={ {fontWeight:"bold", lineHeight:"40px"}} className='mt-3 my-4'> What we do ?</h1>
              <p  style={ { color:"grey", lineHeight:"35px"}}> We believe that our growth as a training institute goes hand in hand with the growth and success of our students. Everyone in the CGTI family has a responsibility to collaboratively influence the practices, values and tools that make people successful IT professionals. We promote students’ career development by creating opportunities that enable everyone to learn, think and innovate. Here at CGTI Technology, we help people develop their skills through computer software related courses.

            </p>
            <button className='btn btn-info text-light mt-4'> explore more </button>
   
            </div>
          </div>
          <div className='col-md-5'>
            <div>
              
              <img src={computerguru2} width="100%" height="100%"></img>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='format '>
      <div className='container'> 
        <div className='row'>
          <div className='col-md-7'>
            <div className='mt-4'>
              <h1  style={ {fontWeight:"bold"}}> Develop Your Career</h1>
              <p  style={ { color:"grey", lineHeight:"30px"}}> Have you passed class 12th or graduation? Or you want to make your bright future in the field of computer.</p>

              <div class="accordion" id="accordionExample">
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Learn Computer from Basic to Advanced
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p> We offer various kind of courses as per the interest and time duration of the students. Such as – <strong style={{color:"black"}}> 1 Year Diploma, 6 Months Certificate Course, Short Term Course, Professional Course, Data Entry Operator Course, Typing: Hindi/English </strong></p>
      </div>
    </div>
    
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Wide Range of Courses
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p> We have a variety of courses available. Students can offer any course according to their interest.</p>
      </div>
    </div>
    
  </div>
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Choose any flexible time for your course
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p> Students can choose any flexible timing for the course as per their convenience. We learn students individually and group so that the student’s attention remains focused on education.</p>
      </div>
    </div>
    
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Well Educated Faculty
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p> All our teachers are experts in their respective fields. Communicates very well with the students and keeps the focus on the students regarding their education.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Authoritative Certificate for All Over India
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>
        Our certificates are recognised by the Government. You can also verify these certificates online on our student’s portal.
       </p>
      </div>
    </div>
  </div>
</div>
              </div>
          </div>

          <div className='col-md-5'>
            <div className='px-4 forms mt-4'>
              <h1  style={ {fontWeight:"bold", lineHeight:"40px"}} className='px-4'>Book Free Demo Class!</h1>
              <p  style={ { color:"grey", lineHeight:"30px"}}>Thank you for reaching out to UtechSoftware! Please fill the form right. Our team will contact you shortly.</p>

              <div>
              <form>
  <fieldset disabled>
    
   
    <div class="mb-3">
      
      <input type="text" id="disabledTextInput" class="form-control" placeholder="name"/>
    </div>
    <div class="mb-3">
      
      <input type="text" id="disabledTextInput" class="form-control" placeholder="email "/>
    </div>
    <div class="mb-3">
      
      <input type="text" id="disabledTextInput" class="form-control " placeholder="mobile no."/>
    </div>
    <div class="mb-3">
      
      <input type="text" id="disabledTextInput" class="form-control" placeholder="location"/>
    </div>
    <div class="mb-3">
      
      <input type="text" id="disabledTextInput" class="form-control" placeholder="highest education"/>
    </div>
    <div class="mb-3">
      <textarea placeholder="message" class="form-control  col-5 " ></textarea>

    </div>
    
   
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>

    <section className='facilites '>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-gear-wide-connected"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '> Expert & Experienced Trainers </h5> 
            </div>
          </div>
          <div className='col-md-3 '>
            <div className='text-center projects px-5'>
            <i class="bi bi-lightbulb"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '> Latest Tricks &
              Technique </h5> 
            </div>
          </div>

          <div className='col-md-3 '>
            <div className='text-center projects px-5'>
            <i class="bi bi-stopwatch"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '>Flexible Batch 
                Timings </h5> 
            </div>
          </div>

          <div className='col-md-3'>
            <div className='text-center px-5 projects'>
            <i class="bi bi-rocket"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '>Work on Live Project </h5> 
            </div>
          </div>


          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-recycle"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '> Job Oriented Practical Training</h5> 
            </div>
          </div>
          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-laptop"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='py-4 '> Student's
              Portal</h5> 
            </div>
          </div>

          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-laptop"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '> Free Typing course with
              any course </h5> 
            </div>
          </div>
          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-router"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='py-4 '> Internet
              Facility </h5> 
            </div>
          </div>

          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-book"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '> Job Oriented Practical Training</h5> 
            </div>
          </div>
          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-patch-check"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='py-4 '> Student's
              Portal</h5> 
            </div>
          </div>

          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-pc-display"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='my-3 '> Free Typing course with
              any course </h5> 
            </div>
          </div>
          <div className='col-md-3'>
            <div className='text-center projects'>
            <i class="bi bi-suitcase-lg"></i>
              <h5 style={{lineHeight:"36px" , fontWeight:"bold", color:"black"}} className='py-4 '> Internet
              Facility </h5> 
            </div>
          </div>


          

        </div>
      </div>
    </section>

    <section className='mt-5'>
      <div className='container'>
        <h1 style={ {fontWeight:"bold"}}>Our Expert Team Member Will Help to Progress</h1>
        <p style={ { color:"grey", lineHeight:"27px"}}>Our team is here to provide the support and expertise you need. With their unwavering commitment to your growth, you can confidently stride forward on your educational and career path, knowing that you have a trusted partner in your pursuit of success.</p>

        <div className='row'>
          <div className='col-md-3'>
            <div className='imgs mx-1'>
              <img src={kajal} width="100%" height="100%"></img>
              <div style={{marginTop:"-40px", color:"white",}}> <h4 className='text-center'>kajal</h4></div>
            </div>
          </div>
          <div className='col-md-3'>
          <div className='imgs mx-1' >
              <img src={priya} width="100%" height="100%"></img>
              <div style={{marginTop:"-40px", color:"white",}}> <h4 className='text-center'>Priya</h4></div>
            </div>
          </div>
          <div className='col-md-3 '>
          <div className='imgs mx-1'>
              <img src={Pushpendra} width="100%" height="100%"></img>
              <div style={{marginTop:"-40px", color:"white",}}> <h4 className='text-center'>Pushpendra</h4></div>
            </div>
          </div>
          <div className='col-md-3'>
          <div className='imgs mx-1'>
              <img src={Shivani} width="100%" height="100%"></img>
              <div style={{marginTop:"-40px", color:"white",}}> <h4 className='text-center'>Shivani</h4></div>
            </div>
          </div>
        </div>

      </div>

      
    </section>

    <section className=' courses'>
      <div className='container mt-5'>
        <h1 className='text-center mt-5 px-5 my-3' style={ {fontWeight:"bold", lineHeight:"45px " }}> Featured Courses <br></br>
       
        for your Success</h1>  <hr></hr>
        <div className='row'>
          <div className='col-md-3'>
            <div className='px-4 cards my-5 py-4'>
              <h5 style={{color:"skyblue", fontWeight:"bold"}}> 01</h5>
              <h4>Diploma Courses</h4>
              <p style={ { color:"grey", lineHeight:"30px"}}> We provides various types of Diploma courses for one year. All these are job oriented courses with basic to advance.</p>
            </div>
          </div>
          <div className='col-md-3'>
          <div className='px-4 cards-2 my-5 py-4'>
              <h5 style={{color:"purple", fontWeight:"bold"}}> 02</h5>
              <h4>Certificate Courses</h4>
              <p style={ { color:"grey", lineHeight:"30px"}}> The duration of these courses is not very long. These courses are for working or non-working people. Therefore it is easy to complete this type of course in less months.</p>
            </div>
          </div>
          <div className='col-md-3'>
          <div className='px-4 cards-3 my-5 py-4'>
              <h5 style={{color:"white", fontWeight:"bold"}}> 02</h5>
              <h4>Short Term Courses</h4>
              <p style={ { color:"white", lineHeight:"30px"}}> This course is done keeping in mind a particular software or model. So it is easy to complete this type of course in less time with best learning.</p>
            </div>
          </div>
          <div className='col-md-3'>
          <div className='px-4 cards-4 my-5 py-4'>
              <h5 style={{color:"green", fontWeight:"bold"}}> 02</h5>
              <h4>Computer Teacher Training Courses (CTTC)</h4>
              <p style={ { color:"grey", lineHeight:"30px"}}> This program is for those who want to make their career in teaching and training field. In the CTTC course, learners will not only acquire computer knowledge but will also learn how to effectively transfer this knowledge to their students.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='contacts my-5'>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-6 my-5 mt-5'>
            <div className='mt-5'>
              <h1 style={{ fontWeight:"bold", color:"white"}}> We Provides Top-Quality Industry Relevant Computer Courses.</h1>
              <h5 className='mt-4' style={{ lineHeight:"36px"}}> Get free counselling by our experienced counsellors. We offer you free demo and trial classes to evaluate your eligibility for the course.</h5>
            </div>
          </div>
          <div className='col-md-6 my-5'>
            <div className='mt-5 text-center '>
              <div className='icons  mx-auto  '> <i class="bi bi-telephone-fill"></i></div>
              <h5 className='mt-4'> for enquiry Call us now</h5>
              <h3> +91-75006 79066</h3>
              <button className='btn btn-info mt-4'>contact us</button>
            </div>
          </div>
        </div>

        <div className='container'> 
          <div className='mx-auto px-5 '> <h1 style={{fontWeight:"bold", color:"white" }} className='text-center'>Read Our Last News. <br></br>
          Be in Trend</h1></div>
            </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
        <div class="card" >
  <img src={computerguru3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> <p class="card-text" style={{ fontWeight:"bold", color:"grey" , fontSize:"16px"}}>December 28, 2022By Computer Guru Training Institute </p></h5>
   
     <p> <span style={{ fontWeight:"bolder", fontSize:"20px"}}>  यमकेश्वर ब्लाक के धारकोट गांव का प्राइमरी स्कूल बना स्मार्ट स्कूल.</span> </p>
  
    <a href="#" class="btn btn-primary"> read more</a>
  </div>
</div>
        </div>
        </div>

      </div>
    </section>


    <section className='container my-5 testimonial'>
      <div className='py-5'>
      <Swipers2/>
      </div>
    </section>

    <section className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='py-5 my-5'>
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

export default Home