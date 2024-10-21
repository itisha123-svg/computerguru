
import { Swiper, SwiperSlide} from 'swiper/react';

import img1 from './asset/img1.jpeg'
import img2 from './asset/img2.jpeg'
import img3 from './asset/img3.jpeg'
import img4 from './asset/img4.jpeg'
import img5 from './asset/img5.jpeg'
import img6 from './asset/img6.jpeg'
import img7 from './asset/img7.jpeg'
import img8 from './asset/img8.jpg'
import img9 from './asset/img9.jpeg'
import React from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
function Swiper3() {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} width="100%" height="100%"></img>
        </SwiperSlide>
        <SwiperSlide><img src={img2} width="100%" height="100%"></img></SwiperSlide>
        <SwiperSlide><img src={img4} width="100%" height="100%"></img></SwiperSlide>
        <SwiperSlide><img src={img3} width="100%" height="100%"></img></SwiperSlide>
        <SwiperSlide><img src={img5} width="100%" height="100%"></img></SwiperSlide>
        <SwiperSlide><img src={img6} width="100%" height="100%"></img></SwiperSlide>
        <SwiperSlide> <img src={img7} width="100%" height="100%"></img></SwiperSlide>
        <SwiperSlide><img src={img8} width="100%" height="100%"></img></SwiperSlide>
        <SwiperSlide><img src={img9} width="100%" height="100%"></img></SwiperSlide>
      </Swiper>
     
       
       
    </>
  )
}

export default Swiper3