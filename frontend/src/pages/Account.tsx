import React from 'react'
import Layout from '../Components/Layouts/Layout'
import Sidenav from '../Components/organisms/Sidenav'
import Typography from '../Components/atoms/Typography'
import { BadgeCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Components/atoms/Button'
import logout from '../services/logoutService'
import { replace, useNavigate } from 'react-router-dom'
import InputField from '../Components/molecules/InputField'
import PageTitle from '../Components/layouts/PageTitle'
import SidenavMobile from '../Components/organisms/SidenavMobile'


const Profile = () => {

  const { t } = useTranslation('common')
  const navigate = useNavigate()

  async function handleLogout() {
    await logout();
    navigate("/login", {replace: true})
  }

  return (
    <>
    <PageTitle>{t('account-title')}</PageTitle>
    <Layout>
      <div className='col-start-1 col-span-2'>
        <Sidenav />
        <SidenavMobile />
      </div>

      <div className='col-start-1 lg:col-start-3 col-span-full pl-5 pt-5 pr-5'>
        <Typography variant='h1' className='flex items-center gap-2 font-bold'><BadgeCheck />{t('account')}</Typography>

        {/* User data fields */}
        <div className='flex flex-col'>
          <Typography variant='h3' className='mt-4 font-bold'>Información personal</Typography>
          <form id='personal-info' className='grid gap-5 grid-cols-3'>
            <InputField label={"Nombre"} name={"name"} />
            <InputField label={"Apellidos"} name={"surname"} />
            <InputField label={"Email"} name={"email"} />
            <InputField label={"Dirección"} name={"address"} />
          </form>
          <div className='flex justify-end mt-4'>
          <Button 
          size='xl' type='submit' form='personal-info' variant='primary'>Actualizar información</Button>
          </div>
        </div>

        {/* Password Changing */}
        <div>
          <Typography variant='h3' className='mt-4 font-bold'>Información personal</Typography>
          <form id='personal-info' className='grid gap-5 grid-cols-3 content-center'>
            <InputField label={"Contraseña"} name={"password"} />
            <InputField label={"Repetir contraseña"} name={"repeat_password"} />
            <div className='flex align-middle'>
              <Button 
              size='xl' type='submit' form='personal-info' variant='primary'>Actualizar información
              </Button>
            </div>
          </form>
          <div className='flex justify-end mt-4'>
          </div>
        </div>

        <div>
          <Button 
          size='xl' type='button' variant='danger' 
          className='mt-4'
          onClick={logout}>
            {t('logout')}</Button>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Profile