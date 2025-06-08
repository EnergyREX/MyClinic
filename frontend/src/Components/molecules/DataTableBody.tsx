import React, { ReactNode } from 'react'
import { Table, flexRender } from '@tanstack/react-table'
import { Button } from '../atoms/Button'
import { EllipsisVertical } from 'lucide-react'
import Dropdown from './Dropdown'

const DataTableBody = ({ table }) => {
  return (
      <tbody >
        {table.getRowModel().rows.map(row => (
          <tr className='border-1 hover:bg-neutral-400' key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td className='p-3' key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
  )
}

export default DataTableBody