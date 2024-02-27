import React, { useState } from "react";
import CloseHeader from "@/components/closeHeader";
import { login, registerData } from "@/assets/data/data";
import Input from "@/components/ui/input";
import ErrorText from "@/components/ui/errorText";
import Label from "@/components/ui/label";
import { useForm } from "react-hook-form";
import FormItem from "@/components/ui/formItem";

const ForgotPassForm = ({
  setForgotPass,
}: {
  setForgotPass: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [notValidEmail, setNotValidEmail] = useState(false);

  const onSubmit = () => {
    const email = getValues("email");
    console.log(email);
  };

  const { handleSubmit, register, getValues } = useForm({});

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-white dark:bg-gray-900 md:gap-3 gap-2 shadow-3xl p-4 pt-0 w-[400px] rounded-[.5rem]"
    >
      <CloseHeader title={login.forgotPass1} setEvent={setForgotPass} />
      <FormItem>
        <Label id="email" text={login.forgotpassEmail} />
        <Input
          register={register}
          type="text"
          name="email"
          id="email"
          placeholder={registerData.email}
        />
      </FormItem>
      {notValidEmail && <ErrorText text={login.forgotPassNoValidEmail} />}
      <input
        type="submit"
        value="تایید"
        className="w-[8rem] h-[2.5rem] pb-1 mt-[1rem] bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-[.3rem] cursor-pointer"
      />
    </form>
  );
};

export default ForgotPassForm;
