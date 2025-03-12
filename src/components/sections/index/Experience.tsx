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
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://e-z.gg"
                        title="E-Z Services"
                        fullDescription={[
                            "In this game, I consistently outperform others with my strategic thinking, skill, and dedication. I have a strong understanding of the game's mechanics and am able to adapt to new situations quickly. I am also able to work well with others and communicate effectively to achieve our goals.",
                            "While some players may struggle to understand the complexities of the gameplay, I’ve mastered the mechanics and tactics that make me a formidable opponent.",
                            "My experience, quick reflexes, and ability to adapt under pressure give me the edge over others, proving that hard work and focus truly set me apart from the rest.",
                            "Here are some of my victims who have fallen to my superior gameplay and tactics.",
                        ]}
                        cardImage="https://imgur.com/cXLjh4D.gif"
                        cardDescription="While running E-Z I have learned about the entire process of developing a website and pushing it securely into production. E-Z as a whole has gained 17,000+ users over the years and has been a great learning experience for me. I am responsible for all of the frontend development and a good chunk of the backend development."
                        media={[
                            "https://imgur.com/l3IB8mE.gif",
                            "https://imgur.com/EyRuPlG.gif",
                            "https://imgur.com/aOvGmut.gif",
                            "https://imgur.com/TI8XOph.gif",
                            "https://imgur.com/COijGGK.gif",
                            "https://imgur.com/zKnZAio.gif",
                            "https://imgur.com/bjGVBrw.gif",
                        ]}
                        myRole="TSB God"
                        timeline="February 2024 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        url="https://out.so"
                        title="Out.so"
                        fullDescription={[
                            "While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also developed backend services for efficient handling, importing, and uploading of social media content, integrating with third-party APIs.",
                            "Out is a service that allows content creators to easily upload content between all of their platforms. Creators can upload their video to Out and schedule it to be posted on all of their social media platforms at once. Out also allows creators to import videos from existing platforms and schedule them to be posted on other platforms.",
                        ]}
                        cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/xt9q5o0l.png"
                        cardDescription="While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also developed backend services for efficient handling, importing, and uploading of social media content, integrating with third-party APIs."
                        media={["https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/tcjt9h7x.mp4"]}
                        myRole="Full-stack Developer"
                        timeline="September 2024 - Present"
                        delay={0.2}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
