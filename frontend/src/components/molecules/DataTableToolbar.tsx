import React from 'react'
import Input from '../atoms/Input'
import Select from '../molecules/Select'
import Option from '../atoms/Option'
import Divider from '../atoms/Divider'
import { Button } from '../atoms/Button'
import { Plus, RefreshCcw, Trash } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Permission from '../auth/Permission'

interface Props {
  table: any
  globalFilter: string
  setGlobalFilter: (value: string) => void
  openCreate: () => void
  openDelete: () => void
  reload: () => void
  permissions?: Permissions
}

const DataTableToolbar = ({ table, globalFilter, setGlobalFilter, openCreate, openDelete, reload, permissions }: Props) => {
  const { t } = useTranslation('common')

  return (
    <Permission requiredPermission={permissions?.read}>
    <div className='flex justify-between bg-neutral-300 dark:bg-neutral-800 p-3 rounded-lg gap-4 my-3'>
      
          <Input
            type='text'
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            aria-label={t('common:globalFilter')}
          />
          <div className='flex gap-3 justify-center content-center'>
          <div>
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
                <div key={column.id} className='px-1'>
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
          </div>
      
      
      <Permission requiredPermission={permissions?.delete}>
        <Button variant='danger' size='lg' onClick={openDelete}>
          <Trash />
        </Button>
      </Permission>

      <Permission requiredPermission={permissions?.create}>
        <Button variant='primary' size='lg' onClick={openCreate}>
          <Plus />
        </Button>
      </Permission>

      <Permission requiredPermission={permissions?.read}>
        <Button variant='primary' size='lg' onClick={reload}>
          <RefreshCcw />
        </Button>
      </Permission>
      </div>
    </div>
    </Permission>
  )
}

export default DataTableToolbar
