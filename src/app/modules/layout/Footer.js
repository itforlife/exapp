import React from 'react'
import { translate } from 'react-i18next'

const Footer = ({ t }) => <footer>{t('footer.headline')}</footer>

export default translate(['data'])(Footer)
