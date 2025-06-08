import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import fields from './formFields';


const Invoices = () => {

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
  { id: 'id', header: t('invoices.id'), accessorKey: 'id' },
  { id: 'amount', header: t('invoices.amount'), accessorKey: 'amount' },
  { id: 'updated_at', header: t('invoices.updated_at'), accessorKey: 'updated_at' },
  { id: 'created_at', header: t('invoices.created_at'), accessorKey: 'created_at' },
  { id: 'paid_at', header: t('invoices.paid_at'), accessorKey: 'paid_at'},

], [t])



  return (
    <CrudPage 
    columns={columns}
    formFields={fields}
    />
  )
}

export default Invoices