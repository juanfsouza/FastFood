"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="xl:min-h-screen lg:min-h-screen relative w-full bg-zinc-900 overflow-hidden">
      <Navbar />
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover">
        <Image
          src="/faz-slide-07.webp"
          alt="Delivery Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-start justify-center pl-10 md:pl-20 lg:pl-50 transition-all">
        <motion.h2 
          className="text-lg sm:text-sm md:text-2xl font-display-main font-bold text-yellow-400 mb-5 pl-10 md:mt-30 lg:mt-60 lg:pl-80"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}>
          SUPER DELICIOUS CHEESE
        </motion.h2>

        <div className="max-w-2xl mx-auto ml-5 text-center">
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-tight break-words"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}>
            CHEESE PIZZA LIMITED
          </motion.h1>
        </div>

        <div className="md:max-w-sm sm:max-w-sm lg:max-w-xl lg:text-center lg:text-3xl">
          <motion.p 
            className="text-sm sm:text-sm md:text-md max-w-2xl font-display-main ml-5 md:ml-10 text-white mb-8"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}>
            Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.
          </motion.p>
        </div>

        {/* Botão "ORDER NOW" */}
        <button className="text-md sm:text-xl md:text-xl xl:py-4 bg-green-700 text-white ml-10 md:ml-20 lg:ml-90 px-4 py-3 md:px-6 md:py-2 rounded-md hover:bg-red-800 transition-colors">
          ORDER NOW →
        </button>
      </div>
    </section>
  );
}
