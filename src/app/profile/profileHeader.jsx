"use client"
import testProfile from '@/assets/images/profile.jpg'
import testProfile2 from '@/assets/images/post.jpg'
import Image from 'next/image'
import { profile } from '@/assets/data/data'
import { useState } from 'react'
import ProfileEdit from './profileEdit'

const ProfileHeader = () => {
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
          <div className='flex flex-col gap-1'>
            <div className="text-[1.3rem]">
              <span>
                {profile.name}
              </span>
              <span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <span>
                {profile.id}
              </span>
            </div>
            <span>
              {profile.fullName}
            </span>
            <div>
              <span>
                {profile.job}
              </span>
              <span>
                &nbsp;&nbsp;_&nbsp;&nbsp;
              </span>
              <span>
                {profile.job2}
              </span>
            </div>
            <a href='nasrin007jf.com'>
              nasrin007jf.com
            </a>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <div className='flex gap-2'>
              <div className='flex gap-1'>
                <span>
                  {profile.following}
                </span>
                <span>
                  213K
                </span>
              </div>
              <div className='flex gap-1'>
                <span>
                  {profile.followers}
                </span>
                <span>
                  213K
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
          src={testProfile} 
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