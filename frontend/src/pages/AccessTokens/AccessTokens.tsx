import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import { fields } from './formFields';


const AccessTokens = () => {

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
  { id: 'id', header: t('jwt-tokens.id'), accessorKey: 'id' },
  { id: 'user_id', header: t('jwt-tokens.user_id'), accessorKey: 'patient_dni' },
  { id: 'token', header: t('jwt-tokens.token'), accessorKey: 'doctor_dni' },
  { id: 'created_at', header: t('jwt-tokens.created_at'), accessorKey: 'status' },
  { id: 'expires_at', header: t('jwt-tokens.expires_at'), accessorKey: 'hour' },
], [t])



  return (
    <CrudPage 
    columns={columns}
    formFields={fields}
    />
  )
}

export default AccessTokens