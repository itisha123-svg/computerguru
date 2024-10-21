import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Priyanshu from './asset/Priyanshu.jpg'
import Jyoti from './asset/Jyoti.jpg'
import Lalit from './asset/Lalit.jpg'
import Piyush from './asset/Piyush.jpg'
import Hemanth from './asset/Hemanth.jpg'
function Swipers2() {
  return (
   <>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='d-flex justify-content-center'>
                <div > <img src={Priyanshu} width="60%" height="94%" style={{borderRadius:"55px"}}></img> </div>
                <div><h4>Priyanshu Kothari</h4>
                <p> <h6> student</h6></p>
                </div>
            </div>
            <div className='mt-3 ms-4'>
                    <p>
                    “I consider myself extremely fortunate to have had the opportunity to learn graphic & web designing under the guidance of Pushpendra sir at computer guru training institute. My experience with the teacher and the institute has been nothing short of exceptional. "
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='d-flex justify-content-center'>
                <div > <img src={Lalit} width="60%" height="94%" style={{borderRadius:"55px"}}></img> </div>
                <div><h4>Lalit Kashyap</h4>
                <p> <h6> student</h6></p>
                </div>
            </div>
            <div className='mt-3 ms-4'>
                    <p>
                    “I can't say enough about my incredible experience at the Computer Guru Training Institute. As a recent diploma of their program, I am immensely grateful for the knowledge and skills I've gained during my time here."
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='d-flex justify-content-center'>
                <div > <img src={Hemanth} width="60%" height="94%" style={{borderRadius:"55px"}}></img> </div>
                <div><h4>Hemanth Raturi</h4>
                <p> <h6> student</h6></p>
                </div>
            </div>
            <div className='mt-3 ms-4'>
                    <p>
                    “I can confidently say that enrolling in the Computer Guru Training Institute was one of the best decisions I've made for my career. This institute has truly transformed my understanding of computer software and technology. "
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='d-flex justify-content-center'>
                <div > <img src={Jyoti} width="60%" height="94%" style={{borderRadius:"55px"}}></img> </div>
                <div><h4>Jyoti Rawat</h4>
                <p> <h6> student</h6></p>
                </div>
            </div>
            <div className='mt-3 ms-4'>
                    <p>
                    “This institute are experts in their fields and provided me with actionable advice to navigate the challenges of the tech world. Whether you're just starting or looking to advance in your career. "
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='d-flex justify-content-center'>
                <div > <img src={Piyush} width="60%" height="94%" style={{borderRadius:"55px"}}></img> </div>
                <div><h4>Piyush Dhiman</h4>
                <p> <h6> student</h6></p>
                </div>
            </div>
            <div className='mt-3 ms-4'>
                    <p>
                    “This institute is an amazing place for learning, along with having fun. I am thankful to all the teachers who supported and guided me. "
                    </p>
                </div>
        </SwiperSlide>
      
      </Swiper>
   </>
  )
}

export default Swipers2