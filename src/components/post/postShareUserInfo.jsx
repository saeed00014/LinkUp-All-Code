import { baseURL } from '@/axios/axios'
import { useQuery } from '@tanstack/react-query'
import PostShareUser from './postShareUser'

const PostShareUserInfo = ({user}) => {
  const userInfo = useQuery({
    queryKey: [`userInfo${user.targetUser_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/follow/user/${user.targetUser_id}`)
      return response
    }
  })

  if(!userInfo.isPending, userInfo.data) {
    const user = userInfo.data.data.response
    return (
      <PostShareUser
        user={user}
      />
    )
  }
}

export default PostShareUserInfo