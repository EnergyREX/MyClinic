import React from 'react'
import { useCrudData } from '../hooks/useCrudData';
import DataTable from '../Components/organisms/DataTable';
import Sidenav from '../Components/organisms/Sidenav';

export const CrudPage = () => {

  const { info, getInfoURL, 
           data, getDataURL,  
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
    <main className='overflow-x-hidden dark:bg-neutral-800 dark:text-neutral-50 min-h-dvh'>
      <h1>{info.title}</h1>
      <Sidenav />
      <DataTable data={data.data} columns={columns}/>
    </main>
  );
};
