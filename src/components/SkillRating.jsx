import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiKotlin, SiDart } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';

function SkillRating() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { t } = useTranslation();

    const skills = [
        { name: t('skills.java'), icon: <FaJava size={30} color="#007991" /> },
        { name: t('skills.python'), icon: <FaPython size={30} color="#007991" /> },
        { name: t('skills.htmlcss'), icon: (
            <div className="flex justify-center">
                <FaHtml5 size={30} color="#e44d26" />
                <FaCss3Alt size={30} color="#1572b6" className="ml-2" />
            </div>
        ) },
        { name: t('skills.javascript'), icon: <FaJsSquare size={30} color="#007991" /> },
        { name: t('skills.sql'), icon: <FaDatabase size={30} color="#007991" /> },
        { name: t('skills.kotlin'), icon: <SiKotlin size={30} color="#7F52FF" /> },
        { name: t('skills.dart'), icon: <SiDart size={30} color="#0175C2" /> },
    ];

    // Duplicate skills for seamless marquee
    const marqueeSkills = [...skills, ...skills];

    // Calculate drag constraints (allow dragging left/right by the width of the row)
    // We'll use a ref to the container for dynamic constraints
    const marqueeRef = React.useRef(null);

    return (
        <section ref={ref} id="skills-rating" className="py-20" style={{ backgroundColor: '#fafafa' }}>
            <div className="container mx-auto text-center">
                <motion.h2 
                    className="text-3xl font-bold text-teal-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    {t('navbar.skills')}
                </motion.h2>
                <div className="relative mt-10 w-full overflow-x-hidden" ref={marqueeRef}>
                    <motion.div
                        className="flex space-x-8 cursor-grab active:cursor-grabbing"
                        style={{ width: 'max-content' }}
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 18,
                            ease: 'linear',
                        }}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 0 }}
                    >
                        {marqueeSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="w-32 bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
                            >
                                <div className="mb-2 flex justify-center">
                                    {skill.icon}
                                </div>
                                <p className="mt-2 text-lg font-medium whitespace-nowrap">{skill.name}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default SkillRating;
