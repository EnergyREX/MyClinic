// DataTableToolbar.tsx
import React from 'react'
import Input from '../atoms/Input'
import Select from '../molecules/Select'
import Option from '../atoms/Option'
import Divider from '../atoms/Divider'
import { Button } from '../atoms/Button'
import { Plus, RefreshCcw, Trash } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const DataTableToolbar = ({ table, globalFilter, setGlobalFilter, openCreate, openDelete, reload }) => {
  const { t } = useTranslation('common')
  
  return (
    <div className='flex justify-between bg-neutral-300 dark:bg-neutral-800 p-3 rounded-lg gap-4 my-3'>
      {/* Global filter */}
      <Input
        type='text'
        value={globalFilter}
        onChange={e => setGlobalFilter(e.target.value)}
      />
      <div className='flex gap-3 justify-center content-center'>
      {/* Toggle columns */}
      <Select label={t('options')}>
        <Option
          label={t('toggleAll')}
          {...{
            type: 'checkbox',
            checked: table.getIsAllColumnsVisible(),
            onChange: table.getToggleAllColumnsVisibilityHandler(),
          }}
        />

        <Divider />

        {table.getAllLeafColumns().map(column => (
          <div key={column.id} className="px-1">
            <Option
              label={column.columnDef.header}
              {...{
                type: 'checkbox',
                checked: column.getIsVisible(),
                onChange: column.getToggleVisibilityHandler(),
              }}
            />
          </div>
        ))}
      </Select>
      
        <Button 
        variant='danger' size='lg'
        onClick={openDelete}>
          <Trash />
        </Button>

        <Button 
        variant='primary' size='lg'
        onClick={openCreate} >
          <Plus />
        </Button>

        <Button 
        variant='primary' size='lg'
        onClick={reload} >
          <RefreshCcw />
        </Button>
        </div>
    </div>
  )
}

export default DataTableToolbar
