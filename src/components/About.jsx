import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCertificate, FaUser, FaStar, FaCheckCircle, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-20" style={{ backgroundColor: '#121212' }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 px-6">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0 mb-8 md:mb-0">
                    <div className="w-40 h-40 rounded-full flex items-center justify-center shadow-lg border-4" style={{ background: 'linear-gradient(135deg, #1db954, #212121)', borderColor: '#1db954' }}>
                        <FaUser className="text-7xl" style={{ color: '#1db954' }} />
                    </div>
                </div>
                {/* Info Card */}
                <div className="rounded-2xl shadow-xl p-8 flex-1" style={{ background: '#212121', color: '#b3b3b3', border: '1px solid #535353' }}>
                    <h2 className="text-4xl font-extrabold mb-2" style={{ color: '#1db954' }}>{t('about.name')}</h2>
                    <p className="text-lg mb-4">{t('about.role')}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <span className="flex items-center"><FaEnvelope className="mr-2" style={{ color: '#1db954' }} /> ozerramazan991@gmail.com</span>
                        <span className="flex items-center"><FaPhone className="mr-2" style={{ color: '#1db954' }} /> +90 531 722 65 48</span>
                        <span className="flex items-center"><FaMapMarkerAlt className="mr-2" style={{ color: '#1db954' }} /> {t('about.location')}</span>
                    </div>
                    <p className="mb-4">
                        {t('about.description')}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                        {t('about.skills', { returnObjects: true })[0] && (
                            <span className="flex items-center"><FaCheckCircle className="mr-2" style={{ color: '#1db954' }} /> {t('about.skills', { returnObjects: true })[0]}</span>
                        )}
                    </div>
                    {/* Languages Section */}
                    {t('about.languages') && (
                        <div className="flex flex-wrap gap-4 mb-4">
                            <span className="flex items-center"><FaGlobe className="mr-2" style={{ color: '#1db954' }} /> {t('about.languages')}</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default About;
