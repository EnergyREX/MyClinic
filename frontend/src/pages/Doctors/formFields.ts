import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "doctor_dni",
    label: i18n.t("doctors.doctor_dni", {ns: "columndefs"}),
    type: "text",
    required: true,
  },
  {
    name: "specialization_id",
    label: i18n.t("doctors.specialization_id", {ns: "columndefs"}),
    type: "number",
    required: true,
  },
  {
    name: "department_id",
    label: i18n.t("doctors.department_id", {ns: "columndefs"}),
    type: "number",
    required: true,
  },
  {
    name: "availability",
    label: i18n.t("doctors.availability", {ns: "columndefs"}),
    type: "date",
    required: true,
  },
  {
    name: "status_id",
    label: i18n.t("doctors.status_id", {ns: "columndefs"}),
    type: "textarea",
    required: true,
  }
];

export default fields