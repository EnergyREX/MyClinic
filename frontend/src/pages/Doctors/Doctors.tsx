import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import { getFields } from './formFields';
import { Permissions } from '../../types/permissions';
import PageTitle from '../../Components/layouts/PageTitle';

const Doctors = () => {

  const { t } = useTranslation('common')

  const permissions: Permissions = {
    create: 'create_doctors',
    read: 'view_doctors',
    update: 'update_doctors',
    delete: 'delete_doctors',
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
  { id: 'id', header: t('doctors.id'), accessorKey: 'id' },
  { id: 'doctor_dni', header: t('doctors.doctor_dni'), accessorKey: 'doctor_dni' },
  { id: 'specialization_id', header: t('doctors.specialization_id'), accessorKey: 'specialization_id' },
  { id: 'department_id', header: t('doctors.department_id'), accessorKey: 'department_id' },
  { id: 'availability', header: t('doctors.availability'), accessorKey: 'availability' },
  { id: 'status_id', header: t('doctors.status_id'), accessorKey: 'status_id' },
], [t])

  const fields = getFields()

  return (
    <>
    <PageTitle>{t('doctors.title')}</PageTitle>
    <CrudPage 
    permissions={permissions}
    columns={columns}
    formFields={fields}
    />
    </>
  )
}

export default Doctors