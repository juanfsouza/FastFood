"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RowTag() {

  return (
    <motion.section 
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="flex justify-center bg-white text-black p-6 rounded-lg shadow-md text-center z-10"
    >
      <Image 
        src="/Fazfood.svg"
        width={80}
        height={80}
        alt="Picture of the author"
        className="mr-2"
      />
      <h1 className="text-2xl font-bold font-display text-gray-800">GET <span className="text-red-500">$5 OFF</span> JOIN FAZ LIFE REWARDS
      </h1>
    </motion.section>
  );
};
