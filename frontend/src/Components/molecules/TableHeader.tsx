import React, { ReactNode } from 'react'
import { Table, flexRender } from '@tanstack/react-table'
import { ChevronDown, ChevronUp } from 'lucide-react'

const TableHeader = ({ table }) => {
  return (
        <thead className="border-1">
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id} className="p-3">
            {headerGroup.headers.map(header => (
              <th
                className="p-3 bg-neutral-600 text-neutral-100 cursor-pointer"
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
              >
                {header.isPlaceholder
                  ? null
                  : (
                    <>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <ChevronUp className="inline ml-1" />,
                        desc: <ChevronDown className="inline ml-1" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </>
                  )
                }
              </th>
            ))}
            <th className="p-3 bg-neutral-600 text-neutral-100 cursor-pointer">Acciones</th>
          </tr>
        ))}
      </thead>
  )
}

export default TableHeader