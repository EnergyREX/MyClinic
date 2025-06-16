import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "patient_dni",
    label: i18n.t("appointments.patient_dni", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "doctor_dni",
    label: i18n.t("appointments.doctor_dni", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "status_id",
    label: i18n.t("appointments.status_id", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "hour",
    label: i18n.t("appointments.hour", { ns: "columndefs" }),
    type: "time",
    required: true,
  },
  {
    name: "date",
    label: i18n.t("appointments.date", { ns: "columndefs" }),
    type: "date",
    required: true,
  },
];

export default fields