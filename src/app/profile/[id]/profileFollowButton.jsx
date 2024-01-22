"use client"
import { useMutation } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"

const ProfileFollowButton = () => {
  const followUnFollow = useMutation(({
    mutationFn: async () => {
      const response = await baseURL.get("")
    }
  }))
  const handleFollow = () => {
    followUnFollow.mutate()
  }
  return (
    <button
      onClick={handleFollow} 
      className='w-full h-[1.8rem] dark:bg-gray-700 bg-gray-200'>
      {profile.follow}
    </button>
  )
}

export default ProfileFollowButton