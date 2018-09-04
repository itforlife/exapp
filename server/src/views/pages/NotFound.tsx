import * as React from 'react'

const NotFoundPage = ({ t }) => (
  <div>
    <h1>{t('notFound.title')}</h1>
    <p>{t('notFound.description')}</p>
  </div>
)

export default NotFoundPage;
