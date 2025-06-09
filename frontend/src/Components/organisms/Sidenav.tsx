import React from 'react'
import SidenavHeader from '../molecules/SidenavHeader'
import SidenavBody from '../molecules/SidenavBody'
import SidenavFooter from '../molecules/SidenavFooter'
import Typography from '../atoms/Typography'
import { Book, Bot, Building, Container, CreditCard, NotepadText, Pill, TestTubes, TicketCheck, Users, Warehouse } from 'lucide-react'
import Divider from '../atoms/Divider'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import Link from '../molecules/Link'

const Sidenav = () => {

  return (
    <nav className='col-span-2 text-neutral-950 bg-neutral-300 h-dvh flex flex-col dark:bg-neutral-900 px-2 dark:text-white'>
      <SidenavHeader />
    
      <Divider className='my-4'/>

      <SidenavBody />

      <Divider />

      <SidenavFooter>
        <Typography variant='h3'>Username</Typography>
      </SidenavFooter>
    </nav>
  )
}

export default Sidenav