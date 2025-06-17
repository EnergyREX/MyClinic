import i18n from '../../i18n';
import { FieldDef } from '../../types/forms';

export const getFields = (): FieldDef[] => [
  {
    name: 'patient_dni',
    label: i18n.t('appointments.patient_dni'),
    type: 'text',
    required: true,
  },
  {
    name: 'doctor_dni',
    label: i18n.t('appointments.doctor_dni'),
    type: 'text',
    required: true,
  },
  {
    name: 'status_id',
    label: i18n.t('appointments.status_id'),
    type: 'text',
    required: true,
  },
  {
    name: 'hour',
    label: i18n.t('appointments.hour'),
    type: 'time',
    required: true,
  },
  {
    name: 'date',
    label: i18n.t('appointments.date'),
    type: 'date',
    required: true,
  },
];

export default getFields;
