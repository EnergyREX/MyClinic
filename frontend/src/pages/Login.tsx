import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { Button } from "../components/atoms/Button";
import InputField from "../components/molecules/InputField";
import useUserData from "../hooks/useUserData";
import PageTitle from "../components/layouts/PageTitle";
import { useTranslation } from "react-i18next";
import AuthLayout from "../components/layouts/AuthLayout";
import Typography from "../components/atoms/Typography";
import { SquareArrowOutUpRightIcon } from "lucide-react";

const Login = () => {
  const { t } = useTranslation();
  const { permissions, addPermission, clearPermissions } = useUserData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    // Sends a request to the server.
    const response = fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Store in localStorage the token
        if (data.original.token) {
          localStorage.setItem("token", data.original.token);
          localStorage.setItem("role_id", data.original.role_id);
          localStorage.setItem("user_id", data.original.user_id);

          let permissions = data.original.permissions;
          permissions.forEach((perm) => {
            addPermission(perm);
          });
          navigate("/");
        }
      });
  });

  return (
    <>
      <PageTitle>{t("home.title")}</PageTitle>
      <AuthLayout className="h-dvh">
        <div className="bg-neutral-300 p-5 rounded-lg dark:bg-neutral-700 dark:text-white max-w-md w-full">
          <div className="mb-5 mt-5 w-full justify-center items-center text-center">
            <Typography variant="h1" className="font-bold">
              {t("login.title")}
            </Typography>
            <Typography
              variant="muted"
              className="text-neutral-500 dark:text-neutral-400"
            >
              {t("login.subtle")}
            </Typography>
          </div>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <InputField
              label={t("email")}
              type="text"
              placeholder={t("placeholders.email")}
              {...register("email")}
            />

            <InputField
              label={t("password")}
              type="password"
              placeholder={t("placeholders.password_login")}
              {...register("password")}
            />

            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="mt-2"
              onClick={onSubmit}
            >
              {t("login.button")}
            </Button>
          </form>
          <Link
            className="font-light pt-2 dark:text-white flex gap-2 hover:text-sky-500 duration-100"
            to={"/register"}
          >
            {t("register-now")}{" "}
            <SquareArrowOutUpRightIcon className="w-[16px]" />
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
