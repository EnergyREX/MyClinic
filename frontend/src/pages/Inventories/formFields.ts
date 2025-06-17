import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const getFields = (): FieldDef[] => [
  {
    name: "supplier_id",
    label: i18n.t("inventories.supplier_id"),
    type: "text",
    required: true,
  },
  {
    name: "item_name",
    label: i18n.t("inventories.item_name"),
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("inventories.description"),
    type: "text",
    required: true,
  },
  {
    name: "quantity",
    label: i18n.t("inventories.quantity"),
    type: "text",
    required: true,
  },
  {
    name: "expiration_date",
    label: i18n.t("inventories.expiration_date"),
    type: "date",
    required: true,
  },
];

export default getFields;