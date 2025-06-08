import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import fields from './formFields';


const Treatments = () => {

  const { t } = useTranslation('columndefs')

  console.log(t(''))

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
  { id: 'id', header: t('treatments.id'), accessorKey: 'id' },
  { id: 'name', header: t('treatments.name'), accessorKey: 'name' },
  { id: 'description', header: t('treatments.description'), accessorKey: 'description' },
  { id: 'created_at', header: t('treatments.created_at'), accessorKey: 'created_at' },
], [t])



  return (
    <CrudPage 
    columns={columns}
    formFields={fields}
    />
  )
}

export default Treatments