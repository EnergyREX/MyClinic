import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import { Permissions } from '../../types/permissions';

const JWTTokens = () => {

  const { t } = useTranslation('columndefs')

  const permissions: Permissions = {
    create: 'undefined', // JWTTokens are created on login in.
    read: 'view_jwttokens',
    update: 'undefined', // JWTTokens are not updated.
    delete: 'delete_jwttokens',
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
  { id: 'id', header: t('jwt-tokens.id'), accessorKey: 'id' },
  { id: 'user_id', header: t('jwt-tokens.user_id'), accessorKey: 'user_id' },
  /*{ id: 'token', header: t('jwt-tokens.token'), accessorKey: 'token' },*/
  { id: 'created_at', header: t('jwt-tokens.created_at'), accessorKey: 'created_at' },
  { id: 'expires_at', header: t('jwt-tokens.expires_at'), accessorKey: 'expires_at' },
], [t])



  return (
    <CrudPage 
    permissions={permissions}
    columns={columns}
    />
  )
}

export default JWTTokens