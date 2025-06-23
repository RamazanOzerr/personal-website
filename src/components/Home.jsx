import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    return (
        <section id="home" className="relative h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to right, #121212, #212121)' }}>
            <div className="text-center z-10">
                <motion.h1 
                    className="text-5xl font-bold"
                    style={{ color: '#1db954' }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {t('home.title')}
                </motion.h1>
                <motion.p 
                    className="mt-4 text-2xl"
                    style={{ color: '#b3b3b3' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {t('home.subtitle')}
                </motion.p>
                <motion.a 
                    href="#about" 
                    className="mt-8 inline-block px-6 py-3 rounded-md font-medium transition"
                    style={{ background: '#1db954', color: '#212121' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    onMouseOver={e => { e.currentTarget.style.background = '#b3b3b3'; e.currentTarget.style.color = '#212121'; }}
                    onMouseOut={e => { e.currentTarget.style.background = '#1db954'; e.currentTarget.style.color = '#212121'; }}
                >
                    {t('home.learnMore')}
                </motion.a>
            </div>
            {/* SVG Wave Overlay */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#212121" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>
        </section>
    );
}

export default Home;
