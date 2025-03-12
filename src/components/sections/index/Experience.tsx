import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Developers
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://discord.gg/judgements"
                        title="The Sigma Valor"
                        fullDescription={[
                            "In this game, I consistently outperform others with my strategic thinking, skill, and dedication. I have a strong understanding of the game's mechanics and am able to adapt to new situations quickly. I am also able to work well with others and communicate effectively to achieve our goals.",
                            "While some players may struggle to understand the complexities of the gameplay, I’ve mastered the mechanics and tactics that make me a formidable opponent.",
                            "My experience, quick reflexes, and ability to adapt under pressure give me the edge over others, proving that hard work and focus truly set me apart from the rest.",
                        ]}
                        cardImage="https://imgur.com/cXLjh4D.gif"
                        cardDescription="Here are some of my victims who have fallen to my superior gameplay and tactics."
                        media={[
                            "https://imgur.com/l3IB8mE.gif",
                            "https://imgur.com/EyRuPlG.gif",
                            "https://imgur.com/aOvGmut.gif",
                            "https://imgur.com/TI8XOph.gif",
                            "https://imgur.com/COijGGK.gif",
                            "https://imgur.com/zKnZAio.gif",
                            "https://imgur.com/bjGVBrw.gif",
                        ]}
                        myRole="Scripter, designer, everything bruh."
                        timeline="February 2024 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}