import React from 'react'
import SidenavHeader from '../molecules/SidenavHeader'
import SidenavBody from '../molecules/SidenavBody'
import SidenavFooter from '../molecules/SidenavFooter'
import Typography from '../atoms/Typography'
import { Link } from 'react-router-dom';
import { Book, Bot, Building, Container, CreditCard, NotepadText, Pill, TestTubes, TicketCheck, Users, Warehouse } from 'lucide-react'

const Sidenav = () => {
  return (
    <nav>
      <SidenavHeader>
        <Link to={"/"}>
        <Typography variant='h1'>MyClinic</Typography>
        </Link>
      </SidenavHeader>

      <SidenavBody>
        <Link to={"/appointments"} className='flex gap-1 align-middle'>
          <Users />
          <Typography variant='h3'>Appointments</Typography>
        </Link>

        <Link to={"/departments"} className='flex gap-1 align-middle'>
          <Building />
          <Typography variant='h3'>Departments</Typography>
        </Link>

        <Link to={"/doctors"} className='flex gap-1 align-middle'>
          <Pill />
          <Typography variant='h3'>Doctors</Typography>
        </Link>

        <Link to={"/inventories"} className='flex gap-1 align-middle'>
          <Warehouse />
          <Typography variant='h3'>Inventories</Typography>
        </Link>

        <Link to={"/invoices"} className='flex gap-1 align-middle'>
          <CreditCard />
          <Typography variant='h3'>Invoices</Typography>
        </Link>

        <Link to={"/access-tokens"} className='flex gap-1 align-middle'>
          <TicketCheck />
          <Typography variant='h3'>Access Tokens</Typography>
        </Link>

        <Link to={"/medical-records"} className='flex gap-1 align-middle'>
          <NotepadText />
          <Typography variant='h3'>Medical Records</Typography>
        </Link>

        <Link to={"/roles"} className='flex gap-1 align-middle'>
          <Book />
          <Typography variant='h3'>Roles</Typography>
        </Link>

        <Link to={"/suppliers"} className='flex gap-1 align-middle'>
          <Container />
          <Typography variant='h3'>Suppliers</Typography>
        </Link>

        <Link to={"/treatments"} className='flex gap-1 align-middle'>
          <TestTubes />
          <Typography variant='h3'>Treatments</Typography>
        </Link>

        <Link to={"/treatments"} className='flex gap-1 align-middle'>
          <Bot />
          <Typography variant='h3'>Auto-diagnosis</Typography>
        </Link>
      </SidenavBody>

      <SidenavFooter>
        <Typography variant='h3'>Username</Typography>
      </SidenavFooter>
    </nav>
  )
}

export default Sidenav