import React from 'react'
import { translate } from 'react-i18next'
import { LanguageSelector } from './LanguageSelector'
const changeLanguage = lang => {
  localStorage.setItem('i18nextLng', lang)
}
const Header = ({ t, i18n }) => (
  <header>
    <LanguageSelector
      onChangeLanguage={lang => {
        i18n.changeLanguage(lang)
        localStorage.setItem('i18nextLng', lang)
      }}
    />
  </header>
)

export default translate(['data'])(Header)
