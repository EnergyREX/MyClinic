import React from 'react'
import { useCrudData } from '../hooks/useCrudData';
import DataTable from '../Components/organisms/DataTable';
import Sidenav from '../Components/organisms/Sidenav';
import Layout from '../Layouts/Layout';

export const CrudPage = () => {

  const { info, getInfoURL, 
           data, setData, getDataURL,  
           columns, getColumnsURL,
           isLoadingData, } = useCrudData();

  if (isLoadingData) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <Layout>
      <div className='col-start-1 col-span-1'>
      <Sidenav />
      </div>
      <div className='col-start-2 col-span-full'>
      <h1>{info.title}</h1>
      <DataTable data={data.data} columns={columns} setData={setData}/>
      </div>
    </Layout>
  );
};
