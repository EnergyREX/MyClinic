import { Menu, User, X } from 'lucide-react'
import React, { useState } from 'react'
import Typography from '../atoms/Typography'
import SidenavBody from '../molecules/SidenavBody'
import SidenavFooter from '../molecules/SidenavFooter'
import Link from '../molecules/Link'
import { useTranslation } from 'react-i18next'

const SidenavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const close = () => setIsOpen(false)

  return (
    <>
      <nav className="col-span-3 row-span-1 flex items-center justify-between sticky top-0 z-40 bg-neutral-950 text-white w-full py-2 px-4 lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <Typography variant="h2">MyClinic</Typography>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={close}
        >
          <aside
            className="absolute left-0 top-0 h-full w-64 bg-neutral-900 shadow-lg flex flex-col justify-between px-4 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <div className="flex justify-end mb-4">
              <button onClick={close}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <SidenavBody />
            </div>

            <SidenavFooter>
              <Link
                to="/profile"
                label={t('account')}
                className="flex items-center gap-2 text-white"
              >
                <User />
              </Link>
            </SidenavFooter>
          </aside>
        </div>
      )}
    </>
  )
}

export default SidenavMobile
