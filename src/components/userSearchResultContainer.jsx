import ResultUser from "./userSearchResult"

const UserSearchResultContainer = ({type}) => {
  return (
    <div className={`absolute top-0 flex flex-col w-full rounded-[.3rem] h-screen ${type == "postShare" ? "max-h-[33.5rem] pt-[3.5rem]" : "pt-[3.6rem]" }  bg-white dark:bg-gray-800 overflow-y-scroll z-30`}>
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
      <ResultUser type={type} />
    </div>
  )
}

export default UserSearchResultContainer