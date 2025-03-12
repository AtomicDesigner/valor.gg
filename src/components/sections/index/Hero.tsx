import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import SocialIcon from "@/components/SocialIcon";

export default function Hero({ inView, descRef }: { inView: boolean, descRef: any }) {
  return (
    <>
      <section className="max-w-4xl w-full flex flex-col mx-auto pt-44">
        <motion.div
          className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
          initial={{ transform: 'translateY(30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary animate-progress"></div>
          <h2 className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
            Hello, I am Noxum<span className="font-bold text-xl brightness-50 italic sm:inline flex"> best bot btw</span>
          </h2>
          <p className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg">
            {inView &&
              <Typewriter
                options={{
                  delay: 20,
                  strings: ["I am Noxum. A TSB (The Strongest Battlegrounds) clanning bot made to make clanning easier, developed by Valor."],
                  loop: true,
                  autoStart: true,
                  deleteSpeed: 604800000,
                }}
              />}
          </p>
          <ul className="flex flex-row flex-wrap gap-2 mt-2">
            <SocialIcon
              url="https://discord.gg/UPXtw8PrvZ"
              icon={<img src="https://imgur.com/sHbGLC0.png" alt="icon" className="h-7 w-7" />}
              delay={0.3}
            />
            <SocialIcon
              url="https://www.roblox.com/users/241320492/profile"
              icon={<img src="https://logos-world.net/wp-content/uploads/2020/11/Roblox-Icon-Logo-2018.png" alt="icon" className="h-7 w-7" />}
              delay={0.3}
            />
            <SocialIcon
              url="https://discordapp.com/users/376769581093617665"
              icon={<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fdiscord-logo-transparent-gray-3.png&f=1&nofb=1&ipt=e066a376b2754d225b44a8dc59d79198ea2d2a135a534df539facc1c70fe8c60&ipo=images" alt="icon" className="h-7 w-7" />}
              delay={0.3}
            />
          </ul>
        </motion.div>
      </section>
    </>
  );
}
