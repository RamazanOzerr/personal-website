import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="py-20" style={{ background: '#121212' }}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold" style={{ color: '#1db954' }}>{t('contact.title')}</h2>
                <form className="mt-8 max-w-md mx-auto" style={{ background: '#212121', border: '1px solid #535353', borderRadius: '1rem', padding: '2rem' }}>
                    <input type="text" name="name" placeholder={t('contact.name')} className="w-full p-3 mb-4" style={{ background: '#121212', color: '#b3b3b3', border: '1px solid #535353', borderRadius: '0.5rem' }} required />
                    <input type="email" name="email" placeholder={t('contact.email')} className="w-full p-3 mb-4" style={{ background: '#121212', color: '#b3b3b3', border: '1px solid #535353', borderRadius: '0.5rem' }} required />
                    <textarea name="message" rows="5" placeholder={t('contact.message')} className="w-full p-3 mb-4" style={{ background: '#121212', color: '#b3b3b3', border: '1px solid #535353', borderRadius: '0.5rem' }} required></textarea>
                    <button type="submit" className="px-6 py-3 rounded-lg font-medium transition" style={{ background: '#1db954', color: '#212121' }} onMouseOver={e => { e.currentTarget.style.background = '#212121'; e.currentTarget.style.color = '#1db954'; }} onMouseOut={e => { e.currentTarget.style.background = '#1db954'; e.currentTarget.style.color = '#212121'; }}>{t('contact.send')}</button>
                </form>
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="https://github.com/RamazanOzerr" className="transition" style={{ color: '#1db954' }} onMouseOver={e => e.currentTarget.style.color = '#212121'} onMouseOut={e => e.currentTarget.style.color = '#1db954'}>
                        <FaGithub size={48} />
                    </a>
                    <a href="https://www.linkedin.com/in/ramazanozerr" className="transition" style={{ color: '#1db954' }} onMouseOver={e => e.currentTarget.style.color = '#212121'} onMouseOut={e => e.currentTarget.style.color = '#1db954'}>
                        <FaLinkedin size={48} />
                    </a>
                    <a href="https://www.instagram.com/ramzn_rz/" className="transition" style={{ color: '#1db954' }} onMouseOver={e => e.currentTarget.style.color = '#212121'} onMouseOut={e => e.currentTarget.style.color = '#1db954'}>
                        <SiInstagram size={48} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
