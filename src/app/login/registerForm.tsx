import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Cookies from "universal-cookie";
import CloseHeader from "@/components/closeHeader";
import {
  login,
  registerData,
  selectOptionsDays,
  selectOptionsMounths,
  selectOptionsYears,
} from "@/assets/data/data";
import { baseURL } from "@/axios/axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/lib/zodSchema";
import Input from "../../components/ui/input";
import ErrorIcon from "../../components/ui/errorIcon";
import Label from "../../components/ui/label";
import Radio from "../../components/ui/radio";
import Select from "../../components/ui/select";
import ErrorText from "../../components/ui/errorText";
import { AxiosResponse } from "axios";
import FormItem from "../../components/ui/formItem";
import { NewUserType } from "@/type/type";

const RegisterFormTest = ({
  setRegister,
}: {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [confPassError, setConfPassError] = useState(false);
  const [emailRepeatedError, setEmailRepeatedError] = useState(false);
  const [usernameRepeatedError, setUsernameRepeatedError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      year: 1403,
      gender: "",
      password: "",
      confirmPass: "",
    },
    resolver: zodResolver(registerFormSchema),
    mode: "all",
  });

  const postNewUser = useMutation({
    mutationFn: async (newUser: NewUserType) => {
      try {
        const response: AxiosResponse = await baseURL.post("/user", newUser);
        setNetworkError(false);

        if (response?.data?.repeated?.includes("email")) {
          setEmailRepeatedError(true);
          setUsernameRepeatedError(false);
          return;
        }
        if (response?.data?.repeated?.includes("username")) {
          setUsernameRepeatedError(true);
          setEmailRepeatedError(false);
          return;
        }

        setEmailRepeatedError(false);
        setUsernameRepeatedError(false);

        if (response?.data) {
          const cookies = new Cookies();
          cookies.set("user", response?.data, { path: "/" });
          location.reload();
        } else {
          throw new Error();
        }
      } catch {
        setNetworkError(true);
      }
    },
  });

  const onSubmit = () => {
    const values = getValues();
    if (values.password !== values.confirmPass) {
      setConfPassError(true);
      return;
    }
    setConfPassError(false);
    postNewUser.mutate({
      username: values.username,
      email: values.email,
      firstname: values.firstname,
      lastname: values.lastname,
      gender: values.gender,
      year: values.year,
      password: values.password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center bg-white dark:bg-gray-900 md:gap-4 gap-2 shadow-3xl p-4 pt-0 w-[400px] rounded-[.5rem]"
    >
      <CloseHeader setEvent={setRegister} title={registerData.register} />
      <div className="flex gap-3">
        <FormItem>
          <Input
            register={register}
            type="name"
            id="firstname"
            name="firstname"
            placeholder={registerData.name}
            isIconError={errors?.firstname}
          />
          {errors?.firstname && <ErrorIcon text={registerData.fillErorr} />}
        </FormItem>
        <FormItem>
          <Input
            register={register}
            type="lastname"
            id="lastname"
            name="lastname"
            placeholder={registerData.lastname}
            isIconError={errors?.lastname}
          />
          {errors?.lastname && <ErrorIcon text={registerData.fillErorr} />}
        </FormItem>
      </div>
      <FormItem>
        <Input
          register={register}
          type="text"
          id="email"
          name="email"
          placeholder={registerData.email}
          isIconError={errors?.email}
        />
        {errors?.email && <ErrorIcon text={registerData.emailErorr} />}
        {emailRepeatedError && <ErrorText text={registerData.emailRepeated} />}
      </FormItem>
      <FormItem>
        <Input
          register={register}
          type="text"
          id="username"
          name="username"
          placeholder={registerData.username}
          isIconError={errors?.username}
        />
        {errors?.username && <ErrorIcon text={registerData.usernameErorr} />}
        {usernameRepeatedError && (
          <ErrorText text={registerData.usernameRepeated} />
        )}
      </FormItem>
      <FormItem>
        <FormItem>
          <Label text={registerData.birthDate} />
          {errors?.year && <ErrorIcon text={registerData.birthErorr} />}
        </FormItem>
        <FormItem classNames="flex-row">
          <Select
            register={register}
            id="day"
            name="day"
            options={selectOptionsDays}
          />
          <Select
            register={register}
            id="mounth"
            name="mounth"
            options={selectOptionsMounths}
          />
          <Select
            register={register}
            id="year"
            name="year"
            options={selectOptionsYears}
          />
        </FormItem>
      </FormItem>
      <FormItem>
        <FormItem>
          <Label text={registerData.gender} />
          {errors?.gender && (
            <ErrorIcon text={registerData.genderErorr} classNames="top-0" />
          )}
        </FormItem>
        <FormItem classNames="flex-row">
          <FormItem classNames="flex-row px-4 h-10 border border-bg-theme-darker bg-white dark:bg-gray-950">
            <Label id="male" text={registerData.male} classNames="h-full" />
            <Radio
              register={register}
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
          </FormItem>
          <FormItem classNames="flex-row px-4 h-10 border border-bg-theme-darker bg-white dark:bg-gray-950">
            <Label id="female" text={registerData.female} classNames="h-full" />
            <Radio
              register={register}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
          </FormItem>
        </FormItem>
      </FormItem>
      <FormItem>
        <Input
          register={register}
          type="password"
          id="password"
          name="password"
          placeholder={registerData.pass}
          isIconError={errors?.password}
        />
        {errors?.password && <ErrorIcon text={registerData.passErorr} />}
      </FormItem>
      <FormItem>
        <Input
          register={register}
          type="password"
          id="confirmPass"
          name="confirmPass"
          placeholder={registerData.passRepeat}
          isIconError={errors?.confirmPass}
        />
        {errors?.confirmPass && (
          <ErrorIcon text={registerData.passRepeatErorr} />
        )}
      </FormItem>
      {confPassError && <ErrorText text={registerData.passRepeatedErorr} />}
      {networkError && <ErrorText text={login.networkErrorMessage} />}
      <input
        type="submit"
        value={registerData.register}
        className="w-[200px] h-10 md:mt-4 mt-2 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-500 text-white rounded-[.3rem] cursor-pointer"
      />
    </form>
  );
};

export default RegisterFormTest;
