import AboutCard from "@/components/AboutCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Noxum Commands
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="About Noxum"
            description="Noxum has your back with simple yet powerful commands. It's commands ranges from basic moderation to in-depth clanning features."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Moderation"
            description="Noxum stands out as the best choice for clanning in The Strongest Battlegrounds because it’s specifically designed to streamline every aspect of clan management. Whether you’re a seasoned clan leader or a new member, Noxum’s intuitive commands and powerful features make organizing, communicating, and managing your clan easy."
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Clanning"
            description="I’m currently in Judgements and Ethereal Legion in The Strongest Battlegrounds. While these clans provide a solid foundation for my journey, I’m always looking for ways to grow and improve. As I continue to develop my skills, I plan to join more clans in the future, collaborating with new players and expanding my influence within the game."
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard
            title="Setup"
            description="Nope, this bot has been fully developed by Valor (@kxyoshii). I have been working on this bot for a while now and I am proud of the progress I have made. I have learned a lot from this project and I am excited to see where it goes in the future. Below you'll find the tech I used to develop this bot."
            direction="left"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
                    <AboutCard
            title="Admin"
            description="Nope, this bot has been fully developed by Valor (@kxyoshii). I have been working on this bot for a while now and I am proud of the progress I have made. I have learned a lot from this project and I am excited to see where it goes in the future. Below you'll find the tech I used to develop this bot."
            direction="right"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
        </ul>
      </section>
    </>
  );
}
