import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// นำเข้าโมดูลที่จำเป็น
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner: React.FC = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper-banner"
    >
      <SwiperSlide>
        <Image
          src="/h1.png"
          alt="banner"
          height={500}
          width={1600}
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/h2.png"
          alt="banner"
          height={500}
          width={1600}
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/h3.png"
          alt="banner"
          height={500}
          width={1600}
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
