import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import { fields } from './formFields';


const Appointments = () => {

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
  { id: 'id', header: t('appointments.id'), accessorKey: 'id' },
  { id: 'patient_dni', header: t('appointments.patient_dni'), accessorKey: 'patient_dni' },
  { id: 'doctor_dni', header: t('appointments.doctor_dni'), accessorKey: 'doctor_dni' },
  { id: 'status_id', header: t('appointments.status_id'), accessorKey: 'status' },
  { id: 'hour', header: t('appointments.hour'), accessorKey: 'hour' },
  { id: 'date', header: t('appointments.date'), accessorKey: 'date' },
], [t])



  return (
    <CrudPage 
    columns={columns}
    formFields={fields}
    />
  )
}

export default Appointments