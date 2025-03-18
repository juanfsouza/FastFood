"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    image: "/faz-quatity.svg",
    title: "QUALITY FOODS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/faz-pizza-1.svg",
    title: "ORIGINAL RECIPES",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: "/faz-shipment-1.svg",
    title: "FAST DELIVERY",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// Função de animação para entrada da esquerda para a direita
const fadeInLeftToUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={fadeInLeftToUp(index * 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              {/* Ícone + Círculo */}
              <motion.div
                variants={fadeInLeftToUp(index * 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative w-24 h-24 flex items-center justify-center"
              >
                <div className="absolute w-16 h-16 bg-yellow-400 rounded-full" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="relative z-10"
                />
              </motion.div>

              {/* Texto */}
              <motion.h3
                variants={fadeInLeftToUp(index * 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-lg font-bold font-display-main"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                variants={fadeInLeftToUp(index * 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-sm text-gray-700"
              >
                {feature.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
