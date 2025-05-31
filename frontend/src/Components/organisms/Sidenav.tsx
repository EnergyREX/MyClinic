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
    <nav className='h-dvh flex flex-col bg-neutral-900 px-2'>
      <SidenavHeader>
        <RouterLink to={"/"}>
        <Typography variant='h1'>MyClinic</Typography>
        <Divider />
        </RouterLink>
      </SidenavHeader>

      <SidenavBody />


      <SidenavFooter>
        <Typography variant='h3'>Username</Typography>
      </SidenavFooter>
    </nav>
  )
}

export default Sidenav