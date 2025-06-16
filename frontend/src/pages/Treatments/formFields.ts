import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "name",
    label: i18n.t("treatments.name", { ns: "columndefs" }),
    type: "textarea",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("treatments.description", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
];

export default fields