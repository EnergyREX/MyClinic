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
import Cards from '../organisms/Cards'

const CrudCard = ({ columns, formFields }) => {
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
            <Pencil /> Modify
          </DropdownBtn>
          <DropdownBtn
            onClick={() => deleteModal(row.original)}
            className='text-red-600 dark:text-red-400 inline-flex p-1 my-1 gap-1 hover:bg-neutral-500 hover:cursor-pointer rounded-md'>
            <Trash /> Delete
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

      if (!response.ok) throw new Error("Error al crear el departamento")

      await response.json()
      console.log("Departamento creado")
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

      if (!response.ok) throw new Error("Error al actualizar el departamento")

      await response.json()
      console.log("Departamento actualizado")
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

      if (!response.ok) throw new Error("Error al eliminar el departamento")

      await response.json()
      console.log("Departamento eliminado")
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
          <Divider />

          <DynamicForm
            formFields={formFields}
            onSubmit={handleCreate}
          />

          <Divider />
          <div className='flex justify-end pt-2'>
            {/* El botón ya está incluido en DynamicForm, pero si quieres uno separado: */}
            <Button variant='neutral' size='lg' onClick={() => setIsOpenCreateModal(false)}>Cancelar</Button>
          </div>
        </Modal>

        {/* Update Modal */}
        <Modal isOpen={isOpenUpdateModal} onClose={() => setIsOpenUpdateModal(false)}>
          <Typography variant='h3'>Actualizar registro</Typography>
          <Typography variant='muted'>Modifica los campos necesarios.</Typography>
          <Divider />

          <DynamicForm
            formFields={formFields}
            onSubmit={handleUpdate}
            defaultValues={selectedRow}
          />

          <Divider />
          <div className='flex justify-end pt-2'>
            <Button variant='neutral' size='lg' onClick={() => setIsOpenUpdateModal(false)}>Cancelar</Button>
          </div>
        </Modal>

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

        {/* Delete Many Modal */}
        <Modal isOpen={isOpenDeleteManyModal} onClose={() => setIsOpenDeleteModal(false)}>
          <Typography variant='h3'>¿Seguro que quieres estos registros?</Typography>
          <Typography variant='muted'>¡Esta acción no se puede deshacer!</Typography>
          <Divider />

          <div className='flex justify-end pt-2'>
            <Button variant='danger' size='lg' onClick={handleDeleteMany}>Eliminar</Button>
            <Button variant='neutral' size='lg' onClick={() => setIsOpenDeleteManyModal(false)}>Cancelar</Button>
          </div>
        </Modal>

        <Cards
          table={table}
          openCreate={createModal}
          openDelete={deleteManyModal}
          reload={reloadData}
        />
      </div>
    </CrudPageLayout>
  )
}

export default CrudCard
