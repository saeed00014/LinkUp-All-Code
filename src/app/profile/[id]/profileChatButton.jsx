"use client"
import { useMutation } from '@tanstack/react-query'
import { baseURL } from '@/axios/axios'

const ProfileChatButton = () => {
  const chatStatus = useMutation({
    mutationFn: async () => {
      const response = await baseURL.get(`/chat/${targetUser_id}`)
      if(response) {
        const chat_id = response.data.chat_id
        location.href(`/chats/inbox?chat_id=${chat_id}&targetUser_id=${targetUser_id}`)
      }
    }
  })
  
  const handleChat = () => {
    chatStatus.mutate()
  }

  return (
    <button 
      onClick={handleChat}
      className='flex items-center justify-center w-full h-[1.8rem] dark:bg-gray-700 bg-gray-200'
    >
      {profile.sendMessage}
    </button>
  )
}

export default ProfileChatButton