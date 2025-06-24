import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="pt-20 pb-10 bg-dark">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary">{t('contact.title')}</h2>
                <div className="mt-8">
                    <div className="flex justify-center space-x-6">
                        <a href="mailto:ozerramazan991@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-light-dark rounded-full transition-transform transform hover:scale-110 duration-300">
                            <FaEnvelope size={32} className="text-primary" />
                        </a>
                        <a href="https://github.com/RamazanOzerr" target="_blank" rel="noopener noreferrer" className="p-4 bg-light-dark rounded-full transition-transform transform hover:scale-110 duration-300">
                            <FaGithub size={32} className="text-primary" />
                        </a>
                        <a href="https://www.linkedin.com/in/ramazanozerr" target="_blank" rel="noopener noreferrer" className="p-4 bg-light-dark rounded-full transition-transform transform hover:scale-110 duration-300">
                            <FaLinkedin size={32} className="text-primary" />
                        </a>
                        <a href="https://www.instagram.com/ramzn_rz/" target="_blank" rel="noopener noreferrer" className="p-4 bg-light-dark rounded-full transition-transform transform hover:scale-110 duration-300">
                            <SiInstagram size={32} className="text-primary" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
