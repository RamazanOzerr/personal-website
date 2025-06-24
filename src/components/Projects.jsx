import React, { useState, useEffect } from 'react';
import { FaGithub, FaAndroid, FaCloud, FaBook, FaUsers } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiRedis, SiReact, SiVueDotJs, SiMysql, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'ExamiNation - Android-Based Social Learning Platform',
    location: 'Izmir, Turkey',
    date: 'Jul 2024 – June 2025',
    description: [
      'A collaborative Android app for university exam preparation, featuring microservices, AI-powered recommendations, and a modern UI.'
    ],
    tech: [
      <FaAndroid key="android" size={22} />, <SiSpringboot key="spring" size={22} />, <SiPostgresql key="postgres" size={22} />, <SiRedis key="redis" size={22} />, <FaCloud key="cloud" size={22} />
    ],
    link: null,
    demo: 'https://youtu.be/udNuJvmDvvk'
  },
  {
    title: 'Conference Management System',
    location: 'Izmir, Turkey',
    date: 'Feb 2024 – June 2024',
    description: [
      'A full-stack web platform for managing conferences, including paper submission, reviews, and participant registration.'
    ],
    tech: [
      <SiSpringboot key="spring" size={22} />, <SiMysql key="mysql" size={22} />, <SiFirebase key="firebase" size={22} />, <FaUsers key="users" size={22} />
    ],
    link: 'https://github.com/berkayblm/Conference_Management_System'
  },
  {
    title: 'Library App',
    location: 'Izmir, Turkey',
    date: 'Feb 2023 – Apr 2023',
    description: [
      'An Android library app with user authentication, book listing, and PDF viewing, backed by a Spring Boot server.'
    ],
    tech: [
      <FaAndroid key="android" size={22} />, <SiSpringboot key="spring" size={22} />, <FaBook key="book" size={22} />
    ],
    link: 'https://github.com/berkayblm/spring-library-hibernate-crud'
  }
];

function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });
  const [hovered, setHovered] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const green = '#1db954';
  const darkGray = '#212121';
  const borderGray = '#535353';
  const textGray = '#b3b3b3';

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleInteraction = (idx) => {
    if (isTouchDevice) {
      setHovered(hovered === idx ? null : idx);
    } else {
      setHovered(idx);
    }
  };

  return (
    <section id="projects" className="py-20" style={{ background: '#121212' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center" style={{ color: green }}>{t('navbar.projects')}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl shadow-lg p-6 flex flex-col justify-between"
              style={{ 
                background: darkGray, 
                border: `1px solid ${borderGray}`, 
                color: textGray,
                cursor: 'pointer'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={!isTouchDevice ? {
                scale: 1.05,
                backgroundColor: green,
                transition: { duration: 0.3 },
              } : {}}
              animate={hovered === idx ? {
                scale: 1.05,
                backgroundColor: green,
                transition: { duration: 0.3 },
              } : {
                scale: 1,
                backgroundColor: darkGray,
                transition: { duration: 0.3 },
              }}
              onClick={() => isTouchDevice && handleInteraction(idx)}
              onMouseEnter={() => !isTouchDevice && handleInteraction(idx)}
              onMouseLeave={() => !isTouchDevice && setHovered(null)}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold" style={{ color: hovered === idx ? '#000000' : green }}>{project.title}</h3>
                  <span className="text-xs" style={{ color: hovered === idx ? '#000000' : textGray }}>{project.date}</span>
                </div>
                <div className="text-sm mb-2" style={{ color: hovered === idx ? '#000000' : textGray }}>{project.location}</div>
                <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: hovered === idx ? '#000000' : textGray }}>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  {project.tech && project.tech.map && project.tech.map((icon, i) => React.cloneElement(icon, { color: hovered === idx ? '#000000' : green, key: i }))}
                </div>
                <div className="flex space-x-2">
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center" 
                      style={{ color: hovered === idx ? '#000000' : green }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={22} className="mr-1" color={hovered === idx ? '#000000' : green} /> {t('projects.repo')}
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-2 px-3 py-1 rounded-md font-medium transition text-sm"
                      style={{ 
                        background: hovered === idx ? '#000000' : green, 
                        color: hovered === idx ? green : '#000000',
                        border: hovered === idx ? `1px solid #000000` : 'none'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 