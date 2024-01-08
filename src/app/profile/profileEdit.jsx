"use client"
import { useState } from "react"
import { profile, profileEdit } from "@/assets/data/data"
import ImageDragDrop from "@/components/imageDragDrop"
import profileImage from "@/assets/images/profile.jpg"
import CloseHeader from "@/components/closeHeader"

const ProfileEdit = ({setIsEditActive}) => {
  const [image, setImage] = useState("")

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center w-screen h-screen bg-gray-700/80 z-40 overflow-hidden">
      <div className="flex flex-col w-full max-w-[600px] my-10 px-4 rounded-[1rem] bg-white dark:bg-gray-800">
        <CloseHeader setEvent={setIsEditActive} title={profile.editProfile}/>
        <form className="flex flex-col pb-5 gap-4 overflow-y-scroll [&>div]:flex [&>div]:flex-col [&>div]:w-full [&>div]:gap-1 [&>div>label]:px-1 [&>div>input]:w-full [&>div>input]:py-2 [&>div>input]:px-2 [&>div>input]:border-2 [&>div>input]:border-gray-500 dark:[&>div>input]:border-gray-400 [&>div>input]:rounded-[.2rem] [&>div>input]:bg-gray-100 dark:[&>div>input]:bg-gray-700">
          <div className="flex !flex-row !gap-3 [&>div]:flex [&>div]:flex-col [&>div]:w-full [&>div]:gap-1 [&>div>label]:px-1 [&>div>input]:w-full [&>div>input]:py-2 [&>div>input]:px-2 [&>div>input]:border-2 dark:[&>div>input]:border-gray-400 [&>div>input]:border-black [&>div>input]:rounded-[.2rem] [&>div>input]:bg-gray-100 dark:[&>div>input]:bg-gray-700">
            <div>
              <label htmlFor="firstname">
                {profileEdit.name}
              </label>
              <input 
                type="text" 
                name="firstname"
                id="firstname"
                value={profile.name}
              />
            </div>
            <div>
              <label htmlFor="lastname">
                {profileEdit.lastName}
              </label>
              <input 
                type="text" 
                name="lastname"
                id="lastname"
                value={profile.lastName}
              />
            </div>
          </div>
          <div className="flex !flex-row !gap-3 [&>div]:flex [&>div]:flex-col [&>div]:w-full [&>div]:gap-1 [&>div>label]:px-1 [&>div>input]:w-full [&>div>input]:py-2 [&>div>input]:px-2 [&>div>input]:border-2 dark:[&>div>input]:border-gray-400 [&>div>input]:border-gray-500 [&>div>input]:rounded-[.2rem] [&>div>input]:bg-gray-100 dark:[&>div>input]:bg-gray-700">
            <div>
              <label htmlFor="username">
                {profileEdit.username}
              </label>
              <input 
                type="text" 
                name="username"
                id="username"
                value={profile.id}
              />
            </div>
            <div>
              <label htmlFor="email">
                {profileEdit.email}
              </label>
              <input 
                type="text" 
                name="email"
                id="email"
                value={profile.id}
              />
            </div>
          </div>
          <div className="flex !flex-row !gap-3 [&>div]:flex [&>div]:flex-col [&>div]:w-full [&>div]:gap-1 [&>div>label]:px-1 [&>div>input]:w-full [&>div>input]:py-2 [&>div>input]:px-2 [&>div>input]:border-2 dark:[&>div>input]:border-gray-400 [&>div>input]:border-gray-500 [&>div>input]:rounded-[.2rem] [&>div>input]:bg-gray-100 dark:[&>div>input]:bg-gray-700">
            <div>
              <label htmlFor="job">
                {profileEdit.job}
              </label>
              <input 
                type="text" 
                name="job"
                id="job"
                value={profile.job}
              />
            </div>
            <div>
              <label htmlFor="link">
                {profileEdit.link}
              </label>
              <input 
                type="text" 
                name="link"
                id="link"
                value={profile.link}
              />
            </div>
          </div>
          <div>
            <label htmlFor="bio">
              {profileEdit.bio}
            </label>
            <input 
              type="text" 
              name="bio"
              id="bio"
            />
          </div>
          <ImageDragDrop 
            setImage={setImage} 
            isProfile={true}
            profileImage={profileImage} 
          />
          <div>
            <input 
              type="submit" 
              value={profileEdit.submitEdit}
              className="border-none !w-fit !px-14 !bg-gray-200 dark:!bg-gray-700 hover:!bg-gray-300 dark:hover:!bg-gray-600 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div> 
  )
}

export default ProfileEdit