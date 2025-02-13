"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image imports (Replace with actual paths)
import ResidentialConstruction from "../assets/images/service/04.svg";
import InteriorFinishing from "../assets/images/service/05.svg";
import ProjectManagement from "../assets/images/service/06.svg";

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

const services: Service[] = [
  { id: 1, name: "Residential Construction", description: "Building homes with skilled labor and technology.", image: ResidentialConstruction },
  { id: 2, name: "Interior Finishing", description: "Enhancing interior spaces with quality craftsmanship.", image: InteriorFinishing },
  { id: 3, name: "Project Management", description: "Ensuring projects meet deadlines and budgets.", image: ProjectManagement },
];

export default function SwiperComponent() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="swiper-area-wrapper" dir="ltr">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
      
        
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{
          768: {   // When screen width is 768px or smaller
            slidesPerView: 1,  // Display 2 slides per view
          },
          1024: {  // For screens wider than 1024px
            slidesPerView: 3,  // Display 3 slides per view
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="single-service-one h-[400px]">
              <div className="icon">
                <Image src={service.image} alt={service.name} width={100} height={100} />
              </div>
              <div className="inner">
                <h5 className="title text-light">{service.name}</h5>
                <p className="disc">{service.description}</p>
                <a href="/service-details" className="read-more-narrow">Explore More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev">❮</button>
      <button className="swiper-button-next">❯</button>

      {/* Custom Styling */}
      <style jsx>{`
        .swiper-button-prev, .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 20px;
          z-index: 10;
          border-radius: 50%;
        }
        .swiper-button-prev { left: -10px; }
        .swiper-button-next { right: -10px; }
      `}</style>
    </div>
  );
}
