import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import fields from './formFields';
import { Permissions } from '../../types/permissions';

const Suppliers = () => {

  const { t } = useTranslation('columndefs')

  const permissions = {
    create: 'create_suppliers',
    read: 'view_suppliers',
    update: 'update_suppliers',
    delete: 'delete_suppliers',
  }

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
  { id: 'id', header: t('suppliers.id'), accessorKey: 'id' },
  { id: 'name', header: t('suppliers.name'), accessorKey: 'name' },
  { id: 'description', header: t('suppliers.description'), accessorKey: 'description' },
  { id: 'address', header: t('suppliers.address'), accessorKey: 'address' },
  { id: 'created_at', header: t('suppliers.created_at'), accessorKey: 'created_at' },
  { id: 'updated_at', header: t('suppliers.updated_at'), accessorKey: 'updated_at' },
], [t])



  return (
    <CrudPage 
    permissions={permissions}
    columns={columns}
    formFields={fields}
    />
  )
}

export default Suppliers