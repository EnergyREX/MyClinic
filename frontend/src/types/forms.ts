export type FieldType = "text" | "textarea" | "email" | "number" | "password" | "select" | "checkbox";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string }[];
}