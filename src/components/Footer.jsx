import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="py-6 mt-20" style={{ background: '#212121', color: '#b3b3b3', borderTop: '1px solid #535353' }}>
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                <p>{t('footer.business')}</p>
            </div>
        </footer>
    );
}

export default Footer;
