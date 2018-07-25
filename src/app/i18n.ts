import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'

const i18nOptions = {
    backend: {
        loadPath: 'static/i18n/{{lng}}.json',
    },
    fallbackLng: 'en_EN',
    defaultNS: 'data',
    ns: 'data',
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
}

export const i18n = i18next

// for browser use xhr backend to load translations and browser lng detector
if (typeof process.browser !== 'undefined') {
    i18n.use(Backend)
        // .use(Cache)
        .use(LanguageDetector)
}

// initialize if not already initialized
if (!i18n.isInitialized) {
    i18n.init(i18nOptions)
}
