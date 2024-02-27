import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "@/lib/zodSchema";
import { useMutation } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import Cookies from "universal-cookie";
import { login } from "@/assets/data/data";
import { AxiosResponse } from "axios";
import Input from "../../components/ui/input";
import ErrorText from "../../components/ui/errorText";

type UserLoginInfo = {
  username: string;
  password: string;
};

const LoginFormTest = () => {
  const [networkError, setNetworkError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const { register, handleSubmit, getValues } = useForm({
    mode: "onSubmit",
  });

  const postLoginInfo = useMutation({
    mutationFn: async (userLoginInfo: UserLoginInfo) => {
      try {
        const response: AxiosResponse = await baseURL.post("/auth", userLoginInfo);
        setNetworkError(false);
        if (response?.data?.login) {
          const cookie = new Cookies();
          cookie.set("user", response.data.result, { path: "/" });
          location.reload();
        }
        if (!response?.data?.login) {
          setLoginError(true);
        }
      } catch {
        setNetworkError(true);
      }
    },
  });

  const onSubmit = () => {
    const values = getValues();
    try {
      loginFormSchema.parse(values);
      postLoginInfo.mutate({
        username: values.username,
        password: values.password,
      });
    } catch {
      setLoginError(true);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register}
        type="text"
        name="username"
        id="username"
        placeholder={login.username}
        isIconError={false}
        classNames="h-12 bg-gray-white dark:bg-gray-700"
      />
      <Input
        register={register}
        type="password"
        name="password"
        id="password"
        placeholder={login.pass}
        isIconError={false}
        classNames="h-12 bg-gray-white dark:bg-gray-700"
      />
      {loginError && <ErrorText text={login.errorMessage} />}
      {networkError && <ErrorText text={login.networkErrorMessage} />}
      <input
        type="submit"
        value={login.submit}
        className="w-full h-12 pb-1 bg-blue-600 hover:bg-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-[.3rem] cursor-pointer"
      />
    </form>
  );
};

export default LoginFormTest;
