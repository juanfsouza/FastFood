"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { fadeIn, slideUp } from "@/variants";

export default function OfferSanday() {
  return (
    <motion.section 
        className="xl:h-150 md:h-150 bg-cover bg-center bg-[url('/laz-bg-24.jpg')] text-white"
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-5">
        <motion.h2 
          className="text-lg sm:text-sm md:text-2xl font-display-main font-bold text-yellow-400  mt-20"
          variants={slideUp(2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          40% off All premium pizzas
        </motion.h2>

        <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-tight break-words"
            variants={slideUp(2.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
          Happy Sunday
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-sm md:text-md max-w-md text-white mb-8"
          variants={slideUp(2.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          >
          We use only the best ingredients for our unique
          recipes passed down through generations.
        </motion.p>

        {/* Botão "SHOP NOW" */}
        <Button className="h-15 sm:text-sm md:text-sm xl:text-sm font-bold bg-white text-red-500 px-4 py-2 md:px-5 md:py-2 rounded-md hover:bg-green-700 hover:text-white transition-colors">
          SHOP NOW →
        </Button>
      </div>
      <motion.div 
          variants={fadeIn("right", 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="hidden md:flex justify-start"
      >
          <Image 
              src="/laz-pt-4.png"
              width={400}
              height={400}
              alt="Picture of the author"
          />
      </motion.div>
    </motion.section>
  );
}