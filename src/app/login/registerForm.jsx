import { useRef, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import ErorrIcon from "./erorrIcon"
import ErorrText from "./erorrText"
import RegisterHeader from "./registerHeader"
import { register } from "@/assets/data/data"
import { patterns, selectOptionsMounths } from "@/assets/data/data"
import { baseURL } from "@/axios/axios"
import Cookies from 'universal-cookie'

const RegisterForm = ({setRegister}) => {
  const ref = useRef()
  const [firstnameErorr, setFirstnameErorr] = useState(false)
  const [lastnameErorr, setLastnameErorr] = useState(false)
  const [emailErorr, setEmailErorr] = useState(false)
  const [usernameErorr, setUsernameErorr] = useState(false)
  const [birthErorr, setBirthErorr] = useState(false)
  const [genderErorr, setGenderErorr] = useState(false)
  const [passwordErorr, setPasswordErorr] = useState(false)
  const [confirmPasswordErorr, setConfirmPasswordErorr] = useState(false)
  const [confirmPasswordErorrMessage, setConfirmPasswordErorrMessage] = useState("")
  const [repeatedUsername, setRepeatedUsername] = useState(false)
  const [repeatedEmail, setRepeatedEmail] = useState(false)

  const mutation = useMutation({
    mutationFn: (newUser) => {
      baseURL.post('/user', newUser)
        .then(res => {
          const data = res.data
          if(data.repeated) {
            data.repeated.includes('email') ? 
            (setRepeatedEmail(true), setRepeatedUsername(false))
            : (setRepeatedUsername(true), setRepeatedEmail(false))
          } else {
            setRepeatedEmail(false)
            setRepeatedUsername(false)
          }
          if(data.id) {
            const cookies = new Cookies();
            cookies.set('user', data, {path: "/"})
          }
        })
        .catch(err => {
          (err)
        })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentRef = ref.current
    const firstname = currentRef.firstname.value
    const lastname = currentRef.lastname.value
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
    if(firstname == "" || firstname.length > 20) {setFirstnameErorr(true)}
    if(lastname == "" || lastname.length > 20) {setLastnameErorr(true)}
    if(!patterns.email.test(email)) {setEmailErorr(true)}
    if(!patterns.username.test(username)) {setUsernameErorr(true)}
    if(!patterns.password.test(password)) {setPasswordErorr(true)}
    if(confirmPassword == "") {setConfirmPasswordErorr(true)}
    if(gender != "male" && gender != "female") {setGenderErorr(true)}
    if(years >= 1384) {setBirthErorr(true)}
    if(!confirmPasswordErorrMessage && !firstnameErorr && !lastnameErorr && !emailErorr && !passwordErorr && !genderErorr && !birthErorr) {
    }
    mutation.mutate({
      username : username, 
      email : email, 
      firstname : firstname, 
      lastname : lastname, 
      gender : gender, 
      years : years, 
      password : password
    })
  } 

  const onChangeBlur = (e) => {
    const target = e.target.name
    const currentRef = ref.current
    switch(target) {
      case "firstname":
        const firstname = currentRef.firstname.value
        if(firstname == ""|| firstname.length > 25) { 
          setFirstnameErorr(true) 
        } else {
          setFirstnameErorr(false)
        }
        break;
        case "lastname":
        const lastname = currentRef.lastname.value
        if(lastname == ""|| lastname.length > 25) { 
          setLastnameErorr(true) 
        } else {
          setLastnameErorr(false)
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
        if(patterns.username.test(currentRef.username.value)) { 
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
            id="firstname" 
            name="firstname" 
            placeholder={register.name}
            onBlur={(e) => onChangeBlur(e)} 
            onChange={(e) => onChangeBlur(e)} 
            className={`${firstnameErorr ? "border-text-error border-[1px]" : ""}`} 
          />
          {firstnameErorr && 
            <ErorrIcon text={register.fillErorr}/>}
        </div>
        <div>
          <input 
            type="name" 
            id="lastname" 
            name="lastname" 
            placeholder={register.lastname}
            onBlur={(e) => onChangeBlur(e)} 
            onChange={(e) => onChangeBlur(e)} 
            className={`${lastnameErorr ? "border-text-error border-[1px]" : ""}`} 
          />
          {lastnameErorr && 
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
          placeholder={register.username}
          onBlur={(e) => onChangeBlur(e)} 
          onChange={(e) => onChangeBlur(e)} 
          className={`${usernameErorr ? "border-text-error border-[1px]" : ""}`} 
        />
        {usernameErorr && 
          <ErorrIcon text={register.usernameErorr}/>}
        {repeatedUsername && 
          <ErorrText text={register.usernameRepeated}/>}
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