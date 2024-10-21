import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import banner2 from './asset/banner2.jpg';
import banner1 from './asset/banner1.jpg';
import banner3 from './asset/banner3.jpg'

function Swipers() {
  return (
    <>
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={banner1} width="100%" height= "100%"></img>
      </SwiperSlide>
      <SwiperSlide> <img src={banner2} width="100%" height= "100%"></img></SwiperSlide>
      <SwiperSlide> <img src={banner3} width="100%" height= "100%"></img></SwiperSlide>
     
    
    </Swiper>
    </>
  )
}

export default Swipers