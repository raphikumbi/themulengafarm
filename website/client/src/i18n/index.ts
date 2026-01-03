import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            de: { translation: deTranslation },
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React escapes by default
        },
        react: {
            useSuspense: false, // optional
        },
    });

export default i18n;
