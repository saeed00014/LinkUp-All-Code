"use client"
import { useContext, useState } from 'react'
import { ProfileContext } from '@/context/context'
import ProfileEdit from './profileEdit'
import defaultImage from '@/assets/images/default.jpg'
import testProfile2 from '@/assets/images/post.jpg'
import Image from 'next/image'
import { profile } from '@/assets/data/data'

const ProfileHeader = () => {
  const { user } = useContext(ProfileContext)
  const [isEditActive, setIsEditActive] = useState(false)

  return (
    <div className='sticky flex items-center w-full h-[234px] z-40'>
      <div className='flex h-full w-full'> 
        <Image 
          src={testProfile2}
          width={2000}
          height={500} 
          alt="" 
          className='min-h-full min-w-full object-cover' 
        />
      </div>
      <div className='absolute left-0 top-0 bottom-0 flex flex-col h-full w-full overflow-y-hidden'>
        <div className='flex flex-col justify-between h-full w-[17rem] py-1 pr-4 pl-2 dark:bg-gray-800 bg-white z-10 gap-1'>
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
                  {user.following}
                </span>
              </div>
              <div className='flex gap-1'>
                <span>
                  {profile.followers}
                </span>
                <span>
                  {user.follower}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsEditActive(true)} 
              className='text-[#098C95]'
            >
              {profile.editProfile}
            </button>
          </div>
        </div>
      </div>
      <div className='absolute right-[16rem] top-[5rem] flex h-[162px] w-[162px] z-10 rounded-full overflow-hidden'> 
        <Image 
          src={user.image || defaultImage} 
          width={1000}
          height={1000}
          alt="" 
          className='min-h-full min-w-full object-cover' 
        />
      </div>
      {isEditActive &&
        <ProfileEdit setIsEditActive={setIsEditActive} />
      }
    </div>
  )
}

export default ProfileHeader