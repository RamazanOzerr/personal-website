import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate } from 'react-icons/fa';

function Certifications() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const certifications = [
        {
            title: 'Problem Solving (Intermediate)',
            issuer: 'Hackerrank',
            year: '2023'
        },
        {
            title: 'Java (Basic)',
            issuer: 'Hackerrank',
            year: '2023'
        },
        {
            title: 'Software Engineer Intern',
            issuer: 'Hackerrank',
            year: '2023'
        },
        {
            title: 'SQL (Intermediate)',
            issuer: 'DataCamp',
            year: '2024'
        }
    ];

    return (
        <section ref={ref} id="certifications" className="py-20 bg-gray-50">
            <div className="container mx-auto">
                <motion.h2 
                    className="text-3xl font-bold text-teal-600 text-center mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    Certifications
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-4">
                                <FaCertificate className="text-teal-500 text-2xl mr-2" />
                                <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                            </div>
                            <div className="text-sm text-gray-600">
                                <p>{cert.issuer}</p>
                                <p>{cert.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications; 