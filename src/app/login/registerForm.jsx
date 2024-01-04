import { useRef, useState } from "react"
import { patterns, selectOptionsMounths } from "@/assets/data/data"
import { register } from "@/assets/data/data"
import ErorrIcon from "./erorrIcon"
import ErorrText from "./erorrText"
import RegisterHeader from "./registerHeader"

const RegisterForm = ({setRegister}) => {
  const ref = useRef()
  const [firstNameErorr, setFirstNameErorr] = useState(false)
  const [lastNameErorr, setLastNameErorr] = useState(false)
  const [emailErorr, setEmailErorr] = useState(false)
  const [usernameErorr, setUsernameErorr] = useState(false)
  const [birthErorr, setBirthErorr] = useState(false)
  const [genderErorr, setGenderErorr] = useState(false)
  const [passwordErorr, setPasswordErorr] = useState(false)
  const [confirmPasswordErorr, setConfirmPasswordErorr] = useState(false)
  const [confirmPasswordErorrMessage, setConfirmPasswordErorrMessage] = useState("")
  const [repeatedUserName, setRepeatedUserName] = useState("")
  const [repeatedEmail, setRepeatedEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentRef = ref.current
    const firstName = currentRef.firstName.value
    const lastName = currentRef.lastName.value
    const email = currentRef.email.value
    const username = currentRef.username.value
    const days = currentRef.days.value
    const mounths = currentRef.mounths.value
    const years = currentRef.years.value
    const gender = currentRef.gender.value
    const password = currentRef.password.value
    const confirmPassword = currentRef.confirmPassword.value

    if(password == confirmPassword && password != "") {setConfirmPasswordErorrMessage(false)} 
    if(password != confirmPassword && password != "") {setConfirmPasswordErorrMessage(true)}
    if(firstName == "" || firstName.length > 20) {setFirstNameErorr(true)}
    if(lastName == "" || lastName.length > 20) {setLastNameErorr(true)}
    if(!patterns.email.test(email)) {setEmailErorr(true)}
    if(!patterns.userName.test(username)) {setUsernameErorr(true)}
    if(!patterns.password.test(password)) {setPasswordErorr(true)}
    if(confirmPassword == "") {setConfirmPasswordErorr(true)}
    if(gender != "male" && gender != "female") {setGenderErorr(true)}
    if(years >= 1384) {setBirthErorr(true)}
    if(!confirmPasswordErorrMessage && !firstNameErorr && !lastNameErorr && !emailErorr && !passwordErorr && !genderErorr && !birthErorr) { }
  } 

  const onChangeBlur = (e) => {
    const target = e.target.name
    const currentRef = ref.current
    switch(target) {
      case "firstName":
        const firstName = currentRef.firstName.value
        if(firstName == ""|| firstName.length > 25) { 
          setFirstNameErorr(true) 
        } else {
          setFirstNameErorr(false)
        }
        break;
        case "lastName":
        const lastName = currentRef.lastName.value
        if(lastName == ""|| lastName.length > 25) { 
          setLastNameErorr(true) 
        } else {
          setLastNameErorr(false)
        }
        break;
      case "email":
        if(patterns.email.test(currentRef.email.value)) { 
          setEmailErorr(false) 
        } else {
          setEmailErorr(true)
        }
        break;
      case "username":
        if(patterns.userName.test(currentRef.username.value)) { 
          setUsernameErorr(false) 
        } else {
          setUsernameErorr(true)
        }
        break;
      case "password":
        if(patterns.password.test(currentRef.password.value)) { 
          setPasswordErorr(false) 
        } else {
          setPasswordErorr(true)
        }
        break;
      case "confirmPassword":
        if(currentRef.confirmPassword.value == "") { 
          setConfirmPasswordErorr(true) 
        } else {
          setConfirmPasswordErorr(false)
        }
        break;
      case "gender":
        const gender = currentRef.gender.value
        if(gender == "male" || gender == "femal") { 
          setGenderErorr(false) 
        } else {
          setGenderErorr(false) 
        }
        break;
      case "years":
        if(currentRef.years.value >= 1384) { 
          setBirthErorr(true) 
        } else {
          setBirthErorr(false)
        }
      break;
    }
  }
  const days = []
  for (let i = 1; i <= 31; i++ ) {
    days.push(i)
  }
  const years = []
  for (let i = 1402; i >= 1302; i-- ) {
    years.push(i)
  }
  return (  
    <form 
      ref={ref} 
      onSubmit={(e) => handleSubmit(e)} 
      className=" flex flex-col bg-white dark:bg-gray-900 md:gap-4 gap-3 [&>div]:relative [&>div]:flex [&>div]:items-center [&>div>input]:bg-gray-200 dark:[&>div>input]:bg-gray-800 [&>div>input]:h-10 [&>div>input]:w-full [&>div>input]:px-2 [&>div>input]:pb-1 shadow-3xl p-4 pt-2 w-[400px] rounded-[.5rem]"
    >
      <RegisterHeader setRegister={setRegister}/>
      <div className="flex items-center w-full gap-2 [&>div]:relative [&>div]:flex [&>div]:items-center [&>div>input]:bg-gray-200 dark:[&>div>input]:bg-gray-800 [&>div>input]:h-10 [&>div>input]:w-full [&>div>input]:px-2 [&>div>input]:pb-1">
        <div>
          <input 
            type="name" 
            id="firstName" 
            name="firstName" 
            placeholder={register.name}
            onBlur={(e) => onChangeBlur(e)} 
            onChange={(e) => onChangeBlur(e)} 
            className={`${firstNameErorr ? "border-text-error border-[1px]" : ""}`} 
          />
          {firstNameErorr && 
            <ErorrIcon text={register.fillErorr}/>}
        </div>
        <div>
          <input 
            type="name" 
            id="lastName" 
            name="lastName" 
            placeholder={register.lastName}
            onBlur={(e) => onChangeBlur(e)} 
            onChange={(e) => onChangeBlur(e)} 
            className={`${lastNameErorr ? "border-text-error border-[1px]" : ""}`} 
          />
          {lastNameErorr && 
            <ErorrIcon text={register.fillErorr}/>}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <input 
          type="text" 
          id="email" 
          name="email"  
          placeholder={register.email}
          onBlur={(e) => onChangeBlur(e)} 
          onChange={(e) => onChangeBlur(e)} 
          className={`${emailErorr ? "border-text-error border-[1px]" : ""}`} 
        />
        {emailErorr && 
          <ErorrIcon text={register.emailErorr}/>}
        {repeatedEmail && 
          <ErorrText text={register.emailRepeated}/>}
      </div>
      <div className="flex flex-col justify-center">
        <input 
          type="username" 
          id="username" 
          name="username" 
          placeholder={register.userName}
          onBlur={(e) => onChangeBlur(e)} 
          onChange={(e) => onChangeBlur(e)} 
          className={`${usernameErorr ? "border-text-error border-[1px]" : ""}`} 
        />
        {usernameErorr && 
          <ErorrIcon text={register.userNameErorr}/>}
        {repeatedUserName && 
          <ErorrText text={register.repeatedUserName}/>}
      </div>
      <span className="relative flex items-center gap-1 text-[.9rem] w-24">
        {register.birthDate}
        {birthErorr && 
          <ErorrIcon text={register.birthErorr}/>}
      </span>
      <div className="flex w-full md:gap-2 gap-1 [&>select]:h-10 [&>select]:w-full [&>select]:px-2 [&>select]:border [&>select]:bg-white dark:[&>select]:bg-gray-950 [&>select]:appearance-none [&>select]:bg-arrow [&>select]:bg-no-repeat [&>select]:bg-[length:12px_12px] [&>select]:bg-[center_left_.5rem]">
        <select 
          id="days"
          name="days" 
          onChange={(e) => onChangeBlur(e)} 
        >
          {days.map((day, e) => {
            return (
              <option key={e} value={day}>
                {day}
              </option>
            )
          })}
        </select>
        <select 
          id="mounths"
          name="mounths" 
          onChange={(e) => onChangeBlur(e)} 
        >
          {selectOptionsMounths.map((mounth, e) => {
            return (
              <option key={e} value={mounth}>
                {mounth}
              </option>
            )
          })}
        </select>
        <select 
          id="years"
          name="years" 
          onChange={(e) => onChangeBlur(e)} 
        >
          {years.map((year, e) => {
            return (
              <option key={e} value={year}>
                {year}
              </option>
            )
          })}
        </select>
      </div>
      <span className="relative flex items-center gap-1 text-[.9rem] w-24">
        {register.gender}
        {genderErorr && 
          <ErorrIcon text={register.genderErorr}/>}
      </span>
      <div className="flex items-center w-full md:gap-2 gap-1 [&>span]:flex [&>span]:items-center [&>span]:justify-between [&>span>label]:w-full [&>span]:h-10 [&>span]:w-full [&>span]:px-4 [&>span]:border [&>span]:border-bg-theme-darker [&>span]:bg-white dark:[&>span]:bg-gray-950">
        <span>
          <label htmlFor="female">
            {register.female}
          </label>
          <input 
            type="radio" 
            id="female" 
            name="gender" 
            value="female"
            onChange={(e) => onChangeBlur(e)} 
          />
        </span>
        <span>
          <label htmlFor="male">
            {register.male}
          </label>
          <input 
            type="radio" 
            id="male" 
            name="gender" 
            value="male"
            onChange={(e) => onChangeBlur(e)} 
          />
        </span>
      </div>
      <div>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder={register.pass}
          onBlur={(e) => onChangeBlur(e)} 
          onChange={(e) => onChangeBlur(e)} 
          className={`${passwordErorr ? "border-text-error border-[1px]" : ""}`} 
        />
        {passwordErorr && 
          <ErorrIcon text={register.passErorr}/>}
      </div>
      <div>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          placeholder={register.passRepeat}
          onBlur={(e) => onChangeBlur(e)} 
          onChange={(e) => onChangeBlur(e)} 
          className={`${confirmPasswordErorr ? "border-text-error border-[1px]" : ""}`}     
        />
        {confirmPasswordErorr && 
          <ErorrIcon text={register.passRepeatErorr}/>}
      </div>
      {confirmPasswordErorrMessage && 
        <ErorrText text={register.passRepeatedErorr} />}
      <span className="flex justify-center w-full">
        <input 
          type="submit" 
          value={register.register} 
          className="w-[200px] h-10 md:mt-4 mt-2 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-500 text-white rounded-[.3rem] cursor-pointer"
        />
      </span>
    </form>
  )
}

export default RegisterForm