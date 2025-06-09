import { Table } from '@tanstack/react-table'
import React from 'react'

import DataTableHeader from '../molecules/DataTableHeader'
import DataTableBody from '../molecules/DataTableBody'
import Pagination from '../molecules/Pagination'
import DataTableToolbar from '../molecules/DataTableToolbar'
import CardsBody from '../molecules/CardsBody'

const Cards = ({ table, openCreate, openDelete, reload }) => {
  
  
  return (
    <>
      <DataTableToolbar 
      openCreate={openCreate}
      openDelete={openDelete}
      reload={reload}
      table={table} 
      globalFilter={table.globalFilter} 
      setGlobalFilter={table.setGlobalFilter} 
      />

      <CardsBody table={table} />

      <Pagination table={table} />
    </>
  )
}

export default Cards