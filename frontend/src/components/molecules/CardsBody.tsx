import React, { ReactNode } from 'react'
import { Table, flexRender } from '@tanstack/react-table'
import { Button } from '../atoms/Button'
import { EllipsisVertical } from 'lucide-react'
import Dropdown from './Dropdown'
import Card from '../atoms/Card'

const CardsBody = ({ table }) => {
  return (
      <div className='grid grid-cols-3'>
        {table.getRowModel().rows.map(row => (
          <Card key={row.id}>
            {row.getVisibleCells().map(cell => (
              <div className='p-3' key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </Card>
        ))}
      </div>
  )
}

export default CardsBody