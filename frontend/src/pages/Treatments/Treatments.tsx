import React, { useMemo } from "react";
import CrudPage from "../../components/template/CrudPage";
import { useTranslation } from "react-i18next";
import fields, { getFields } from "./formFields";
import { Permissions } from "../../types/permissions";
import PageTitle from "../../components/layouts/PageTitle";

const Treatments = () => {
  const { t } = useTranslation("common");

  const permissions: Permissions = {
    create: "create_treatments",
    read: "view_treatments",
    update: "update_treatments",
    delete: "delete_treatments",
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
      { id: "id", header: t("treatments.id"), accessorKey: "id" },
      { id: "name", header: t("treatments.name"), accessorKey: "name" },
      {
        id: "description",
        header: t("treatments.description"),
        accessorKey: "description",
      },
      {
        id: "created_at",
        header: t("treatments.created_at"),
        accessorKey: "created_at",
      },
    ],
    [t],
  );

  const fields = getFields();

  return (
    <>
      <PageTitle>{t("treatments.title")}</PageTitle>
      <CrudPage
        permissions={permissions}
        columns={columns}
        formFields={fields}
      />
    </>
  );
};

export default Treatments;
