import React from 'react'
import { translate } from 'react-i18next'

const NotFoundPage = ({ t }) => (
  <div>
    <h1>{t('notFound.title')}</h1>
    <p>{t('notFound.description')}</p>
  </div>
)

export default translate(['data'])(NotFoundPage)
