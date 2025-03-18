"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/variants"

export default function Offerpage() {
  return (
    <section className="bg-[url('/pizza-bg.jpg')] bg-cover bg-center text-white">
      {/* Special Offers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 font-display-main">
        
        {/* Card Principal */}
        <motion.div 
          className="relative bg-[url('/faz-img-28.jpg')] xl:h-200 bg-cover text-white p-6"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h3 
            className="text-yellow-400 text-sm mt-10 ml-10"
            variants={slideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            LIMITED TIME ONLY
          </motion.h3>
          
          <motion.h2 
            className="text-4xl font-bold font-display mt-5 ml-10 w-80"
            variants={slideUp(2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            LARGE PEPPERONI MAGNIFICO
          </motion.h2>
          
          <motion.p 
            className="text-yellow-400 text-2xl mt-2 ml-10"
            variants={slideUp(2.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            ONLY $59,00
          </motion.p>
          
          <motion.div 
            variants={slideUp(2.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Button className="mt-4 bg-green-700 hover:bg-green-600 ml-10 font-bold">
              ORDER NOW →
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards Menores */}
        <div className="grid grid-rows-2 font-display-main">
          
          <motion.div 
            className="bg-[url('/faz-img-29.jpg')] bg-cover text-white p-6"
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-2xl font-bold font-display"
              variants={slideUp(2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              LARGE SPECIALTY PIZZAS
            </motion.h2>
            
            <motion.p 
              className="text-yellow-400 text-2xl"
              variants={slideUp(2.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              $69,00
            </motion.p>
            
            <motion.p 
              className="text-sm"
              variants={slideUp(2.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              USE CODE: SPECIAL3
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-[url('/faz-img-29.jpg')] text-white p-6 font-display-main bg-cover"
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <motion.h3 
              className="text-yellow-400 text-sm"
              variants={slideUp(2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              UP TO FOUR TOPPINGS
            </motion.h3>
            
            <motion.h2 
              className="text-2xl font-bold font-display"
              variants={slideUp(2.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              DELICIOUS PIZZA BOWLS
            </motion.h2>
            
            <motion.p 
              className="text-yellow-400 text-2xl"
              variants={slideUp(2.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              STARTING AT $21,99
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
