import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const getFields = (): FieldDef[] => [
  {
    name: "name",
    label: i18n.t("treatments.name"),
    type: "textarea",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("treatments.description"),
    type: "text",
    required: true,
  },
];

export default getFields