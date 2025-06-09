import React, { useEffect } from 'react';
import { Button } from '../atoms/Button';
import { Link } from 'react-router-dom';
import Permission from '../auth/Permission'
import useUserData from '../../hooks/useUserData';
import Sidenav from '../organisms/Sidenav';
import Layout from '../Layouts/Layout';

const Home = () => {

  const { permissions } = useUserData()
  const apiURL = import.meta.env.PUBLIC_BACKEND_URL

  function sendReq() {
    fetch('http://localhost:8000/api/cors')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <Layout>
      <div>
      <Sidenav />
      </div>

      <div className='col-start-2 col-span-full'>

      <Button size='xl' type='button' variant='danger' onClick={sendReq}>Test</Button>

      <h1 className='text-4xl font-bold'>MyClinic - Frontend</h1>
      <p className='text-neutral-500'>Nashe</p>

        <Link to="/register">
          <Button size='xl' type='button' variant='primary'>Register</Button> 
        </Link>

        <Link to="/login">
          <Button size='xl' type='button' variant='primary'>Register</Button> 
        </Link>

        <Permission requiredPermission='view_roles'>
          <Link to="/asdadar">
            <Button size='xl' type='button' variant='primary'>Ruta protegida</Button> 
          </Link>
        </Permission>
        
        <Link to="/departments">
        <Button size='xl' type='button' variant='primary'>Departments</Button> 
        </Link>


        <Link to="/crud-card">
        <Button size='xl' type='button' variant='primary'>CCard</Button> 
        </Link>

        <p>Conectado a: {apiURL}</p>
        </div>
    </Layout>
  );
};

export default Home;
