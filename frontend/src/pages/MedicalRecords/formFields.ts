import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "patient_dni",
    label: i18n.t("medical-records.patient_dni", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "details",
    label: i18n.t("medical-records.details", { ns: "columndefs" }),
    type: "textarea",
    required: true,
  },
];

export default fields