import React from 'react'
import ProfileHeader from './profileHeader'
import PageHeader from '@/components/pageHeader'
import { profile } from '@/assets/data/data'

const Profile = () => {
  return (
    <section className='dark:bg-black bg-gray-200'>
      <PageHeader title={profile.profile}/>
      <ProfileHeader />
    </section>
  )
}

export default Profile