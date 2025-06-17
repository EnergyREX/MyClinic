import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const getFields = (): FieldDef[] => [
  {
    name: "name",
    label: i18n.t("departments.name"),
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("departments.description"),
    type: "textarea",
    required: true,
  },
];

export default getFields
