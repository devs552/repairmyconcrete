"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import sophiaAnne from "../assets/images/testimonials/01.webp";
import alenaJoe from "../assets/images/testimonials/02.webp";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Sophia Anne Harris",
    role: "Property Manager at Green Valley Realty",
    feedback:
      "From the initial consultation to the final walk-through, every step was handled with the utmost professionalism and care...",
    rating: 4.8,
    image: sophiaAnne,
  },
  {
    id: 2,
    name: "Alena Joe Harris",
    role: "Property Manager at Green Valley Realty",
    feedback:
      "The team’s commitment to quality and timely delivery was impressive. The end result exceeded our expectations...",
    rating: 4.8,
    image: alenaJoe,
  },
  {
    id: 1,
    name: "Sophia Anne Harris",
    role: "Property Manager at Green Valley Realty",
    feedback:
      "From the initial consultation to the final walk-through, every step was handled with the utmost professionalism and care...",
    rating: 4.8,
    image: sophiaAnne,
  },
  {
    id: 2,
    name: "Alena Joe Harris",
    role: "Property Manager at Green Valley Realty",
    feedback:
      "The team’s commitment to quality and timely delivery was impressive. The end result exceeded our expectations...",
    rating: 4.8,
    image: alenaJoe,
  },
  {
    id: 1,
    name: "Sophia Anne Harris",
    role: "Property Manager at Green Valley Realty",
    feedback:
      "From the initial consultation to the final walk-through, every step was handled with the utmost professionalism and care...",
    rating: 4.8,
    image: sophiaAnne,
  },
  {
    id: 2,
    name: "Alena Joe Harris",
    role: "Property Manager at Green Valley Realty",
    feedback:
      "The team’s commitment to quality and timely delivery was impressive. The end result exceeded our expectations...",
    rating: 4.8,
    image: alenaJoe,
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 ">
      <div className="container mx-auto text-center">
        

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
         
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
       
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// Testimonial Card Component
const TestimonialCard = ({ name, role, feedback, rating, image }: any) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-lg mx-auto">
    <p className="text-gray-700 italic mb-4">“{feedback}”</p>
    <div className="flex items-center justify-center space-x-4">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full border-4 border-gray-300"
      />
      <div>
        <h5 className="font-semibold">{name}</h5>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    </div>
    <div className="mt-3 flex items-center justify-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        ></i>
      ))}
      <p className="ml-2 text-gray-700">{rating} <span>Ratings</span></p>
    </div>
  </div>
);
