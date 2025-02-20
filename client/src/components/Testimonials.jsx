import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Richard Ignesius",
    role: "MEP Student",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "I was looking for a reliable institute to avail MEP training in India and got the best, BIMBEESInfo-Tech. I received highly flexible and expert training sessions that were easy to understand and covered all the essential topics.",
  },
  {
    name: "Seema Bhaskar",
    role: "PLC Student",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    feedback:
      "I heartily thank BIMBEESInfo-Tech for their special mentoring and support. I highly recommend them to avail certified HVAC training in India. Their PLC training courses are well-crafted with modern study materials.",
  },
  {
    name: "Shuhaib Malik",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "It is good to join HVAC, faculty are really good. They are working professionals and explained with project including India Municipality approvals. Their experience let me see how the HVAC live project was going well.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mb-8">
          About Our Professional Training Course India
        </p>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg p-6 rounded-lg text-left mx-2 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-3 border-2 border-blue-400"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.feedback}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 space-x-4">
            <button className="swiper-button-prev bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
              <FaChevronLeft />
            </button>
            <button className="swiper-button-next bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
