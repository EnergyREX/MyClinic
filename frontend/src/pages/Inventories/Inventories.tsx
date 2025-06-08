import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import fields from './formFields';


const Inventories = () => {

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
  { id: 'id', header: t('inventories.id'), accessorKey: 'id' },
  { id: 'supplier_id', header: t('inventories.supplier_id'), accessorKey: 'supplier_id' },
  { id: 'item_name', header: t('inventories.item_name'), accessorKey: 'item_name' },
  { id: 'description', header: t('inventories.description'), accessorKey: 'description' },
  { id: 'quantity', header: t('inventories.quantity'), accessorKey: 'quantity' },
  { id: 'expiration_date', header: t('inventories.expiration_date'), accessorKey: 'expiration_date' },
  { id: 'created_at', header: t('inventories.created_at'), accessorKey: 'created_at'},
  { id: 'updated_at', header: t('inventories.updated_at'), accessorKey: 'updated_at'},
], [t])



  return (
    <CrudPage 
    columns={columns}
    formFields={fields}
    />
  )
}

export default Inventories