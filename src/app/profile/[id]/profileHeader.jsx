"use client"
import { useContext, useState } from 'react'
import { ProfileContext } from '@/context/context'
import ProfileEdit from './profileEdit'
import ProfileChatButton from './profileChatButton'
import ProfileFollowButton from './profileFollowButton'
import Image from 'next/image'
import defaultImage from '@/assets/images/default.jpg'
import { profile } from '@/assets/data/data'
import ProfileLogoutButton from './profileLogoutButton'

const ProfileHeader = () => {
  const { user, isLoginUser, follower, following } = useContext(ProfileContext)
  const [isEditActive, setIsEditActive] = useState(false)

  return (
    <div className='sticky flex items-center w-full h-[234px] z-40'>
      <div className='flex h-full w-full bg-white dark:bg-gray-700'> 
        {user.background && 
          <Image 
            src={user.background}
            width={2000}
            height={500} 
            alt="" 
            className='min-h-full min-w-full object-cover' 
          />
        }
      </div>
      <div className='absolute left-0 top-0 bottom-0 flex flex-col h-full w-full overflow-y-hidden'>
        <div className='flex flex-col justify-between h-full w-[17rem] pt-1 pb-2 px-4 dark:bg-gray-800 bg-white z-10 gap-1'>
          <div className='flex flex-col text-[1rem] gap-1'>
            <span className='text-[1.2rem]'>
              {user.firstname}&nbsp;{user.lastname}
            </span>
            <span className='text-[1.2rem]'>
              {user.username}
            </span>
            <span>
              {user.job}
            </span>
            <span>
              {user.bio}
            </span>
            <a href='nasrin007jf.com'>
              {user.link}
            </a>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <div className='flex gap-2'>
              <div className='flex gap-1'>
                <span>
                  {profile.following}
                </span>
                <span>
                  {follower}
                </span>
              </div>
              <div className='flex gap-1'>
                <span>
                  {profile.followers}
                </span>
                <span>
                  {following}
                </span>
              </div>
            </div>
            {isLoginUser ? 
              <div className='flex w-full gap-1'>
                <button
                  onClick={() => setIsEditActive(true)} 
                  className='w-full h-[1.8rem] dark:bg-gray-700 bg-gray-200'
                >
                  {profile.editProfile}
                </button> 
                <ProfileLogoutButton />
              </div>
              : 
              <div className='flex w-full items-center justify-between gap-2'>
                <ProfileFollowButton />
                <ProfileChatButton />
              </div>
            }
          </div>
        </div>
      </div>
      <div className='absolute right-[16.5rem] top-[5.5rem] flex h-[150px] w-[150px] z-10 rounded-full overflow-hidden'> 
        <Image 
          src={user.image || defaultImage} 
          width={200}
          height={200}
          alt="" 
          className='min-h-full min-w-full object-cover' 
        />
      </div>
      {isEditActive &&
        <ProfileEdit 
          setIsEditActive={setIsEditActive} 
        />
      }
    </div>
  )
}

export default ProfileHeader