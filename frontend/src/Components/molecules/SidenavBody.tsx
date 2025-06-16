import React from 'react';
import Link from './Link';
import { Book, Bot, Building, Container, CreditCard, NotepadText, Pill, TestTubes, TicketCheck, Users, Warehouse } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Permission from '../auth/Permission';

const SidenavBody = () => {
  const { t } = useTranslation('navigation');

  return (
    <div className='flex-grow'>
      <Permission requiredPermission="view_appointments">
        <Link to="/appointments" label={t('navigation.appointments')}><Users /></Link>
      </Permission>

      <Permission requiredPermission="view_departments">
        <Link to="/departments" label={t('navigation.departments')}><Building /></Link>
      </Permission>

      <Permission requiredPermission="view_doctors">
        <Link to="/doctors" label={t('navigation.doctors')}><Pill /></Link>
      </Permission>

      <Permission requiredPermission="view_inventories">
        <Link to="/inventories" label={t('navigation.inventories')}><Warehouse /></Link>
      </Permission>

      <Permission requiredPermission="view_jwttokens">
        <Link to="/jwt-tokens" label={t('navigation.access-tokens')}><TicketCheck /></Link>
      </Permission>

      <Permission requiredPermission="view_medical_records">
        <Link to="/medical-records" label={t('navigation.medical-records')}><NotepadText /></Link>
      </Permission>

      <Permission requiredPermission="view_suppliers">
        <Link to="/suppliers" label={t('navigation.suppliers')}><Container /></Link>
      </Permission>

      <Permission requiredPermission="view_treatments">
        <Link to="/treatments" label={t('navigation.treatments')}><TestTubes /></Link>
      </Permission>
    </div>
  );
};

export default SidenavBody;
