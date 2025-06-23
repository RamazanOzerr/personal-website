import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';

function Education() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { t } = useTranslation();

    const education = [
        {
            degree: t('education.degree'),
            institution: t('education.institution'),
            period: t('education.period'),
            details: t('education.details', { returnObjects: true }),
        },
    ];

    return (
        <section id="education" className="py-20 bg-gray-100" ref={ref}>
            <motion.h2 
                className="text-3xl font-bold text-teal-600 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
            >
                {t('navbar.education')}
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-10 ml-10 mr-10">
                {/* Lottie Animation */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
                    <Lottie animationData={require('../education.json')} loop={true} style={{ width: 300, height: 300 }} />
                </div>
                <div className="flex-1 w-full">
                    {education.map((edu, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white shadow-md p-6 rounded-lg mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <h3 className="text-lg font-semibold text-teal-500">{edu.degree}</h3>
                            <h4 className="text-sm text-gray-600">{edu.institution}</h4>
                            <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                            <ul className="list-disc list-inside">
                                {edu.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
