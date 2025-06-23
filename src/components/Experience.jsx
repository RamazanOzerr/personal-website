import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';

function Experience() {
    const { t } = useTranslation();
    return (
        <section id="experience" className="py-20" style={{ backgroundColor: '#fafafa' }}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">{t('navbar.experience')}</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    {/* Lottie Animation */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <Lottie animationData={require('../work.json')} loop={true} style={{ width: 300, height: 300 }} />
                    </div>
                    <div className="flex-1 w-full">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(0, 150, 136)', color: '#ffffff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 150, 136)' }}
                                date={<span style={{ color: 'rgb(0, 150, 136)' }}>{t('experience.intern.date')}</span>}
                                iconStyle={{ background: 'rgb(0, 150, 136)', color: '#ffffff' }}
                                icon={<FaBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.intern.title')}</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.intern.company')}</h4>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={<span style={{ color: 'rgb(33, 150, 243)' }}>{t('experience.parttime1.date')}</span>}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
                                icon={<FaBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ color: '#ffffff' }}>{t('experience.parttime1.title')}</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ffffff' }}>{t('experience.parttime1.company')}</h4>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
