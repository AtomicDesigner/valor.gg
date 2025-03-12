import AboutCard from "@/components/AboutCard";
import { Presence, Tech } from "../../../../typings";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  let frontendTech: Tech[] = [
    { title: "Noxum", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/sHbGLC0.png" />, link: "https://discord.gg/UPXtw8PrvZ" },
    { title: "Noxum", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/sHbGLC0.png" />, link: "https://discord.gg/UPXtw8PrvZ" },
    { title: "Noxum", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/sHbGLC0.png" />, link: "https://discord.gg/UPXtw8PrvZ" },
    { title: "Noxum", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/sHbGLC0.png" />, link: "https://discord.gg/UPXtw8PrvZ" },
    { title: "Noxum", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/sHbGLC0.png" />, link: "https://discord.gg/UPXtw8PrvZ" },
    { title: "Noxum", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/sHbGLC0.png" />, link: "https://discord.gg/UPXtw8PrvZ" },
    { title: "Noxum", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/sHbGLC0.png" />, link: "https://discord.gg/UPXtw8PrvZ" },
  ]

  let backendTech: Tech[] = [
    { title: "Judgements", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/EHGfp6r.png" />, link: "https://discord.gg/judgements" },
    { title: "EL", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/TmzqdBy.gif" />, link: "https://discord.gg/RUuPQTxt5r" },
    { title: "Judgements", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/EHGfp6r.png" />, link: "https://discord.gg/judgements" },
    { title: "EL", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/TmzqdBy.gif" />, link: "https://discord.gg/RUuPQTxt5r" },
    { title: "Judgements", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/EHGfp6r.png" />, link: "https://discord.gg/judgements" },
    { title: "EL", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/TmzqdBy.gif" />, link: "https://discord.gg/RUuPQTxt5r" },
    { title: "Judgements", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/EHGfp6r.png" />, link: "https://discord.gg/judgements" },
    { title: "EL", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/TmzqdBy.gif" />, link: "https://discord.gg/RUuPQTxt5r" },
    { title: "Judgements", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/EHGfp6r.png" />, link: "https://discord.gg/judgements" },
    { title: "EL", icon: <img alt="" draggable={true} className="h-6" src="https://imgur.com/TmzqdBy.gif" />, link: "https://discord.gg/RUuPQTxt5r" },
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "NPM", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />, link: "https://www.npmjs.com/" },
    { title: "Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "DiscordJS", icon: <img alt="" draggable={false} className="h-6" src="https://imgur.com/4OC6TRC.png" />, link: "https://discord.js.org/" },
    { title: "Vercel", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "NPM", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />, link: "https://www.npmjs.com/" },
    { title: "Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "DiscordJS", icon: <img alt="" draggable={false} className="h-6" src="https://imgur.com/4OC6TRC.png" />, link: "https://discord.js.org/" },
    { title: "Vercel", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
  ]

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
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="About Noxum"
            description="Noxum is the ultimate Discord bot for anything related to clanning in The Strongest Battlegrounds. Whether you're forming a new clan, managing current members, or organizing events, Noxum has you covered with its powerful features and seamless integration. It allows you to effortlessly create and manage clans, assign roles, track stats, and even handle recruitment and promotions."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="You ask, why Noxum?"
            description="Noxum stands out as the best choice for clanning in The Strongest Battlegrounds because it’s specifically designed to streamline every aspect of clan management. Whether you’re a seasoned clan leader or a new member, Noxum’s intuitive commands and powerful features make organizing, communicating, and managing your clan easy."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Clans I'm in"
            description="I’m currently in Judgements and Ethereal Legion in The Strongest Battlegrounds. While these clans provide a solid foundation for my journey, I’m always looking for ways to grow and improve. As I continue to develop my skills, I plan to join more clans in the future, collaborating with new players and expanding my influence within the game."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard
            title="Assistance?"
            description="Nope, this bot has been fully developed by Valor (@kxyoshii). I have been working on this bot for a while now and I am proud of the progress I have made. I have learned a lot from this project and I am excited to see where it goes in the future. Below you'll find the tech I used to develop this bot."
            tech={otherTech}
            direction="bottom"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
        </ul>
      </section>
    </>
  );
}
