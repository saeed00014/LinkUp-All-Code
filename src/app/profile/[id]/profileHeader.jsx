"use client"
import { useContext } from 'react'
import { ProfileContext } from '@/context/context'
import ProfileButtonChat from './profileButtonChat'
import ProfileLogoutButton from './profileButtonLogout'
import ProfileButtonFollow from './profileButtonFollow'
import ProfileButtonEdit from './profileButtonEdit'
import { FaLink } from "react-icons/fa"
import Image from 'next/image'
import defaultImage from '@/assets/images/default.jpg'
import { profile } from '@/assets/data/data'

const ProfileHeader = () => {
  const { user, isLoginUser, follower, following } = useContext(ProfileContext)

  return (
    <div className='sticky flex items-center w-full h-[180px] z-40'>
      <div className='flex h-full w-full bg-gray-400 dark:bg-gray-700'> 
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
      <div className='absolute right-0 flex flex-col justify-between h-full w-[17rem] pt-1 pb-3 px-4 dark:bg-gray-800 bg-white z-10 gap-0'>
      <span className='text-[1.1rem]'>
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
      {user.link &&
      <a
        href={`http://${user.link}`}
        target='_blank' 
        className='flex items-center gap-1'
      >
        <span>
          <FaLink />
        </span>
          <span>
            {user.link}
          </span>
      </a>
      }
      <div className='flex w-full gap-5'>
        <div className='flex justify-between w-full h-[1.8rem]'>
          <span className='min-w-[70px]'>
            {profile.following}
          </span>
          <span className='flex justify-center w-full'>
            {follower}
          </span>
        </div>
        <div className='flex justify-between w-full h-[1.8rem]'>
          <span className='min-w-[70px]'>
            {profile.followers}
          </span>
          <span className='flex justify-center w-full'>
            {following}
          </span>
        </div>
      </div>
      {isLoginUser ? 
        <div className='flex w-full gap-2'>
          <ProfileButtonEdit />
          <ProfileLogoutButton />
        </div>
        : 
        <div className='flex w-full items-center justify-between gap-2'>
          <ProfileButtonFollow />
          <ProfileButtonChat />
        </div>
      }
    </div>
      <div className='absolute right-[16.5rem] top-[3.45rem] flex h-[130px] w-[130px] z-10 rounded-full overflow-hidden'> 
        <Image 
          src={user.image || defaultImage} 
          width={200}
          height={200}
          alt="" 
          className='min-h-full min-w-full object-cover' 
        />
      </div>
    </div>
  )
}

export default ProfileHeader