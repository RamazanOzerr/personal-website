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

    const handleTouchStart = (index, e) => {
        e.preventDefault();
        setHovered(current => current === index ? null : index);
    };

    const tools = [
        { name: 'Spring Boot', icon: (isHovered) => <SiSpringboot size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'React.js', icon: (isHovered) => <FaReact size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Docker', icon: (isHovered) => <FaDocker size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Kubernetes', icon: (isHovered) => <SiKubernetes size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Git', icon: (isHovered) => <DiGit size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'MySQL', icon: (isHovered) => <SiMysql size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'MsSQL', icon: (isHovered) => <SiMicrosoftsqlserver size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'PL/SQL', icon: (isHovered) => <MdStorage size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Postman', icon: (isHovered) => <SiPostman size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Firebase', icon: (isHovered) => <SiFirebase size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Android Studio', icon: (isHovered) => <SiAndroidstudio size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Flutter', icon: (isHovered) => <SiFlutter size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
        { name: 'Figma', icon: (isHovered) => <SiFigma size={30} className={isHovered ? 'text-black' : 'text-primary'} /> },
    ];

    return (
        <section id="tools-technologies" className="pt-10 pb-20 bg-dark">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary">{t('tools.title')}</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 mr-10 ml-10">
                    {tools.map((tool, index) => {
                        const isHovered = hovered === index;
                        return (
                            <motion.div
                                key={index}
                                className={`text-center p-4 rounded-lg shadow-md cursor-pointer border border-border-gray transition-transform duration-300 transform hover:scale-110 ${
                                    isHovered ? 'bg-primary text-black' : 'bg-light-dark text-text-gray'
                                }`}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                onTouchStart={(e) => handleTouchStart(index, e)}
                            >
                                <div className="flex justify-center mb-2">
                                    {tool.icon(isHovered)}
                                </div>
                                <p className="text-lg font-medium">
                                    {tool.name}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ToolsTechnologies;
