import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import fields from './formFields';


const Departments = () => {

  const { t } = useTranslation('columndefs')

const columns = useMemo(() => [
  {
  id: 'select',
  header: ({ table }) => (
    <input
      type="checkbox"
      checked={table.getIsAllPageRowsSelected()}
      onChange={table.getToggleAllPageRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <input
      type="checkbox"
      checked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      onChange={row.getToggleSelectedHandler()}
    />
  ),
  enableSorting: false,
  enableColumnFilter: false,
  },
  { id: 'id', header: t('departments.id'), accessorKey: 'id' },
  { id: 'name', header: t('departments.name'), accessorKey: 'name' },
  { id: 'description', header: t('departments.description'), accessorKey: 'description' },
  { id: 'created_at', header: t('departments.created_at'), accessorKey: 'created_at' },
  { id: 'updated_at', header: t('departments.updated_at'), accessorKey: 'updated_at' },
], [t])



  return (
    <CrudPage 
    columns={columns}
    formFields={fields}
    />
  )
}

export default Departments