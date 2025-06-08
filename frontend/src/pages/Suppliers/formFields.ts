import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "name",
    label: i18n.t("appointments.name"),
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("appointments.description"),
    type: "textarea",
    required: true,
  },
];

export default fields