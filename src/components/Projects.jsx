import React from 'react';
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
  return (
    <section id="projects" className="py-20" style={{ background: '#121212' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center" style={{ color: '#1db954' }}>{t('navbar.projects')}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow"
              style={{ background: '#212121', border: '1px solid #535353', color: '#b3b3b3' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold" style={{ color: '#1db954' }}>{project.title}</h3>
                  <span className="text-xs" style={{ color: '#b3b3b3' }}>{project.date}</span>
                </div>
                <div className="text-sm mb-2" style={{ color: '#b3b3b3' }}>{project.location}</div>
                <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: '#b3b3b3' }}>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  {project.tech && project.tech.map && project.tech.map((icon, i) => React.cloneElement(icon, { color: '#1db954', key: i }))}
                </div>
                <div className="flex space-x-2">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center" style={{ color: '#1db954' }}>
                      <FaGithub size={22} className="mr-1" color="#1db954" /> {t('projects.repo')}
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="ml-2 px-3 py-1 rounded-md font-medium transition text-sm" style={{ background: '#1db954', color: '#212121' }} onMouseOver={e => { e.currentTarget.style.background = '#b3b3b3'; e.currentTarget.style.color = '#212121'; }} onMouseOut={e => { e.currentTarget.style.background = '#1db954'; e.currentTarget.style.color = '#212121'; }}>
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