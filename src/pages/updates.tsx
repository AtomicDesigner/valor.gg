import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Experience from "@/components/sections/index/Experience";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden px-6">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className='z-[-5]'
        />
        <Hero inView={inView} descRef={ref} />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

const LoadingBar: React.FC = () => {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5; // Increment progress by 5
        });
      }, 100); // Updates every 100ms
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

export { LoadingBar };