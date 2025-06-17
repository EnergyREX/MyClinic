import React, { use, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface props {
  children?: React.ReactNode
}

const PageTitle = ({ children }: props) => {
  
  const { t } = useTranslation('common')

  useEffect(() => {
    document.title = `${children} | ${t('app-title')}`
  })
  
  return (
    null
  )
}

export default PageTitle