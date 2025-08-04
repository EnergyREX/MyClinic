import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { getFields } from "./formFields";
import CrudPage from "../../components/template/CrudPage";
import { Permissions } from "../../types/permissions";
import PageTitle from "../../components/layouts/PageTitle";

const Departments = () => {
  const { t } = useTranslation("common");

  const permissions: Permissions = {
    create: "create_departments",
    read: "view_departments",
    update: "update_departments",
    delete: "delete_departments",
  };

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllPageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
        enableSorting: false,
        enableColumnFilter: false,
      },
      { id: "id", header: t("departments.id"), accessorKey: "id" },
      { id: "name", header: t("departments.name"), accessorKey: "name" },
      {
        id: "description",
        header: t("departments.description"),
        accessorKey: "description",
      },
      {
        id: "created_at",
        header: t("departments.created_at"),
        accessorKey: "created_at",
      },
      {
        id: "updated_at",
        header: t("departments.updated_at"),
        accessorKey: "updated_at",
      },
    ],
    [t],
  );

  const fields = getFields();

  return (
    <>
      <PageTitle>{t("departments.title")}</PageTitle>
      <CrudPage
        permissions={permissions}
        columns={columns}
        formFields={fields}
      />
    </>
  );
};

export default Departments;
