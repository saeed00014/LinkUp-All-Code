import React from 'react'
import Context from './context'
import ProfileHeader from './profileHeader'
import PageHeader from '@/components/pageHeader'
import ProfileBody from './profileBody'
import { profile } from '@/assets/data/data'

const Profile = () => {
  return (
    <section className='flex flex-col w-full'>
      <PageHeader title={profile.profile}/>
      <Context>
        <ProfileHeader />
        <ProfileBody />
      </Context>
    </section>
  )
}

export default Profile