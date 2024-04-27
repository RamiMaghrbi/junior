import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {EffectCoverflow, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper/core';

import Doctor1 from "../Assets/images/Doctors/DR. Rami yared.jpg";
import Doctor2 from "../Assets/images/Doctors/Dr. Ahmad Bassel Alkheshi.jpg";
import Doctor3 from "../Assets/images/Doctors/Dr. Akram Adeb Mazkor.jpg";
import Doctor4 from "../Assets/images/Doctors/Dr. Ammar Nahass.jpg";
import Doctor5 from "../Assets/images/Doctors/Dr. Hadj ali Moussa.jpg";
import Doctor6 from "../Assets/images/Doctors/Dr. MASSOUD ATASSI.jpg";

export const DoctorData = [
    {
        title: "DR. Rami yared",
        content: "Head of the Department of Informatics Engineering",
        backgroundImage: Doctor1
    },
    {
        title: "Dr. Ahmad Bassel Alkheshi",
        content: "Vice President for Scientific Affairs",
        backgroundImage: Doctor2
    },
    {
        title: "Dr. Akram Adeb Mazkor",
        content: "",
        backgroundImage: Doctor3
    },
    {
        title: "Dr. Ammar Nahass",
        content: "",
        backgroundImage: Doctor4
    },
    {
        title: "Hadj ali Moussa",
        content: "",
        backgroundImage: Doctor5
    },
    {
        title: "Dr. MASSOUD ATASSI",
        content: "Vice Dean of Student Affairs ",
        backgroundImage: Doctor6
    },
];

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const ActiveSlider = () => {
  return (
    <section className="pt-[7rem] pb-[2rem]">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={'coverflow'}
        loop={true}
        spaceBetween={70}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mysiper"
      >
        {DoctorData.map((doctor) => (
          <SwiperSlide key={doctor.title}>
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-900 py-4 px-2 rounded-lg mb-8">
              <div className="w-1/2 rounded-full overflow-hidden">
                <img src={doctor.backgroundImage} alt={doctor.title} className="object-cover rounded-full h-32 w-32" />
              </div>
              <div className="ml-3">
                <h2 className="text-white text-3xl font-bold mb-2">{doctor.title}</h2>
                <p className="text-white text-center">{doctor.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Pagination */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <div className="swiper-pagination"></div>
      </div>
    </div>
    </section>
  );
};

export default ActiveSlider;
