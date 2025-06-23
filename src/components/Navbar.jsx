import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (route, sectionId) => {
        navigate(route); // Navigate to the correct route
        if (sectionId) {
            // Use react-scroll to scroll to the section
            setTimeout(() => {
                document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        toggleMenu(); // Close the menu
    };

    const navItems = [
        { name: t('navbar.home'), route: '/', sectionId: 'home' },
        { name: t('navbar.about'), route: '/', sectionId: 'about' },
        { name: t('navbar.education'), route: '/', sectionId: 'education' },
        { name: t('navbar.experience'), route: '/', sectionId: 'experience' },
        { name: t('navbar.projects'), route: '/', sectionId: 'projects' },
        { name: t('navbar.skills'), route: '/', sectionId: 'skills' },
        { name: t('navbar.contact'), route: '/', sectionId: 'contact' },
    ];

    const handleLanguageSwitch = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
    };

    return (
        <nav className="fixed w-full z-10 top-0 shadow-lg" style={{ background: '#212121', borderBottom: '1px solid #535353' }}>
            <div className="container mx-auto flex items-center justify-between p-4">
                <NavLink 
                    to="/" 
                    className="text-2xl font-bold cursor-pointer"
                    style={{ color: '#1db954' }}
                    onClick={() => handleNavClick('/', 'home')}
                >
                    Ramazan Ozer
                </NavLink>
                <div className="flex items-center">
                    <div className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item, index) => (
                            item.route === '/blog' ? (
                                <NavLink 
                                    key={index} 
                                    to={item.route} 
                                    className="text-lg transition cursor-pointer"
                                    style={{ color: '#b3b3b3' }}
                                    onMouseOver={e => e.currentTarget.style.color = '#1db954'}
                                    onMouseOut={e => e.currentTarget.style.color = '#b3b3b3'}
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </NavLink>
                            ) : (
                                <span 
                                    key={index} 
                                    className="text-lg transition cursor-pointer"
                                    style={{ color: '#b3b3b3' }}
                                    onMouseOver={e => e.currentTarget.style.color = '#1db954'}
                                    onMouseOut={e => e.currentTarget.style.color = '#b3b3b3'}
                                    onClick={() => handleNavClick(item.route, item.sectionId)}
                                >
                                    {item.name}
                                </span>
                            )
                        ))}
                        {/* Language Switcher - Desktop only */}
                        <button
                            onClick={handleLanguageSwitch}
                            className="ml-4 px-3 py-1 rounded transition text-sm font-semibold"
                            style={{ background: '#1db954', color: '#212121' }}
                            onMouseOver={e => e.currentTarget.style.background = '#b3b3b3'}
                            onMouseOut={e => e.currentTarget.style.background = '#1db954'}
                        >
                            {i18n.language === 'en' ? 'TR' : 'EN'}
                        </button>
                    </div>
                    {/* Hamburger + Language Switcher for Mobile only */}
                    <div className="md:hidden flex items-center space-x-2 ml-2">
                        <button
                            onClick={handleLanguageSwitch}
                            className="px-3 py-1 bg-primary text-black rounded hover:bg-green-400 transition text-sm font-semibold"
                        >
                            {i18n.language === 'en' ? 'TR' : 'EN'}
                        </button>
                        <button onClick={toggleMenu} className="text-primary focus:outline-none">
                            {isOpen ? (
                                <XIcon className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" style={{ background: '#212121' }}>
                    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item, index) => (
                            item.route === '/blog' ? (
                                <NavLink 
                                    key={index} 
                                    to={item.route} 
                                    className="block text-lg transition cursor-pointer"
                                    style={{ color: '#b3b3b3' }}
                                    onMouseOver={e => e.currentTarget.style.color = '#1db954'}
                                    onMouseOut={e => e.currentTarget.style.color = '#b3b3b3'}
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </NavLink>
                            ) : (
                                <span 
                                    key={index} 
                                    className="block text-lg transition cursor-pointer"
                                    style={{ color: '#b3b3b3' }}
                                    onMouseOver={e => e.currentTarget.style.color = '#1db954'}
                                    onMouseOut={e => e.currentTarget.style.color = '#b3b3b3'}
                                    onClick={() => handleNavClick(item.route, item.sectionId)}
                                >
                                    {item.name}
                                </span>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
