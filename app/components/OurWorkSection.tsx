"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Função de animação para entrada da esquerda para a direita
const fadeInLeftToLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
});

const fadeInLeftToRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
});

const fadeInLeftToUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function OurWorkSection() {
  return (
    <section className="relative mt-20 w-full xl:h-200 flex items-center justify-center overflow-hidden">
      {/* Fundo com imagens */}
      <div className="absolute inset-0 flex">
        <motion.div 
            variants={fadeInLeftToLeft( 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="w-1/2 h-full relative hidden lg:block"
        >
          <Image
            src="/faz-img-32.jpg"
            alt="Left Background"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div 
        variants={fadeInLeftToRight( 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="w-1/2 h-full relative">
          <Image
            src="/faz-map-h5.png"
            alt="Right Background"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Conteúdo */}
      <motion.div
        variants={fadeInLeftToUp( 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 w-2/3 xl:w-1/2 text-white text-center p-8 bg-black/50 m-20 rounded-lg"
      >
        <motion.h2 
            variants={fadeInLeftToUp( 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl font-bold mb-4"
        >
            Our work providing healthy foods
        </motion.h2>
        <motion.p 
            variants={fadeInLeftToUp( 0.5 )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-lg italic mb-6"
        >
          “Food for us comes from our relatives. Whether they have wings or fins or roots.
          That is how we consider food. Food has a culture. It has a history. It has relationships.”
        </motion.p>

        {/* Imagem pequena abaixo do texto */}
        <motion.div 
            variants={fadeInLeftToUp( 0.5 )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="w-32 mx-auto"
        >
          <Image
            src="/laz-rate.png"
            alt="Small Food Image"
            width={128}
            height={128}
            className="rounded-lg"
          />
        </motion.div>
        <motion.p 
            variants={fadeInLeftToUp( 0.9 )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mt-3 font-bold"
        >
            Our happy customer
        </motion.p>
        <motion.p 
            variants={fadeInLeftToUp( 1 )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="font-bold"
        >
        ⭐4.9 (3.9k Reviews)
        </motion.p>
      </motion.div>
    </section>
  );
}
