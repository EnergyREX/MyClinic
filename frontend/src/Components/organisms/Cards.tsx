import { Table } from '@tanstack/react-table'
import React from 'react'

import DataTableHeader from '../molecules/DataTableHeader'
import DataTableBody from '../molecules/DataTableBody'
import Pagination from '../molecules/Pagination'
import DataTableToolbar from '../molecules/DataTableToolbar'

const Cards = ({ table }) => {
  
  
  return (
    <>
      <DataTableToolbar 
      table={table} 
      globalFilter={table.globalFilter} 
      setGlobalFilter={table.setGlobalFilter} 
      />
    <table>
      <DataTableHeader table={table} />
      <DataTableBody table={table} />
    </table>
      <Pagination table={table} />
    </>
  )
}

export default Cards