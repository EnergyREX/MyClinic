import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "name",
    label: i18n.t("suppliers.name", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("suppliers.description", { ns: "columndefs" }),
    type: "textarea",
    required: true,
  },
  {
    name: "address",
    label: i18n.t("suppliers.address", { ns: "columndefs" }),
    type: "textarea",
    required: true,
  },
];

export default fields