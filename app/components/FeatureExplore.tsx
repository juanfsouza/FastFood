"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    image: "/faz-img-35.png",
    title: "Burger Combo",
    subtitle: "Burger",
    text: "Indulge in our mouth-watering Signature Stacks each layer packed with bold flavors and textures that will leave you craving for more!",
  },
  {
    id: 2,
    image: "/faz-img-36.png",
    title: "Burg'r Combo",
    subtitle: "Chicken",
    text: "Indulge in our mouth-watering Signature Stacks each layer packed with bold flavors and textures that will leave you craving for more!",
  },
  {
    id: 3,
    image: "/faz-img-37.webp",
    title: "Taco Bell",
    subtitle: "Burrito",
    text: "Indulge in our mouth-watering Signature Stacks each layer packed with bold flavors and textures that will leave you craving for more!",
  },
];

// Função de animação para entrada da esquerda para a direita
const fadeInLeftToUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});
  

export default function FeaturesExplore() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3 
            variants={fadeInLeftToUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-sm font-bold text-red-600 uppercase mb-2"
        >
          The Magic of Flavor
        </motion.h3>
        <motion.h2 
            variants={fadeInLeftToUp(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-4xl font-bold mb-4"
        >
            Explore The New Taste
        </motion.h2>
        <motion.p 
            variants={fadeInLeftToUp(0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Fastfood is a unique and independent quick service brand. Burgers and
          shakes are made pretty hot and tasty. The ultimate "melt in your
          mouth" experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.id} className="bg-white p-4 rounded-lg ">
              <motion.div                 
                variants={fadeInLeftToUp(index * 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="relative w-full h-110 rounded-lg overflow-hidden"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div 
                variants={fadeInLeftToUp(index * 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="relative mt-10 sm:mt-10 md:mt-8 xl:mt-10"
               >
                <h3 className="text-6xl md:text-3xl lg:text-6xl absolute pl-10 sm:pl-50 md:pl-12 font-bold text-yellow-400 italic font-display bottom-4">
                    {feature.subtitle}
                </h3>
              </motion.div>
              <motion.h4
                variants={fadeInLeftToUp(index * 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="text-lg font-bold mt-10"
               >
                {feature.title}
               </motion.h4>
              <motion.p 
                variants={fadeInLeftToUp(index * 0.9)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="text-gray-600 mt-2 text-sm"
              >
                {feature.text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
