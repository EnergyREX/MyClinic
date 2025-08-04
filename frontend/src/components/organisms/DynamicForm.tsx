import React from "react";
import { useForm } from "react-hook-form";
import Input from "../atoms/Input";
import { FieldDef } from "../../types/forms";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  formFields: FieldDef[];
  onSubmit: (data: any) => void;
  defaultValues?: Record<string, any>;
  formId?: string;
}

const DynamicForm: React.FC<Props> = ({ formFields, formId, onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => (
        <div key={field.name} className="flex flex-col mb-4">
          <label htmlFor={field.name} className="mb-1 font-medium">
            {field.label}
          </label>

          <Input
            id={field.name}
            type={field.type}
            defaultValue={defaultValues[field.name]}
            {...register(field.name, { required: field.required })}
          />

          {errors[field.name] && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>
      ))}
    </form>
  );
};

export default DynamicForm;
