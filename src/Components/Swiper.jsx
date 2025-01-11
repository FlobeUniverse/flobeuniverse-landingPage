//import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../assets/ImageDisplay2.png"

const ImageCarousel = () => {
  const images = [
    { id: 1, url: img1, alt: "Image 1" },
    { id: 2, url: "https://via.placeholder.com/600x400", alt: "Image 2" },
    { id: 3, url: "https://via.placeholder.com/600x400", alt: "Image 3" },
    { id: 4, url: "https://via.placeholder.com/600x400", alt: "Image 4" },
    { id: 5, url: "https://via.placeholder.com/600x400", alt: "Image 5" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        slidesPerView={1} // Show 3 slides
        spaceBetween={20} // Space between slides
        centeredSlides={true} // Center the active slide
        loop={true} // Infinite loop
        autoplay={{
          delay: 3000, // Delay between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;