import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "name",
    label: i18n.t("departments.name", {ns: "columndefs"}),
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("departments.description", {ns: "columndefs"}),
    type: "textarea",
    required: true,
  },
];

export default fields
