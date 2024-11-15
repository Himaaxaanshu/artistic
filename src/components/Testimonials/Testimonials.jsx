import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Judith Black",
    title: "CEO of Workcation",
    quote:
      "Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc.",
    image: "/path-to-image1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    title: "CTO of TechNova",
    quote:
      "Donec vel mauris lectus. Etiam faucibus orci justo, at ullamcorper ligula porta.",
    image: "/path-to-image2.jpg",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-gray-900 text-white rounded-lg shadow-lg">
            <div className="w-full md:w-1/3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-8">
              <p className="text-lg md:text-xl">{testimonial.quote}</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
