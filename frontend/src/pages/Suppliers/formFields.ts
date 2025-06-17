import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const getFields= (): FieldDef[] => [
  {
    name: "name",
    label: i18n.t("suppliers.name"),
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("suppliers.description"),
    type: "textarea",
    required: true,
  },
  {
    name: "address",
    label: i18n.t("suppliers.address"),
    type: "textarea",
    required: true,
  },
];

export default getFields