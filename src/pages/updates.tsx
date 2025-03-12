import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import { GridPattern } from "@/components/GridPattern";

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
      </main>
    </>
  );
}