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
import TableHeader from '../molecules/TableHeader';
import TableBody from '../molecules/TableBody';
import Pagination from '../molecules/Pagination';
import Select from '../molecules/Select';
import Input from '../atoms/Input';
import Divider from '../atoms/Divider';
import Option from '../atoms/Option';

const DataTable = ({ data, columns }) => {
  const [ sorting, setSorting ] = useState<SortingState>([])
  const [ globalFilter, setGlobalFiltering ] = useState("")
  const [ columnVisibility, setColumnVisibility ] = useState<VisibilityState>({})
  const [ rowSelection, setRowSelection ] = useState()
  
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    onRowSelectionChange: rowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFiltering,
  });

  return (
    <div>
      <div className='flex gap-4'>
        { /* Filtering Input */}
      <Input
      className="" 
      type='text'
      value={globalFilter}
      onChange={(e) => setGlobalFiltering(e.target.value)}
       />
      

      <Select label={"Options"}>
            <Option
            label='Toggle All'
              {...{
                type: 'checkbox',
                checked: table.getIsAllColumnsVisible(),
                onChange: table.getToggleAllColumnsVisibilityHandler(),
              }}
            />{' '}
          <Divider />
          {table.getAllLeafColumns().map(column => {
          return (
            <div key={column.id} className="px-1">
                <Option
                label={column.id}
                  {...{
                    type: 'checkbox',
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />{' '}
            </div>
          )
        })} 
        </Select>
      </div>
    <table className='border-1 max-w-xs overflow-x-auto'>

      <TableHeader table={table} />

      <TableBody table={table} />

    </table>

    <div className='flex justify-between max-w-xl'>
    <Pagination table={table} />

        { /* Page size modifier, a Select component */}
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
      </div>
    </div>

  );
};

export default DataTable;
