import React, { useMemo } from 'react'
import CrudPage from '../../Components/template/CrudPage'
import { useTranslation } from 'react-i18next';
import { getFields } from './formFields';
import { Permissions } from '../../types/permissions';
import PageTitle from '../../Components/layouts/PageTitle';

const MedicalRecords = () => {

  const { t } = useTranslation('common')

  const permissions: Permissions = {
    create: 'create_medical_records',
    read: 'view_medical_records',
    update: 'update_medical_records',
    delete: 'delete_medical_records',
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
  { id: 'id', header: t('medical-records.id'), accessorKey: 'id' },
  { id: 'patient_dni', header: t('medical-records.patient_dni'), accessorKey: 'patient_dni' },
  { id: 'details', header: t('medical-records.details'), accessorKey: 'details' },
  { id: 'created_at', header: t('medical-records.created_at'), accessorKey: 'created_at' },
  { id: 'updated_at', header: t('medical-records.updated_at'), accessorKey: 'updated_at' },
], [t])

  const fields = getFields();

  return (
    <>
    <PageTitle>{t('medicalrecords.title')}</PageTitle>
    <CrudPage 
    permissions={permissions}
    columns={columns}
    formFields={fields}
    />
    </>
  )
}

export default MedicalRecords