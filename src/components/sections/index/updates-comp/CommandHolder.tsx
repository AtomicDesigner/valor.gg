import AboutCard2 from "@/components/AboutCard2";
import AboutCard from "@/components/AboutCard";
import Typewriter from 'typewriter-effect';
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
                { command: "/warn [user]", description: "Issues a formal warning to the specified user." },
                { command: "/jail [user]", description: "Temporarily restricts the specified user's access or abilities within the server." },
                { command: "/unjail [user]", description: "Releases the specified user from jail, restoring their normal access." },
                { command: "/mute [user]", description: "Prevents the specified user from speaking or sending messages in the server." },
                { command: "/unmute [user]", description: "Restores the specified user's ability to speak or send messages." },
                { command: "/verify user [user]", description: "Confirms and grants verified status to the specified user." },
                { command: "/unverify user [user]", description: "Removes verified status from the specified user." },
                { command: "/unban [user]", description: "Lifts the ban on the specified user, allowing them to rejoin the server." },
                { command: "/ban [user]", description: "Permanently or temporarily prevents the specified user from accessing the server." },
                { command: "/kick [user]", description: "Removes the specified user from the server (they can rejoin)." },
                { command: "/roleadd [user] [role]", description: "Adds the specified role to the specified user." },
                { command: "/roleremove [user] [role]", description: "Removes the specified role from the specified user." },
                { command: "/case_lookup [case ID]", description: "Retrieves information about a specific moderation case using its ID." },
                { command: "/clrbulk [amount]", description: "Clears the last 1-100 messages specified in the command." },
                { command: "/clr punish [user]", description: "Clears all punishments for the specified user." },
                { command: "/clr cases [user]", description: "Clears all moderation cases for the specified user." },
                { command: "/clr 1 punish [user] [case ID]", description: "Clears the moderation case matching the specified case ID." },
                { command: "/punishments [user]", description: "Displays the current punishments applied to the specified user." },
                { command: "/set nick [user] [nickname]", description: "Changes the nickname of the specified user." },
                { command: "/roleinfo [role]", description: "Displays information about the specified role." },
                { command: "/user info [user]", description: "Displays detailed information about the specified user." },
                { command: "/servinfo", description: "Displays information about the server." }
            ]}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard2
            title="Clanning"
            description={[
                { command: "/result [user] [stage] [level] [range]", description: "Displays the result of a recent tryout conducted with the specified person." },
                { command: "/msg [message] [reply](optional)", description: "Makes the bot say whatever you want." },
                { command: "/vouch [user]", description: "Gives a vouch to the specified user." },
                { command: "/vouches [user]", description: "Displays the number of vouches a user has received." },
                { command: "/clearvouches [user]", description: "Clears all vouches for the specified user." },
                { command: "/blast", description: "Nukes the server. (Troll Message, it's harmless lol.)" }
            ]}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard2
            title="Setup"
            description={[
                { command: "/setup channels", description: "Configures the necessary channels for the server's functionality." },
                { command: "/setup ver", description: "Sets up the verification ticket for the server. (Must be in a proper verification channel to run this command.)" },
                { command: "/setup ticket", description: "Configures the ticket system for user support." },
                { command: "/reassign verify [role]", description: "Reassigns the verification role to a different role." },
                { command: "/reassign verify channel [channel]", description: "Reassigns the verification channel to a different channel." },
                { command: "/reassign welcome channel [channel]", description: "Reassigns the welcome channel to a different channel." },
                { command: "/reassign vouch channel [channel]", description: "Reassigns the vouch channel to a different channel." },
                { command: "/reassign unverify", description: "Reassigns the unverify role to a different role." },
                { command: "/reassign vouch", description: "Reassigns the vouch role to a different role." },
                { command: "/add mod", description: "Adds a role to the moderator database." }
            ]}
            direction="left"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <AboutCard2
            title="Admin"
            description={[
                { command: "/ownerify [role]", description: "Gives the specified role full permissions in the server (Administrator)" },
                { command: "/unownerify [role]", description: "Revoked the administrative permissions granted to the role." },
            ]}
            direction="right"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
            <AboutCard
                title="Noxum ModMail."
                description="Noxum has your back with simple yet powerful commands. It's commands ranges from basic moderation to in-depth clanning features."
                direction="top"
                span={2}
                delay={0.1}
                gradient="bg-gradient-to-tl"
                
          />
            <p className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg">
              <Typewriter
                options={{
                  delay: 20,
                  strings: ["I am Noxum. A TSB (The Strongest Battlegrounds) clanning bot made to make clanning easier, developed by Valor."],
                  loop: true,
                  autoStart: true,
                  deleteSpeed: 604800000,
                }}
              />
          </p>
        </ul>
      </section>
    </>
  );
};
