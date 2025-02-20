import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  { id: 1, img: "https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg" },
  { id: 2, img: "https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg" },
  { id: 3, img: "https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg" },
  { id: 4, img: "https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg" },
  { id: 5, img: "https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg" },
  { id: 6, img: "https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg" },
  { id: 7, img: "https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg" },
  { id: 8, img: "https://png.pngtree.com/png-clipart/20210310/original/pngtree-certificate-design-template-with-dummy-text-and-badge-png-image_5957009.jpg" },
  { id: 9, img: "https://png.pngtree.com/png-clipart/20210310/original/pngtree-certificate-design-template-with-dummy-text-and-badge-png-image_5957009.jpg" },
  { id: 10, img: "https://png.pngtree.com/png-clipart/20210310/original/pngtree-certificate-design-template-with-dummy-text-and-badge-png-image_5957009.jpg" },
];

const Certification = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
      <p className="text-gray-600 mb-8">
        Our proficiency and expertise in offering certified courses have helped us become a recognized professional training institute.
      </p>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {certifications.map((cert) => (
            <div key={cert.id} className="p-2">
              <img src={cert.img} alt={`Certificate ${cert.id}`} className="w-full h-auto shadow-lg rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certification;
