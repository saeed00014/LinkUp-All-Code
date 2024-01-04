import React from 'react'
import ProfileHeader from './profileHeader'
import PageHeader from '@/components/pageHeader'
import { profile } from '@/assets/data/data'
import ProfileBody from './profileBody'

const Profile = () => {
  return (
    <section className='flex flex-col w-full'>
      <PageHeader title={profile.profile}/>
      <ProfileHeader />
      <ProfileBody />
    </section>
  )
}

export default Profile