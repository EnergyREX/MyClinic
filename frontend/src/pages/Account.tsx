import React from 'react'
import Layout from '../Components/Layouts/Layout'
import Sidenav from '../Components/organisms/Sidenav'
import Typography from '../Components/atoms/Typography'
import { BadgeCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Components/atoms/Button'
import logout from '../services/logoutService'
import { replace, useNavigate } from 'react-router-dom'


const Profile = () => {

  const { t } = useTranslation('common')
  const navigate = useNavigate()

  async function handleLogout() {
    await logout();
    navigate("/login", {replace: true})
  }

  return (
    <Layout>
      <div className='col-start-1 col-span-2'>
        <Sidenav />
      </div>

      <div className='col-start-3 col-span-full pl-5 pt-5'>
        <Typography variant='h1' className='flex items-center gap-2 font-bold'><BadgeCheck />{t('account')}</Typography>

        {/* User data fields */}
        <div>
          <Button 
          size='xl' type='button' variant='danger' 
          className='mt-4'
          onClick={logout}>
            {t('logout')}</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Profile