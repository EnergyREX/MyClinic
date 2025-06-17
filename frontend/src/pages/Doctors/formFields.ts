import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const getFields = (): FieldDef[] => [
  {
    name: "doctor_dni",
    label: i18n.t("doctors.doctor_dni"),
    type: "text",
    required: true,
  },
  {
    name: "specialization_id",
    label: i18n.t("doctors.specialization_id"),
    type: "number",
    required: true,
  },
  {
    name: "department_id",
    label: i18n.t("doctors.department_id"),
    type: "number",
    required: true,
  },
  {
    name: "availability",
    label: i18n.t("doctors.availability"),
    type: "date",
    required: true,
  },
  {
    name: "status_id",
    label: i18n.t("doctors.status_id"),
    type: "textarea",
    required: true,
  }
];

export default getFields