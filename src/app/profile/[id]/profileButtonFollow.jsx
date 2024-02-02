"use client"
import { useContext, useState } from "react"
import { ProfileContext } from "@/context/context"
import { useMutation, useQuery } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"
import { profile } from "@/assets/data/data"

const ProfileButtonFollow = () => {
  const { targetUser_id } = useContext(ProfileContext)
  const [isFollowed, setIsFollowed] = useState("")
  const getFollowInfo = useQuery({
    queryKey: [`isFollowed${targetUser_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/follow/${targetUser_id}`)
      setIsFollowed(response.data.isFollowed)
      return response
    }
  })

  const followUnFollow = useMutation(({
    mutationFn: async () => {
      const response = await baseURL.delete(`/follow?targetUser_id=${targetUser_id}`)
    }
  }))
  
  const followFollow = useMutation(({
    mutationFn: async () => {
      const response = await baseURL.post(`/follow?targetUser_id=${targetUser_id}`)
    }
  }))
  
  const handleFollow = () => {
    setIsFollowed(true)
    followFollow.mutate()
  }
  
  const handleUnFollow = () => {
    setIsFollowed(false)
    followUnFollow.mutate()
  }

  return (
    <button
      onClick={isFollowed ? handleUnFollow : handleFollow } 
      className='w-full h-[1.8rem] dark:bg-gray-700 bg-gray-200'
    >
      {isFollowed ?
        profile.unfollow
      :
        profile.follow
      }
    </button>
  )
}

export default ProfileButtonFollow