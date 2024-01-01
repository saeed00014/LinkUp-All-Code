import React from 'react'
import testProfile from '@/assets/images/profile.jpg'
import testProfile2 from '@/assets/images/post.jpg'
import Image from 'next/image'

const ProfileHeader = () => {
  return (
    <div className='relative flex items-center w-full h-[234px] '>
      <div className='flex h-full w-full'> 
        <Image 
          src={testProfile2} 
          alt="" 
          className='min-h-full min-w-full object-cover' 
        />
      </div>
      <div className='absolute left-0 top-0 bottom-0 flex flex-col h-full w-full overflow-y-hidden'>
        <div className='flex flex-col justify-between h-full w-[17rem] py-1 pr-4 pl-2 [&>div>span]:text-[14px] dark:bg-gray-800 bg-white z-10'>
          <div className='flex flex-col'>
            <span className='!text-[24px] !font-[400]'>Negarita</span>
            <span>Negar Behroozi</span>
            <div className='flex gap-2'>
              <span>Designer photograer</span>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='flex gap-3'>
              <span>213K Following</span>
              <span>127K Followers</span>
            </div>
            <button className='text-[#098C95]'>Edit Profile</button>
          </div>
        </div>
      </div>
      <div className='absolute right-[16rem] top-[6rem] flex h-[162px] w-[162px] z-10 rounded-full overflow-hidden'> 
        <Image 
          src={testProfile} 
          alt="" 
          className='min-h-full min-w-full object-cover' 
        />
      </div>
    </div>
  )
}

export default ProfileHeader