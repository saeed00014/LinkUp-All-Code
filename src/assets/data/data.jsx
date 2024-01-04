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
  fillErorr: "باید پر شود و کمتر از 25 حرف باشد",
  emailErorr: "باید شامل @ و بین 8 تا 25 حرف لاتین یا اعداد یا حروف خاص باشد",
  emailRepeated: "ایمیل تکراری است",
  userNameErorr: "باید بین 3 تا 15 حرف لاتین باشد",
  userNameRepeated: "نام کاربری تکراری است",
  female: "زن",
  male: "مرد",
  passErorr: "باید بین 8 تا 18 حرف حرف لاتین اعداد و حداقل یک حرف خاص (!@#$%^&*) باشد",
  passRepeat: "تکرار رمز عبور",
  passRepeatErorr: "رمز عبور باید تکرار شود",
  passRepeatedErorr: "رمز تکرار شده صحیح نیست",
  genderErorr: "باید انتخاب شود",
  birthErorr: "تاریخ تولد قابل قبول نیست"
}

export const patterns = {
  password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/,
  userName: /^[A-Za-z]{3,12}$/,
  email: /^(?=.*[@])(?=.*[.])[a-zA-Z0-9!@#$%^&*.]{8,25}$/
}  

import { HiOutlineHome } from 'react-icons/hi'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { TiMessages } from 'react-icons/ti'
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
    path: '/messages',
    icon: <TiMessages />
  },
  {
    name: 'گروه ها',
    path: '/groups',
    icon: <HiOutlineUserGroup />
  }
]

export const headerLinkMore = {
  name: 'بیشتر',
  path: '#',
  icon: <CgMoreO />
}

export const post = {
  comments: "نظرات",
  comment: "ارسال نظرات",
  like: "دوست داشتن",
  share: "اشتراک گذاری",
  allComments: "مشاهده همه نظرات",
  input: "نظر خود را بنویسید",
  name: "نسرین",
  testComment: "چقدر زیبا"
}

export const postMake = {
  video: "فیلم",
  image: "عکس",
  tag: "تگ ها",
  placeholder: "به چه چیزی فکر میکنید ؟"
}

export const postMaker = {
  postMaker: "ساخت پست",
  text: "متن خود را وارد کنید",
  image: "آپلود عکس و فیلم",
  submit: "اشتراک گذاری",
  imageChoose: "انتخاب فایل",
  noChoosenImage: "هیچ فایلی انتخاب نشده",
  tag: "اضافه کردن تگ",
  commentCheck: "بخش نظرات",
  tagCheck: "تگ ها",
  myComment: "اولین نظر",
  dragFile: "فایل خود را بکشید"
}

export const profile = {
  profile: "پروفایل"
}

export const sideBar = {
  searchBar: "جستجوی کاربر",
  papularUsers: "محبوب ترین ها",
  name: "نسرین",
  id: "nasrin007jf",
  follow: "دنبال کردن"
}

export const explore = {
  searchBar: "جستجوی پست",
  sortBy: "دسته بندی بر اساس",
  date: "جدید ترین",
  papularity: "محبوب ترین",
  related: "مرتبط ترین"
}

export const messages = {
  messages: "پیام ها",
  name: "نسرین", 
  id: "nasrin007jf",
  lastMassege: "سلام خوبی فردا میبینمت",
  searchBar: "جستجوی چت",
  enterMessage: "پیام خود را وارد کنید"
}

export const groups = {
  groups: "گروه ها",
  noGroup: "هیچ گروهی وجود ندارد"
}
