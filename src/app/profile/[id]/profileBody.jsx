import ProfilePapularPost from "./profilePapularPost"
import ProfilePost from "./profilePost"

const ProfileBody = () => {
  return (
    <div className="flex justify-center items-start xl:gap-[15rem] w-full h-svh px-4 mt-4 pb-[400px] overflow-y-scroll">
      <ProfilePost />
      {/* <ProfilePapularPost /> */}
    </div>
  )
}

export default ProfileBody