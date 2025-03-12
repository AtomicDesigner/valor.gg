import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Loader from "@/components/sections/index/updates-comp/Loading";
import AnimatedChecklist from "@/components/sections/index/updates-comp/AnimatedChecklist";
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
        <Loader inView={inView} descRef={ref} />
        <AnimatedChecklist />
      </main>
      <div className="mx-auto pt-10 space-y-56">
        hello
      </div>
    </>
  );
}