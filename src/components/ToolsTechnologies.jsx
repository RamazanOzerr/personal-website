import React, { useState } from 'react';
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiMysql, SiMicrosoftsqlserver, SiFirebase, SiAndroidstudio, SiFlutter, SiFigma, SiPostman } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { MdStorage } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ToolsTechnologies() {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(null);
    const green = '#1db954'; // Spotify green
    const darkGray = '#212121';
    const sectionBg = '#121212';
    const borderGray = '#535353';
    const textGray = '#b3b3b3';
    const tools = [
        { name: 'Spring Boot', icon: (color) => <SiSpringboot size={30} color={color} /> },
        { name: 'React.js', icon: (color) => <FaReact size={30} color={color} /> },
        { name: 'Docker', icon: (color) => <FaDocker size={30} color={color} /> },
        { name: 'Kubernetes', icon: (color) => <SiKubernetes size={30} color={color} /> },
        { name: 'Git', icon: (color) => <DiGit size={30} color={color} /> },
        { name: 'MySQL', icon: (color) => <SiMysql size={30} color={color} /> },
        { name: 'MsSQL', icon: (color) => <SiMicrosoftsqlserver size={30} color={color} /> },
        { name: 'PL/SQL', icon: (color) => <MdStorage size={30} color={color} /> },
        { name: 'Postman', icon: (color) => <SiPostman size={30} color={color} /> },
        { name: 'Firebase', icon: (color) => <SiFirebase size={30} color={color} /> },
        { name: 'Android Studio', icon: (color) => <SiAndroidstudio size={30} color={color} /> },
        { name: 'Flutter', icon: (color) => <SiFlutter size={30} color={color} /> },
        { name: 'Figma', icon: (color) => <SiFigma size={30} color={color} /> },
    ];

    return (
        <section id="tools-technologies" className="py-20" style={{ background: sectionBg }}>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center" style={{ color: green }}>{t('tools.title')}</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 mr-10 ml-10">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-4 rounded-lg shadow-md"
                            style={{
                                background: darkGray,
                                border: `1px solid ${borderGray}`,
                                color: textGray,
                            }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: green,
                                color: darkGray,
                                transition: { duration: 0.3 },
                            }}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="flex justify-center mb-2">
                                {tool.icon(hovered === index ? darkGray : green)}
                            </div>
                            <p className="text-lg font-medium" style={{ color: textGray }}>{tool.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ToolsTechnologies;
