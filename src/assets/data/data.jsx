export const login = {
  errorMessage: "ایمیل یا رمز عبور صحیح نیست",
  submit: "ورود",
  forgotPass: "رمز عبور را فراموش کرده ام",
  register: "ثبت نام",
  email: "ایمیل",
  pass: "رمز عبور"
}

export const selectOptionsMounths = ["فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند"
]

export const register = {
  register: "ثبت نام",
  email: "ایمیل",
  pass: "رمز عبور",
  name: "نام",
  userName: "نام کاربری",
  lastName: "نام خوانوادگی",
  gender: "جنسیت",
  birthDate: "تاریخ تولد",
  fillErorr: "باید پر شود",
  emailErorr: "باید شامل @ و بیش از 10 حرف باشد",
  emailRepeated: "ایمیل تکراری است",
  userNameErorr: "باید بین 3 تا 15 حرف باشد",
  userNameRepeated: "نام کاربری تکراری است",
  female: "زن",
  male: "مرد",
  passErorr: "باید بین 8 تا 18 حرف باشد",
  passRepeat: "تکرار رمز عبور",
  passRepeatErorr: "رمز عبور باید تکرار شود",
  passRepeatedErorr: "رمز تکرار شده صحیح نیست",
  genderErorr: "باید پر شود",
  birthErorr: "تاریخ تولد قابل قبول نیست"
}

import { HiOutlineHome } from 'react-icons/hi'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { TiMessages } from 'react-icons/ti'
import { HiOutlineUser } from 'react-icons/hi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { CgMoreO } from 'react-icons/cg'
import { MdOutlineNotificationsNone } from 'react-icons/md'

export const mainHeaderLinks = [
  {
    name: 'خانه',
    path: '/',
    icon: <HiOutlineHome />
  },
  {
    name: 'جستجو',
    path: '/explore',
    icon: <PiMagnifyingGlassBold />
  },
  {
    name: 'هشدار ها',
    path: '/explore',
    icon: <MdOutlineNotificationsNone />
  },
  {
    name: 'پیام ها',
    path: '/my/messages',
    icon: <TiMessages />
  },
  {
    name: 'گروه ها',
    path: '/my/groups',
    icon: <HiOutlineUserGroup />
  },
  {
    name: 'بیشتر',
    path: '#',
    icon: <CgMoreO />
  }
]

export const post = {
  comments: "نظرات",
  comment: "مشاهده نظرات",
  like: "دوست داشتن",
  share: "اشتراک گذاری"
}

export const postMake = {
  video: "فیلم",
  image: "عکس",
  tag: "تگ ها",
  placeholder: "به چه چیزی فکر میکنید ؟"
}

export const postEdit = {
  postEdit: "ساخت پست",
  text: "متن خود را وارد کنید",
  image: "آپلود عکس و فیلم",
  submit: "اشتراک گذاری",
  imageChoose: "انتخاب فایل",
  noChoosenImage: "هیچ فایلی انتخاب نشده",
  tag: "اضافه کردن تگ"
}

export const profile = {
  profile: "پروفایل"
}