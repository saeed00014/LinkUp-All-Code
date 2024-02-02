export const login = {
  errorMessage: "نام کاربری یا رمز عبور صحیح نیست",
  networkErrorMessage: "ممکن است سرور های لینک آپ یا اینترنت دچار مشکل باشد لطفا بعدا امتحان کنید",
  submit: "ورود",
  forgotPass: "رمز عبور را فراموش کرده ام",
  register: "ثبت نام",
  email: "ایمیل",
  username: "نام کاربری",
  pass: "رمز عبور",
  forgotPass1: "بازیابی رمز عبور",
  forgotpassEmail: "ایمیل خود را وارد کنید",
  forgotPassNoValidEmail: "ایمیل وارد شده موجود نیست"
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
  username: "نام کاربری",
  lastname: "نام خوانوادگی",
  gender: "جنسیت",
  birthDate: "تاریخ تولد",
  fillErorr: "باید پر شود و کمتر از 25 حرف باشد",
  emailErorr: "باید شامل @ و . و بین 8 تا 40 حرف باشد",
  emailRepeated: "ایمیل تکراری است",
  usernameErorr: "باید بین 3 تا 12 حرف لاتین باشد",
  usernameRepeated: "نام کاربری تکراری است",
  female: "زن",
  male: "مرد",
  passErorr: "باید بین 8 تا 18 حرف و حداقل یک حرف لاتین و عدد باشد",
  passRepeat: "تکرار رمز عبور",
  passRepeatErorr: "رمز عبور باید تکرار شود",
  passRepeatedErorr: "رمز تکرار شده صحیح نیست",
  genderErorr: "باید انتخاب شود",
  birthErorr: "تاریخ تولد قابل قبول نیست"
}

export const patterns = {
  fill: /^.{1,25}$/,
  password: /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,18}$/,
  username: /^[A-Za-z0-9]{3,12}$/,
  email: /^(?=.*[@])(?=.*[.])[a-zA-Z0-9!@#$%^&*.]{8,40}$/
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
    path: '/chats/inbox',
    icon: <TiMessages />
  },
  {
    name: 'گروه ها',
    path: '/groups',
    icon: <HiOutlineUserGroup />
  }
]

export const home = {
  noResult: "هیچ نتیجه ای یافت نشد"
}

export const headerLinkMore = {
  name: 'بیشتر',
  path: '#',
  icon: <CgMoreO />
}

export const postText = {
  comments: "نظرات",
  comment: "ارسال نظرات",
  like: "دوست داشتن",
  share: "اشتراک گذاری",
  allComments: "مشاهده همه نظرات",
  input: "نظر خود را بنویسید",
  name: "نسرین",
  testComment: "چقدر زیبا",
  liked: "لایک شده"
}

export const postShare = {
  share: "اشتراک گذاری",
  suggested: "پیشنهادی",
  sendTo: "ارسال به"
} 

export const postMake = {
  video: "فیلم",
  image: "عکس",
  tag: "تگ ها",
  placeholder: "به چه چیزی فکر میکنید ؟"
}

export const postMakerData = {
  postMaker: "ساخت پست",
  text: "متن خود را وارد کنید",
  image: "آپلود عکس و فیلم",
  submit: "اشتراک گذاری",
  imageChoose: "انتخاب فایل",
  noChoosenImage: "هیچ فایلی انتخاب نشده",
  tag: "اضافه کردن تگ",
  tagPlaceHolder: "تگ ها برای سرچ اسفاده میشوند",
  textPlaceHolder: "متن اصلی پست خود را وارد کنید",
  myCommentPlaceHolder: "این به عنوان اولین نظر در ابتدای تخش نظرات قرار میگیرد",
  commentCheck: "بخش نظرات",
  tagCheck: "تگ ها",
  myComment: "اولین نظر",
  dragFile: "فایل خود را بکشید",
  emptyFeild: "هیچ محتوایی وجود ندارد"
}

export const profile = {
  profile: "پروفایل",
  id: "nasrin007jf",
  name: "نسرین",
  lastname: "علیزاده",
  fullName: "نسرین علیزاده",
  job: "عکاس",
  job2: "طراح گرافیک",
  followers: "دنبال کرده",
  following: "دنبال شده",
  editProfile: "تغییر اطلاعات",
  follow: "دنبال کردن",
  unfollow: "دنبال شده",
  sendMessage: "ارسال پیام",
  logout: "خروج از حساب"
}

export const profileEdit = {
  username: "نام کاربری",
  email: "ایمیل",
  name: "نام",
  lastname: "نام خوانوادگی",
  job: "مهارت/شغل",
  job2: "",
  link: "لیک ها",
  bio: "درباره",
  submitEdit: "ذخیره",
  avatar: "آپلود عکس پروفایل",
  background: "آپلود عکس پس زمینه"
}

export const sideBar = {
  searchBar: "جستجوی کاربر",
  papularUsers: "پیشنهاد ها",
  name: "نسرین",
  id: "nasrin007jf",
  follow: "دنبال کردن"
}

export const chatPage = {
  seachBar: "جستجوی چت",
  findChat: "پیدا کردن گفت و گوی جدید",
}

export const explore = {
  searchBar: "جستجوی پست",
  sortBy: "دسته بندی بر اساس",
  date: "جدید ترین",
  papularity: "محبوب ترین",
  related: "مرتبط ترین",
  search: "جستجو",
  noResult: "هیچ نتیجه ای یافت نشد"
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

export const chatData = {
  chooseChat: "یک چت را انتخاب کنید",
  viewProfile: "مشاهده پروفایل"
}

export const notFound = {
  notFound: "هیچ نتیجه ای یافت نشد",
  goHome: "بازگشت به خانه"
}