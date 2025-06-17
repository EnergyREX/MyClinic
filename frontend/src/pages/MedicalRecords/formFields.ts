import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const getFields= (): FieldDef[] => [
  {
    name: "patient_dni",
    label: i18n.t("medical-records.patient_dni"),
    type: "text",
    required: true,
  },
  {
    name: "details",
    label: i18n.t("medical-records.details"),
    type: "textarea",
    required: true,
  },
];

export default getFields