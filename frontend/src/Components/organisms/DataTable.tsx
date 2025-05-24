import React, { useState } from 'react'
import { 
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  VisibilityState,
  SortingState
} from '@tanstack/react-table';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronUp, EllipsisVertical } from 'lucide-react'
import { Button } from '../atoms/Button';

const DataTable = ({ data, columns }) => {
  const [ sorting, setSorting ] = useState<SortingState>([])
  const [ globalFilter, setGlobalFiltering ] = useState("")
  const [ columnVisibility, setColumnVisibility ] = useState<VisibilityState>({})
  
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      columnVisibility
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFiltering
  });

  return (
    <div>
      <div>
        { /* Filtering Input */}
      <input 
      type='text'
      value={globalFilter}
      onChange={(e) => setGlobalFiltering(e.target.value)}
       />
        {/* Toggle (Show all) */}
        <div className="">

          <label>
            <input
              {...{
                type: 'checkbox',
                checked: table.getIsAllColumnsVisible(),
                onChange: table.getToggleAllColumnsVisibilityHandler(),
              }}
            />{' '}
            Toggle All
          </label>
        </div>
        {/* Toggle, eliminate one */}
        {table.getAllLeafColumns().map(column => {
          return (
            <div key={column.id} className="px-1">
              <label>
                <input
                  {...{
                    type: 'checkbox',
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />{' '}
                {column.id}
              </label>
            </div>
          )
        })}
      </div>
      
    <table className='border-1'>
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

      <tbody >
        {table.getRowModel().rows.map(row => (
          <tr className='border-1 hover:bg-neutral-400' key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td className='p-3' key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
            <td><Button variant='primary' size='xl'><EllipsisVertical /></Button></td>
          </tr>
        ))}
      </tbody>
    </table>
    { /* Pagination, future component */ }
      <div>
        <Button variant='primary' size='sm'
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}>
          <ChevronsLeft />
        </Button>

        <Button variant='primary' size='sm'
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}>
          <ChevronLeft />
        </Button>

        <Button variant='primary' size='sm'
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}>
          <ChevronRight />
        </Button>

        <Button variant='primary' size='sm'
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}>
          <ChevronsRight />
        </Button>
      </div>

        { /* Page size modifier */}
      <select
        value={table.getState().pagination.pageSize}
        onChange={e => {
          table.setPageSize(Number(e.target.value))
        }}
        >
        {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
        ))}
      </select>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
    </div>
  );
};

export default DataTable;
