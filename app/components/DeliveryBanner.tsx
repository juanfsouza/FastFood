"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DeliveryBanner() {
  return (
    <section className="relative w-full h-[500px] lg:h-[700px] bg-zinc-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/faz-bg-25.jpg"
          alt="Delivery Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full max-w-7xl mx-auto px-6">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-lg"
        >
          <h4 className="text-md font-semibold uppercase tracking-wide">
            Explore The New Taste
          </h4>
          <h1 className="text-5xl font-bold text-yellow-400 mt-3">
            30 MINUTES DELIVERY!
          </h1>
          <p className="text-lg mt-4">
            If you're having a meeting, working late at night and need an extra push,
            let us know and we will be there.
          </p>
          <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800 xl:py-5 transition">
            ORDER NOW →
          </button>
        </motion.div>
      </div>
    </section>
  );
}