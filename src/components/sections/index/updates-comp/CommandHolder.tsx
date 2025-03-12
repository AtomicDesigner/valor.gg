import AboutCard2 from "@/components/AboutCard2";
import AboutCard from "@/components/AboutCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section id="about" className="max-w-4xl w-full flex flex-col mx-auto pt-44">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] }}
          viewport={{ amount: 0.1, once: true }}
        >
          Noxum Commands
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="What does Noxum offer?"
            description="Noxum has your back with simple yet powerful commands. It's commands ranges from basic moderation to in-depth clanning features."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard2
            title="Moderation"
            description={[
              { command: "!kick [user]", description: "Kicks a user from the server." },
              { command: "!ban [user]", description: "Bans a user from the server." },
            ]}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard2
            title="Clanning"
            description={[
              { command: "!clan create [name]", description: "Creates a new clan." },
              { command: "!clan invite [user]", description: "Invites a user to your clan." },
            ]}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard2
            title="Setup"
            description={[
              { command: "!setup", description: "Sets up the bot in your server." },
              { command: "!config", description: "Configures bot settings." },
            ]}
            direction="left"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <AboutCard2
            title="Admin"
            description={[
              { command: "!admin", description: "Shows admin commands." },
              { command: "!permissions [role]", description: "Sets permissions for a role." },
            ]}
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
