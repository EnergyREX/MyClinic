import React, { useEffect } from 'react';
import { Button } from '../Components/atoms/Button';
import { Link } from 'react-router-dom';
import Permission from '../Components/auth/Permission'
import useUserData from '../hooks/useUserData';
import Sidenav from '../Components/organisms/Sidenav';
import Layout from '../Components/Layouts/Layout';
import PageTitle from '../Components/layouts/PageTitle';
import { useTranslation } from 'react-i18next';
import SidenavMobile from '../Components/organisms/SidenavMobile';
import Typography from '../Components/atoms/Typography';

const Home = () => {

  const { t } = useTranslation('common');
  const { permissions } = useUserData()
  const apiURL = import.meta.env.PUBLIC_BACKEND_URL

  function sendReq() {
    fetch('http://localhost:8000/api/cors')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <>
    <PageTitle>{t('home-title')}</PageTitle>
    <Layout>
      <div className='col-span-2'>
      <Sidenav />
      <SidenavMobile />
      </div>

      <div className='col-start-1 lg:col-start-3 col-span-full'>

      <Typography variant='h1'>{t('welcome')}</Typography>


      </div>
    </Layout>
    </>
  );
};

export default Home;
