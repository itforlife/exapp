/* global fetch */
import 'isomorphic-fetch'
import i18next from 'i18next'

export async function getResources(lng, baseUrl) {
  const response = await fetch(`${baseUrl}/${lng}.json`)
  const json = await response.json()

  return {
    [lng]: {
      data: json,
    },
  }
}

export const initLang = (lng, resources) =>
  i18next.init({
    lng,
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
    resources,
  })
