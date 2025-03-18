"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/faz-h1.png", title: "GARLIC CHEESE BREAD", text: "Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!" },
  { id: 2, image: "/faz-h2.png", title: "OFFICE CATERING PIZZA", text: "Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!" },
  { id: 3, image: "/faz-h3.png", title: "ONLINE EXCLUSIVE PIZZA", text: "Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!" },
  { id: 4, image: "/faz-h4.png", title: "MUSHROOM TRUFFLE PIZZA", text: "Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!" },
  { id: 5, image: "/faz-h5.png", title: "CALABRESE PIZZA", text: "Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!" },
  { id: 6, image: "/faz-h6.png", title: "MEGA MEAT PIZZA", text: "Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!" },
];

export default function FeastYourEyes() {
  return (
    <motion.div 
      className="h-auto bg-[url('/laz-bg-25.jpg')] text-zinc-900 py-16"
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-5">
        <motion.h2 
          className="xl:text-md sm:text-sm md:text-sm font-display-main font-bold text-red-600"
          variants={slideUp(2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          SPECIAL DISHES
        </motion.h2>

        <motion.h1 
          className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-8 tracking-tighter leading-tight break-words"
          variants={slideUp(2.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          FEAST YOUR EYES
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-sm md:text-md max-w-md mb-8"
          variants={slideUp(2.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          You can find our whole menu on our website, filled with mouth-watering dishes
          and catering for all kinds of different tastes!
        </motion.p>
      </div>

      {/* Slider */}
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-6xl mx-auto px-6"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <motion.div 
                className="relative hover:bg-white hover:shadow-lg hover:rounded-xl overflow-hidden cursor-pointer p-10 xl:h-120"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Imagem com tamanho fixo */}
                <img src={slide.image} alt={slide.title} 
                  className="w-[300px] h-[250px] object-contain mx-auto mb-5" 
                />
                {/* Texto com altura fixa */}
                <div className="p-4 text-center h-[120px] flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 font-display">{slide.title}</h3>
                  <p className="text-gray-600">{slide.text}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}
