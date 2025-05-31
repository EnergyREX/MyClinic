import React from 'react'
import SidenavHeader from '../molecules/SidenavHeader'
import SidenavBody from '../molecules/SidenavBody'
import SidenavFooter from '../molecules/SidenavFooter'
import Typography from '../atoms/Typography'
import { Link } from 'react-router-dom';
import { Book, Bot, Building, Container, CreditCard, NotepadText, Pill, TestTubes, TicketCheck, Users, Warehouse } from 'lucide-react'
import Divider from '../atoms/Divider'
import { useTranslation } from 'react-i18next'

const Sidenav = () => {

  const { t } = useTranslation('navigation');

  return (
    <nav className='h-dvh flex flex-col bg-neutral-900 px-2'>
      <SidenavHeader>
        <Link to={"/"}>
        <Typography variant='h1'>MyClinic</Typography>
        <Divider />
        </Link>
      </SidenavHeader>

      <SidenavBody>
        <Link to={"/appointments"} className='flex gap-1 align-middle'>
          <Users />
          <Typography variant='h3'>{t('navigation.appointments')}</Typography>
        </Link>

        <Link to={"/departments"} className='flex gap-1 align-middle'>
          <Building className=''/>
          <Typography variant='h3'>{t('navigation.departments')}</Typography>
        </Link>

        <Link to={"/doctors"} className='flex gap-1 align-middle'>
          <Pill />
          <Typography variant='h3'>{t('navigation.doctors')}</Typography>
        </Link>

        <Link to={"/inventories"} className='flex gap-1 align-middle'>
          <Warehouse />
          <Typography variant='h3'>{t('navigation.inventories')}</Typography>
        </Link>

        <Link to={"/invoices"} className='flex gap-1 align-middle'>
          <CreditCard />
          <Typography variant='h3'>{t('navigation.invoices')}</Typography>
        </Link>

        <Link to={"/access-tokens"} className='flex gap-1 align-middle'>
          <TicketCheck />
          <Typography variant='h3'>{t('navigation.access-tokens')}</Typography>
        </Link>

        <Link to={"/medical-records"} className='flex gap-1 align-middle'>
          <NotepadText />
          <Typography variant='h3'>{t('navigation.medical-records')}</Typography>
        </Link>

        <Link to={"/roles"} className='flex gap-1 align-middle'>
          <Book />
          <Typography variant='h3'>{t('navigation.roles')}</Typography>
        </Link>

        <Link to={"/suppliers"} className='flex gap-1 align-middle'>
          <Container />
          <Typography variant='h3'>{t('navigation.suppliers')}</Typography>
        </Link>

        <Link to={"/treatments"} className='flex gap-1 align-middle'>
          <TestTubes />
          <Typography variant='h3'>{t('navigation.treatments')}</Typography>
        </Link>

        <Link to={"/treatments"} className='flex gap-1 align-middle'>
          <Bot />
          <Typography variant='h3'>{t('navigation.auto-diagnosis')}</Typography>
        </Link>
      </SidenavBody>

      <SidenavFooter>
        <Typography variant='h3'>Username</Typography>
      </SidenavFooter>
    </nav>
  )
}

export default Sidenav