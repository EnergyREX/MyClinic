import React from 'react'
import { useCrudData } from '../hooks/useCrudData';
import DataTable from '../Components/organisms/DataTable';

export const CrudPage = () => {

  const { info, getInfoURL, 
           data, getDataURL,  
           columns, getColumnsURL,
           isLoadingData,
           pagination, setPagination } = useCrudData();

  if (isLoadingData) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <p>Test</p>
      <h1>{info.title}</h1>
      <DataTable data={data.data} columns={columns}/>
    </main>
  );
};
