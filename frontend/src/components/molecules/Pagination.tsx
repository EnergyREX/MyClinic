import React from 'react'
import { Button } from '../atoms/Button'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Pagination = ({table}) => {

  const { t } = useTranslation('common')

  return (
      <div className='flex gap-2 mt-2'>
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

        <span className="flex items-center gap-1">
          <div>{t('page')}</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} {t('of')}{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
      </div>
  )
}

export default Pagination