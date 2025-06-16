import React, { ReactNode } from 'react'
import Link from './Link';
import { Book, Bot, Building, Container, CreditCard, NotepadText, Pill, TestTubes, TicketCheck, Users, Warehouse } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SidenavBody = () => {
    const { t } = useTranslation('navigation');

  return (
    <div className='flex-grow'>
        <Link to="/appointments" label={t('navigation.appointments')}>
          <Users />
        </Link>

        <Link to="/departments" label={t('navigation.departments')}>
          <Building />
        </Link>

        <Link to="/doctors" label={t('navigation.doctors')}>
          <Pill />
        </Link>

        <Link to="/inventories" label={t('navigation.inventories')}>
          <Warehouse />
        </Link>

        <Link to="/jwt-tokens" label={t('navigation.access-tokens')}>
          <TicketCheck />
        </Link>

        <Link to="/medical-records" label={t('navigation.medical-records')}>
          <NotepadText />
        </Link>

        <Link to="/suppliers" label={t('navigation.suppliers')}>
          <Container />
        </Link>

        <Link to="/treatments" label={t('navigation.treatments')}>
          <TestTubes />
        </Link>
    </div>
  )
}

export default SidenavBody