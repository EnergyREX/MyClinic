import { Table } from '@tanstack/react-table'
import React from 'react'

import DataTableHeader from '../molecules/DataTableHeader'
import DataTableBody from '../molecules/DataTableBody'
import Pagination from '../molecules/Pagination'
import DataTableToolbar from '../molecules/DataTableToolbar'

interface props {
  table: Table<any>
  openCreate: () => void
  openDelete: () => void
  reload: () => void
  permissions?: {
    create?: string
    read?: string
    update?: string
    delete?: string
  }
}

const DataTable = ({ table, openCreate, openDelete, reload, permissions }: props) => {
  
  
  return (
    <>
      <DataTableToolbar 
      permissions={permissions}
      openCreate={openCreate}
      openDelete={openDelete}
      reload={reload}
      table={table} 
      globalFilter={table.globalFilter} 
      setGlobalFilter={table.setGlobalFilter} 
      />
    <table className='w-full text-sm text-left border border-gray-200'>
      <DataTableHeader table={table} />
      <DataTableBody table={table} />
    </table>
      <Pagination table={table} />
    </>
  )
}

export default DataTable