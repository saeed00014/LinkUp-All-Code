"use client"
import { useContext, useState } from "react"
import { profile, ProfileEditFormData } from "@/assets/data/data"
import { useMutation } from "@tanstack/react-query"
import { ProfileContext } from "@/context/context"
import ImageDragDrop from "@/components/imageDragDrop"
import CloseHeader from "@/components/closeHeader"
import Input from "./input"
import { baseURL } from "@/axios/axios"

const ProfileEditForm = () => {
  const { user, setIsEditActive } = useContext(ProfileContext)
  const [firstname, setFirstname] = useState(user.firstname)
  const [lastname, setLastname] = useState(user.lastname)
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [job, setJob] = useState(user.job || "")
  const [link, setLink] = useState(user.link || "")
  const [bio, setBio] = useState(user.bio || "")
  const [image, setImage] = useState(user.image)
  const [background, setBackground] = useState(user.background)

  const putUser = useMutation({
    mutationFn: async (editedValues) => {
      const response = await baseURL.put(`/user/${user.id}`, editedValues)
      location.reload("")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const editedValues = {
      username : username,
      email : email,
      firstname : firstname,
      lastname : lastname,
      job : job,
      link : link,
      bio : bio,
      image : image,
      background: background
    }
    putUser.mutate(editedValues)
  }

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center w-screen h-screen bg-gray-700/80 z-40 overflow-hidden">
      <div className="flex flex-col w-full max-w-[600px] my-10 px-4 rounded-[1rem] bg-white dark:bg-gray-800">
        <CloseHeader 
          setEvent={setIsEditActive} 
          title={profile.editProfile}
        />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col pb-5 gap-4 overflow-y-scroll">
          <div className="flex flex-row gap-3">
            <Input
              lable={ProfileEditFormData.name}
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              setValue={setFirstname}
            />
            <Input
              lable={ProfileEditFormData.lastname}
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              setValue={setLastname}
            />
          </div>
          <div className="flex flex-row gap-3">
            <Input
              lable={ProfileEditFormData.username}
              type="text"
              name="username"
              id="username"
              value={username}
              setValue={setUsername}
            />
            <Input
              lable={ProfileEditFormData.email}
              type="text"
              name="email"
              id="email"
              value={email}
              setValue={setEmail}
            />
          </div>
          <div className="flex flex-row gap-3">
            <Input
              lable={ProfileEditFormData.job}
              type="text"
              name="job"
              id="job"
              value={job}
              setValue={setJob}
            />
            <Input
              lable={ProfileEditFormData.link}
              type="text"
              name="link"
              id="link"
              value={link}
              setValue={setLink}
            />
          </div>
          <Input
            lable={ProfileEditFormData.bio}
            type="text"
            name="bio"
            id="bio"
            value={bio}
            setValue={setBio}
          />
          <ImageDragDrop 
            setImage={setImage} 
            currentImage={image} 
            lable={ProfileEditFormData.avatar} 
            edition="avatar"
            />
          <ImageDragDrop 
            setImage={setBackground} 
            currentImage={background}
            lable={ProfileEditFormData.background} 
            edition="background"
          />
          <div>
            <input 
              type="submit" 
              value={ProfileEditFormData.submitEdit}
              className="border-none !w-fit !px-14 py-2 !bg-gray-200 dark:!bg-gray-700 hover:!bg-gray-300 dark:hover:!bg-gray-600 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div> 
  )
}

export default ProfileEditForm