import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://www.siliconinfo.com/assets/img/mep-bim-services-banner-img.png",
      title: "PUBLIC TRAINING",
      description: "Job Oriented Training for Better Productivity",
    },
    {
      id: 2,
      image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213220749/original/f8d2946a901025690a2147f2dc5d1aa9a29ad1a1/mep-revit-modeler-and.jpg",
      title: "INDUSTRIAL TRAINING",
      description: "Enhance Your Technical Skills with Experts",
    },
    {
      id: 3,
      image: "https://skills4future.mk/wp-content/uploads/2021/12/img-przystanek-mbank-model-bim-lodz-pl-pl.jpg",
      title: "CORPORATE TRAINING",
      description: "Custom Training Programs for Professionals",
    },
  ];

  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative flex justify-center items-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-auto max-h-[600px] object-contain"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-10 md:px-20 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">{slide.title}</h1>
              <p className="text-base md:text-lg mt-2">{slide.description}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                Explore Courses
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
