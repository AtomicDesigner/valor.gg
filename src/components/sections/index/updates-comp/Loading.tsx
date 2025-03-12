import { motion } from "framer-motion";
import { useState, useEffect } from "react";

let perc: number = 35;

export default function Hero({
  inView,
  descRef,
}: {
  inView: boolean;
  descRef: any;
}) {
  return (
    <>
      <section className="max-w-4xl w-full flex flex-col mx-auto pt-10 absolute top-32 left-0 right-0">
        <motion.div
          className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
          initial={{ transform: "translateY(30px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.39, 0.21, 0.12, 0.96],
          }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
        >
          <h2 className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
            Next Update Progress:
          </h2>
          <div className="mt-6 w-full bg-gray-700 rounded-full h-4 relative bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background">
            <div
              className="bg-white h-4 rounded-full"
              style={{ width: `${perc}%` }}
            ></div>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 text-white font-bold">
              {perc}%
            </span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
