import AboutCard2 from "@/components/AboutCard2";
import AboutCard from "@/components/AboutCard";
import AboutCardTW from "@/components/AboutCardTW";
import ProjectCard from "@/components/ProjectCard";
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
                { command: "/purge [amount]", description: "Clears the last 1-100 messages specified in the command." },
                { command: "/clr oopsies [user]", description: "Clears all punishments for the specified user." },
                { command: "/clr cases [user]", description: "Clears all moderation cases for the specified user." },
                { command: "/clr oops [user] [case ID]", description: "Clears the moderation case matching the specified case ID." },
                { command: "/oopsies [user]", description: "Displays the current punishments applied to the specified user." },
                { command: "/set nick [user] [nickname]", description: "Changes the nickname of the specified user." },
                { command: "/roleinfo [role]", description: "Displays information about the specified role." },
                { command: "/user info [user]", description: "Displays detailed information about the specified user." },
                { command: "/servinfo", description: "Displays information about the server." }
            ]}
            direction="top"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
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
              { command: "/add mod", description: "Adds a role to the moderator database." },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" },
              { command: "/blank cmd", description: "Blank description" }
            ]}
            direction="top"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <AboutCard2
            title="Clanning"
            description={[
              { command: "<span style={{ color: 'red' }}>/create a system to start giveaways</span>", description: "Displays the result of a recent tryout conducted with the specified person." },
              { command: "/msg [message] [reply](optional)", description: "Makes the bot say whatever you want." },
              { command: "/vouch [user]", description: "Gives a vouch to the specified user." },
              { command: "/vouches [user]", description: "Displays the number of vouches a user has received." },
              { command: "/clr vouches [user]", description: "Clears all vouches for the specified user." },
              { command: "/nuke", description: "Nukes the server. (Troll Message, it's harmless lol.)" }
            ]}
            direction="top"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard2
            title="Admin"
            description={[
                { command: "/ownerify [role]", description: "Gives the specified role full permissions in the server (Administrator)" },
                { command: "/unownerify [role]", description: "Revoked the administrative permissions granted to the role." },
            ]}
            direction="top"
            span={1}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
            <AboutCardTW
            title="Noxum ModMail."
            description={
                <Typewriter
                options={{
                    delay: 12,
                    strings: [
                    "Noxum ModMail is here to make sure no one feels unheard. If you ever need help, have a question, or want to talk to staff privately, just send a DM to Noxum. It’ll automatically open a support ticket, letting our team respond quickly and keep everything organized. No stress, no confusion — just simple, direct help when you need it."
                    ],
                    loop: true,
                    autoStart: true,
                    deleteSpeed: 604800000
                }}
                />
            }
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
            />

            <ProjectCard
            title="Noxem ModMail"
            fullDescription={[
              "Noxum ModMail is a newly made Ticket System for Discord servers. It allows users to create tickets by DMing the bot and staff to respond to them.",
              "This took me a minute to make, but it's finally done.",
            ]}
            cardImage="https://imgur.com/9NjGpXM.png"
            cardDescription="Hell yea"
            media={[
              "https://imgur.com/tO18xi6.mp4"
            ]}
            myRole="Creator"
            timeline="February 2025 - Present"
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
        </ul>
      </section>
    </>
  );
};