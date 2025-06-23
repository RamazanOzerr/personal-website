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
    const [hovered, setHovered] = React.useState(null);
    const skills = [
        { name: t('skills.java'), icon: (color) => <FaJava size={30} color={color} /> },
        { name: t('skills.python'), icon: (color) => <FaPython size={30} color={color} /> },
        { name: t('skills.html'), icon: (color) => <FaHtml5 size={30} color={color} /> },
        { name: t('skills.css'), icon: (color) => <FaCss3Alt size={30} color={color} /> },
        { name: t('skills.javascript'), icon: (color) => <FaJsSquare size={30} color={color} /> },
        { name: t('skills.sql'), icon: (color) => <FaDatabase size={30} color={color} /> },
        { name: t('skills.kotlin'), icon: (color) => <SiKotlin size={30} color={color} /> },
        { name: t('skills.dart'), icon: (color) => <SiDart size={30} color={color} /> },
    ];

    // Duplicate skills for seamless marquee
    const marqueeSkills = [...skills, ...skills];

    // Calculate drag constraints (allow dragging left/right by the width of the row)
    // We'll use a ref to the container for dynamic constraints
    const marqueeRef = React.useRef(null);

    return (
        <section ref={ref} id="skills-rating" className="py-20" style={{ backgroundColor: '#121212' }}>
            <div className="container mx-auto text-center">
                <motion.h2 
                    className="text-3xl font-bold"
                    style={{ color: '#1db954' }}
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
                                className="w-32 p-4 rounded-lg shadow-md flex flex-col items-center justify-center border"
                                style={{
                                    background: hovered === index ? '#1db954' : '#212121',
                                    border: '1px solid #535353',
                                    color: hovered === index ? '#212121' : '#b3b3b3',
                                    transition: 'background 0.3s, color 0.3s',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="mb-2 flex justify-center">
                                    {typeof skill.icon === 'function' ? skill.icon(hovered === index ? '#212121' : '#1db954') : skill.icon}
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
