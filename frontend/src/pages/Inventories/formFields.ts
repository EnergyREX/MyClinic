import i18n from '../../i18n'
import { FieldDef } from "../../types/forms";

export const fields: FieldDef[] = [
  {
    name: "supplier_id",
    label: i18n.t("inventories.supplier_id", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "item_name",
    label: i18n.t("inventories.item_name", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: i18n.t("inventories.description", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "quantity",
    label: i18n.t("inventories.quantity", { ns: "columndefs" }),
    type: "text",
    required: true,
  },
  {
    name: "expiration_date",
    label: i18n.t("inventories.expiration_date", { ns: "columndefs" }),
    type: "date",
    required: true,
  },
];

export default fields