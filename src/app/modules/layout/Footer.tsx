import * as React from 'react'
import { translate } from 'react-i18next'

const Footer = ({ t }) => <footer>{t('layout.footerText')}</footer>

export default translate(['data'])(Footer)
