import React, { useEffect, useState } from 'react'

import { useCrudData } from '../../hooks/useCrudData'

import CrudPageLayout from '../layouts/CrudTableLayout'
import Sidenav from '../organisms/Sidenav'
import DataTable from '../organisms/DataTable'


import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'

import Modal from '../molecules/Modal'
import Typography from '../atoms/Typography'
import Divider from '../atoms/Divider'
import { Button } from '../atoms/Button'
import { useTranslation } from 'react-i18next'
import Dropdown, { DropdownBtn } from '../molecules/Dropdown'
import { Pencil, Trash } from 'lucide-react'
import DynamicForm from '../organisms/DynamicForm'
import Permission from '../auth/Permission'

interface props {
  columns: any[]
  formFields: any[]
  permissions?: Permissions
}

const CrudPage = ({ columns, formFields, permissions }: props) => {
  const { t } = useTranslation('columndefs')

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const [isOpenDeleteManyModal, setIsOpenDeleteManyModal] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const {
    info, getInfoURL,
    data, setData, getDataURL, reloadData,
    isLoadingData,
  } = useCrudData()

  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})

  const dropdownColumn = {
    id: 'actions',
    header: t('actions'),
    accessorKey: 'actions',
    cell: ({ row }) => (
      <Dropdown className='flex flex-col'>
        <Typography variant='subtl' className='font-bold'>{t('actions')}</Typography>
        <Divider className='my-1' />
        <div className='flex flex-start flex-col'>
          <DropdownBtn
            onClick={() => updateModal(row.original)}
            className='text-blue-700 dark:text-blue-400 inline-flex p-1 my-1 gap-1 hover:bg-neutral-500 hover:cursor-pointer rounded-md'>
            <Pencil /> {t('update')}
          </DropdownBtn>
          <DropdownBtn
            onClick={() => deleteModal(row.original)}
            className='text-red-600 dark:text-red-400 inline-flex p-1 my-1 gap-1 hover:bg-neutral-500 hover:cursor-pointer rounded-md'>
            <Trash /> {t('delete')}
          </DropdownBtn>
        </div>
      </Dropdown>
    )
  }

  const table = useReactTable({
    data: data?.data || [],
    columns: [...columns, dropdownColumn],
    state: {
      sorting,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  const createModal = () => setIsOpenCreateModal(true)
  const updateModal = (row) => {
    setSelectedRow(row)
    setIsOpenUpdateModal(true)
  }

  const deleteModal = (row) => {
    setSelectedRow(row)
    setIsOpenDeleteModal(true)
  }

    const deleteManyModal = () => {
    setIsOpenDeleteManyModal(true)
  }

  const handleCreate = async (formData) => {
    try {
      const response = await fetch(`${getDataURL}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Error al crear")

      await response.json()
      console.log("Creado")
      setIsOpenCreateModal(false)
      reloadData()
    } catch (error) {
      console.error("Error:", error.message)
    }
  }

  const handleUpdate = async (formData) => {
    try {
      const response = await fetch(`${getDataURL}/${selectedRow.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Error al actualizar")

      await response.json()
      console.log("Actualizado")
      setIsOpenUpdateModal(false)
      reloadData()
    } catch (error) {
      console.error("Error:", error.message)
    }
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`${getDataURL}/${selectedRow.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })

      if (!response.ok) throw new Error("Error al eliminar")

      await response.json()
      console.log("Eliminado")
      setIsOpenDeleteModal(false)
      reloadData()
    } catch (error) {
      console.error("Error:", error.message)
    }
  }

  const handleDeleteMany = async () => {
    // Obtén los ids reales de las filas seleccionadas
    const ids = table
      .getSelectedRowModel()
      .flatRows
      .map(row => row.original.id)

    try {
      const response = await fetch(`${getDataURL}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          ids
        })
      })

      const result = await response.json()
      console.log(result)
      setIsOpenDeleteManyModal(false)
      reloadData()
    } catch (err) {
      console.error("Error:", err.message)
    }
  }


  return (
    <CrudPageLayout>
      <Sidenav />
      <div className='col-start-3 col-span-full m-3'>
        {/* Create Modal */}
        <Modal isOpen={isOpenCreateModal} onClose={() => setIsOpenCreateModal(false)}>
          <Typography variant='h3'>Crear nuevo registro</Typography>
          <Typography variant='muted'>Completa los campos para crear.</Typography>
          <Divider className='mb-2 mt-2' />

          <DynamicForm
            formId='create-form'
            formFields={formFields}
            onSubmit={handleCreate}
          />

          
          <div className='flex justify-end pt-2'>
            <Button variant='neutral' size='lg' onClick={() => setIsOpenCreateModal(false)}>Cancelar</Button>
            <Button variant='success' size='lg' form='create-form'>Submit</Button>
          </div>
        </Modal>

        {/* Update Modal */}
        <Permission requiredPermission={permissions?.update}>
        <Modal isOpen={isOpenUpdateModal} onClose={() => setIsOpenUpdateModal(false)}>
          <Typography variant='h3'>Actualizar registro</Typography>
          <Typography variant='muted'>Modifica los campos necesarios.</Typography>
          <Divider />

          <DynamicForm
            formId='update-form'
            formFields={formFields}
            onSubmit={handleUpdate}
            defaultValues={selectedRow}
          />

          <div className='flex justify-end pt-2'>
            <Button variant='primary' size='lg' form='update-form'>Update</Button>
            <Button variant='neutral' size='lg' onClick={() => setIsOpenUpdateModal(false)}>Cancelar</Button>
          </div>
        </Modal>
        </Permission>

        <Permission requiredPermission={permissions?.delete}>
        {/* Delete Modal */}
        <Modal isOpen={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)}>
          <Typography variant='h3'>¿Seguro que quieres eliminar esto?</Typography>
          <Typography variant='muted'>Esta acción no se puede deshacer.</Typography>
          <Divider />

          <div className='flex justify-end pt-2'>
            <Button variant='danger' size='lg' onClick={handleDelete}>Eliminar</Button>
            <Button variant='neutral' size='lg' onClick={() => setIsOpenDeleteModal(false)}>Cancelar</Button>
          </div>
        </Modal>
        </Permission>

        <Permission requiredPermission={permissions?.delete}>
        {/* Delete Many Modal */}
        <Modal isOpen={isOpenDeleteManyModal} onClose={() => setIsOpenDeleteManyModal(false)}>
          <Typography variant='h3'>¿Seguro que quieres estos registros?</Typography>
          <Typography variant='muted'>¡Esta acción no se puede deshacer!</Typography>
          <Divider />

          <div className='flex justify-end pt-2'>
            <Button variant='danger' size='lg' onClick={handleDeleteMany}>Eliminar</Button>
            <Button variant='neutral' size='lg' onClick={() => setIsOpenDeleteManyModal(false)}>Cancelar</Button>
          </div>
        </Modal>
        </Permission>

        <DataTable
          permissions={permissions}
          table={table}
          openCreate={createModal}
          openDelete={deleteManyModal}
          reload={reloadData}
        />
      </div>
    </CrudPageLayout>
  )
}

export default CrudPage
