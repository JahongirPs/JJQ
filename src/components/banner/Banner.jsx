import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
  import './Banner.scss';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import svg from "../../img/svg2.svg"
import svg2 from "../../img/svg3.svg"




const Banner = () => {

    
    return (
       <div className='Slider'>
         <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={true}
          pagination={true}
          autoplay={{delay: 5000}}
          loop={true}
           className="mySwiper">
            <SwiperSlide className='mySpiw'><img src={svg2} alt="" /></SwiperSlide>
            <SwiperSlide className='mySpiw'><img src={svg} alt="" /></SwiperSlide>
        </Swiper>
    </div>
      );
}

export default Banner