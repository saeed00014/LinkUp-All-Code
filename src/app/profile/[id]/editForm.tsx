"use client";
import React, { useContext, useState } from "react";
import { postText, profile, EditFormData } from "@/assets/data/data";
import { useMutation } from "@tanstack/react-query";
import { ProfileContext } from "@/context/context";
import ImageDragDrop from "@/components/imageDragDrop";
import CloseHeader from "@/components/closeHeader";
import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";
import CloseBackground from "@/components/closeBackground";
import Input from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Label from "@/components/ui/label";
import FormItem from "@/components/ui/formItem";
import ErrorText from "@/components/ui/errorText";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema } from "@/lib/zodSchema";
import { userEditType } from "@/type/type";

const EditForm = () => {
  const { user, setIsEditActive } = useContext(ProfileContext);
  const [image, setImage] = useState(user.image);
  const [background, setBackground] = useState(user.background);
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const putUser = useMutation({
    mutationFn: async (editedValues: userEditType) => {
      try {
        await baseURL.put(`/user/${user.id}`, editedValues);
        setNetworkError(false);
        setIsEditLoading(false);
        location.reload()
      } catch {
        setNetworkError(true);
        setIsEditLoading(false);
      }
    },
  });

  const { handleSubmit, getValues, register } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      job: user.job,
      link: user.link,
      bio: user.bio,
      image: image,
      background: background,
    },
    resolver: zodResolver(editUserSchema),
    mode: "all",
  });

  const onSubmit = () => {
    const putValues = getValues();
    const editedValues = {
      username: putValues.username,
      email: putValues.email,
      firstname: putValues.firstname,
      lastname: putValues.lastname,
      job: putValues.job,
      link: putValues.link,
      bio: putValues.bio,
      image: image,
      background: background,
    };
    setIsEditLoading(true);
    putUser.mutate(editedValues);
  };

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center w-screen h-screen bg-gray-700/80 z-40 overflow-hidden">
      <CloseBackground setEvent={setIsEditActive} />
      <div className="flex flex-col w-full max-w-[600px] my-10 px-4 rounded-[1rem] bg-white dark:bg-gray-800 z-50">
        <CloseHeader setEvent={setIsEditActive} title={profile.editProfile} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col pb-5 gap-4 overflow-y-scroll"
        >
          <div className="flex flex-row gap-3">
            <FormItem>
              <Label id="firstname" text={EditFormData.name} />
              <Input
                register={register}
                type="text"
                name="firstname"
                id="firstname"
                isIconError={false}
                classNames="border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
              />
            </FormItem>
            <FormItem>
              <Label id="firstname" text={EditFormData.lastname} />
              <Input
                register={register}
                type="text"
                name="lastname"
                id="lastname"
                isIconError={false}
                classNames="border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
              />
            </FormItem>
          </div>
          <div className="flex flex-row gap-3">
            <FormItem>
              <Label id="username" text={EditFormData.username} />
              <Input
                register={register}
                type="text"
                name="username"
                id="username"
                isIconError={false}
                classNames="border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
              />
            </FormItem>
            <FormItem>
              <Label id="email" text={EditFormData.email} />
              <Input
                register={register}
                type="text"
                name="email"
                id="email"
                isIconError={false}
                classNames="border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
              />
            </FormItem>
          </div>
          <div className="flex flex-row gap-3">
            <FormItem>
              <Label id="job" text={EditFormData.job} />
              <Input
                register={register}
                type="text"
                name="job"
                id="job"
                isIconError={false}
                classNames="border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
              />
            </FormItem>
            <FormItem>
              <Label id="link" text={EditFormData.link} />
              <Input
                register={register}
                type="text"
                name="link"
                id="link"
                isIconError={false}
                classNames="border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
              />
            </FormItem>
          </div>
          <FormItem>
            <Label id="bio" text={EditFormData.bio} />
            <Input
              register={register}
              type="text"
              name="bio"
              id="bio"
              isIconError={false}
              classNames="border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
            />
          </FormItem>
          <ImageDragDrop
            setImage={setImage}
            currentImage={image}
            lable={EditFormData.avatar}
            edition="avatar"
          />
          <ImageDragDrop
            setImage={setBackground}
            currentImage={background}
            lable={EditFormData.background}
            edition="background"
          />
          <div className="relative flex items-center gap-2">
            <input
              type="submit"
              value={EditFormData.submitEdit}
              className="border-none !w-fit !px-14 py-2 !bg-gray-200 dark:!bg-gray-700 hover:!bg-gray-300 dark:hover:!bg-gray-600 cursor-pointer"
            />
            {isEditLoading && (
              <span className="absolute right-1 scale-75">
                <LoadingSpin />
              </span>
            )}
            {networkError && <ErrorText text={postText.problem} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
