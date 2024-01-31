import { useRef, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import Input from "./input"
import InputRadio from "./inputRadio"
import InputSelect from "./inputSelect"
import InputSelectTitle from "./inputSelectTitle"
import { baseURL } from "@/axios/axios"
import Cookies from 'universal-cookie'
import { patterns, selectOptionsMounths, register } from "@/assets/data/data"
import CloseHeader from "@/components/closeHeader"

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
            const cookies = new Cookies()
            cookies.set('user', data, {path: "/"})
            location.reload("")
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
    const years = currentRef.years.value
    const gender = currentRef.gender.value
    const password = currentRef.password.value
    const confirmPassword = currentRef.confirmPassword.value

    if(password == confirmPassword && password != "") {
      setConfirmPasswordErorrMessage(false)
    } else {
      setConfirmPasswordErorrMessage(true)
    } 
    if(!patterns.fill.test(firstname)) {setFirstnameErorr(true)}
    if(!patterns.fill.test(lastname)) {setLastnameErorr(true)}
    if(!patterns.email.test(email)) {setEmailErorr(true)}
    if(!patterns.username.test(username)) {setUsernameErorr(true)}
    if(!patterns.password.test(password)) {setPasswordErorr(true)}
    if(!patterns.password.test(confirmPassword)) {setConfirmPasswordErorr(true)}
    if(!patterns.fill.test(gender)) {setGenderErorr(true)}
    if(years >= 1384) {setBirthErorr(true)}
    if(!confirmPasswordErorrMessage && !firstnameErorr && !lastnameErorr && !usernameErorr && !emailErorr && !passwordErorr && !genderErorr && !birthErorr) {
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
      className=" flex flex-col bg-white dark:bg-gray-900 md:gap-4 gap-2 shadow-3xl p-4 pt-0 w-[400px] rounded-[.5rem]"
    >
      <div className="text-[1.5rem] -mb-2">
        <CloseHeader setEvent={setRegister} title={register.register} />
      </div>
      <div className="flex items-center w-full gap-2">
        <Input 
          type="name" 
          id="firstname" 
          name="firstname" 
          placeholder={register.name}
          setError={setFirstnameErorr}
          pattern={patterns.fill}
          isIconError={firstnameErorr}
          iconErrorText={register.fillErorr}
        />
        <Input 
          type="name" 
          id="lastname" 
          name="lastname" 
          placeholder={register.lastname}
          setError={setLastnameErorr}
          pattern={patterns.fill}
          isIconError={lastnameErorr}
          iconErrorText={register.fillErorr}
        />
      </div>
      <Input 
        type="text" 
        id="email" 
        name="email" 
        placeholder={register.email}
        setError={setEmailErorr}
        pattern={patterns.email}
        isIconError={emailErorr}
        iconErrorText={register.emailErorr}
        isTextError={repeatedEmail}
        textErrorText={register.emailRepeated}
      />
      <Input 
        type="username" 
        id="username" 
        name="username" 
        placeholder={register.username}
        setError={setUsernameErorr}
        pattern={patterns.username}
        isIconError={usernameErorr}
        iconErrorText={register.usernameErorr}
        isTextError={repeatedUsername}
        textErrorText={register.repeatedUsername}
      />
      <InputSelectTitle
        title={register.birthDate}
        isIconError={birthErorr}
        iconErrorText={register.birthErorr}
      />
      <div className="flex w-full md:gap-2 gap-1">
        <InputSelect 
          id="days"
          name="days" 
          options={days}
        />
        <InputSelect 
          id="mounths"
          name="mounths" 
          options={selectOptionsMounths}
        />
        <InputSelect 
          id="years"
          name="years" 
          setError={setBirthErorr}
          pattern={patterns.fill}
          options={years}
        />
      </div>
      <InputSelectTitle
        title={register.gender}
        isIconError={genderErorr}
        iconErrorText={register.genderErorr}
      />
      <div className="flex items-center w-full md:gap-2 gap-1">
        <InputRadio 
          label={register.female}
          type="radio" 
          id="female" 
          name="gender" 
          value="female"
          setError={setGenderErorr}
          pattern={patterns.fill}
        />
        <InputRadio 
          label={register.male}
          type="radio" 
          id="male" 
          name="gender" 
          value="male"
          setError={setGenderErorr}
          pattern={patterns.fill}
        />
      </div>
      <Input 
        type="password" 
        id="password" 
        name="password" 
        placeholder={register.pass}
        setError={setPasswordErorr}
        pattern={patterns.password}
        isIconError={passwordErorr}
        iconErrorText={register.passErorr}
      />
      <Input 
        type="password" 
        id="confirmPassword" 
        name="confirmPassword" 
        placeholder={register.passRepeat}
        setError={setConfirmPasswordErorr}
        pattern={patterns.password}
        isIconError={confirmPasswordErorr}
        iconErrorText={register.passRepeatErorr}
        isTextError={confirmPasswordErorrMessage}
        textErrorText={register.passRepeatedErorr}
      />
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