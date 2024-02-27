export const login = {
  errorMessage: "نام کاربری یا رمز عبور صحیح نیست",
  networkErrorMessage:
    "ممکن است سرور های لینک آپ یا اینترنت دچار مشکل باشد لطفا بعدا امتحان کنید",
  tryAgain: "تلاش دباره",
  submit: "ورود",
  forgotPass: "رمز عبور را فراموش کرده ام",
  register: "ثبت نام",
  email: "ایمیل",
  username: "نام کاربری",
  pass: "رمز عبور",
  forgotPass1: "بازیابی رمز عبور",
  forgotpassEmail: "ایمیل خود را وارد کنید",
  forgotPassNoValidEmail: "ایمیل وارد شده موجود نیست",
};

export const selectOptionsMounths = [
  "فروردین",
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
  "اسفند",
];
export const selectOptionsDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
  24, 25, 26, 27, 28, 29, 30,
];
export const selectOptionsYears = [
  1403, 1402, 1401, 1400, 1399, 1398, 1397, 1396, 1395, 1394, 1393, 1392, 1391,
  1390, 1389, 1388, 1387, 1386, 1385, 1384, 1383, 1382, 1381, 1380, 1379, 1378,
  1377, 1376, 1375, 1374, 1373, 1372, 1371, 1370, 1369, 1368, 1367, 1366, 1365,
  1364, 1363, 1362, 1361, 1360, 1359, 1358, 1357, 1356, 1355, 1354, 1353, 1352,
  1351, 1350, 1349, 1348, 1347, 1346, 1345, 1344, 1343, 1342, 1341, 1340, 1339,
  1338, 1337, 1336, 1335, 1334, 1333, 1332, 1331, 1330, 1329, 1328, 1327, 1326,
  1325, 1324, 1323, 1322, 1321, 1320, 1319, 1318, 1317, 1316, 1315, 1314, 1313,
  1312, 1311, 1310, 1309, 1308, 1307, 1306, 1305, 1304, 1300, 1301, 1302, 1303,
];

export const registerData = {
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
  birthErorr: "تاریخ تولد قابل قبول نیست",
};

export const patterns = {
  fill: /^.{1,25}$/,
  password: /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,18}$/,
  username: /^[A-Za-z0-9]{3,12}$/,
  email: /^(?=.*[@])(?=.*[.])[a-zA-Z0-9!@#$%^&*.]{8,40}$/,
};

import { HiOutlineHome } from "react-icons/hi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";

export const navItems = [
  {
    name: "خانه",
    path: "/",
    icon: <HiOutlineHome />,
  },
  {
    name: "جستجو",
    path: "/explore",
    icon: <PiMagnifyingGlassBold />,
  },
  {
    name: "هشدار ها",
    path: "/explore",
    icon: <MdOutlineNotificationsNone />,
  },
  {
    name: "پیام ها",
    path: "/chats/inbox",
    icon: <TiMessages />,
  },
  {
    name: "گروه ها",
    path: "/groups",
    icon: <HiOutlineUserGroup />,
  },
];

export const home = {
  noResult: "هیچ نتیجه ای یافت نشد",
};

export const headerLinkMore = {
  name: "بیشتر",
  path: "#",
  icon: <CgMoreO />,
};

export const postText = {
  comments: "نظرات",
  comment: "ارسال نظرات",
  like: "دوست داشتن",
  share: "اشتراک گذاری",
  allComments: "مشاهده همه نظرات",
  input: "نظر خود را بنویسید",
  name: "نسرین",
  testComment: "چقدر زیبا",
  liked: "لایک شده",
  delete: "آیا میخواهید این پست را حذف کنید؟",
  deleteOk: "بله",
  deleteCancel: "خیر",
  problem: "مشکلی وجود دارد لطفا بعدا امتحان کنید",
};

export const postShare = {
  share: "اشتراک گذاری",
  suggested: "پیشنهادی",
  sendTo: "ارسال به",
};

export const postMakerData = {
  video: "فیلم",
  image: "عکس",
  tag: "تگ ها",
  placeholder: "به چه چیزی فکر میکنید ؟",
};

export const postMakerFormData = {
  postMaker: "ساخت پست",
  text: "متن خود را وارد کنید",
  image: "آپلود عکس و فیلم",
  submit: "اشتراک گذاری",
  imageChoose: "انتخاب فایل",
  noChoosenImage: "هیچ فایلی انتخاب نشده",
  tag: "اضافه کردن تگ",
  tagPlaceHolder: "تگ ها برای سرچ اسفاده میشوند",
  textPlaceHolder: "متن اصلی پست خود را وارد کنید",
  myCommentPlaceHolder:
    "این به عنوان اولین نظر در ابتدای تخش نظرات قرار میگیرد",
  commentCheck: "بخش نظرات",
  tagCheck: "تگ ها",
  myComment: "اولین نظر",
  dragFile: "فایل خود را بکشید",
  emptyFeild: "هیچ محتوایی وجود ندارد",
};

export const profile = {
  profile: "پروفایل",
  username: "نام و نام کاربری:",
  bio: "درباره",
  job: "شغل",
  link: "وب سایت",
  followers: "دنبال کرده",
  following: "دنبال شده",
  editProfile: "تغییر اطلاعات",
  follow: "دنبال کردن",
  unfollow: "دنبال شده",
  sendMessage: "ارسال پیام",
  logout: "خروج از حساب",
};

export const EditFormData = {
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
  background: "آپلود عکس پس زمینه",
};

export const sideBar = {
  searchBar: "جستجوی کاربر",
  papularUsers: "پیشنهاد ها",
  name: "نسرین",
  id: "nasrin007jf",
  follow: "دنبال کردن",
};

export const chatPage = {
  seachBar: "جستجوی چت",
  findChat: "پیدا کردن گفت و گوی جدید",
};

export const explore = {
  searchBar: "جستجوی پست",
  sortBy: "دسته بندی بر اساس",
  date: "جدید ترین",
  papularity: "محبوب ترین",
  related: "مرتبط ترین",
  search: "جستجو",
  noResult: "هیچ نتیجه ای یافت نشد",
};

export const messages = {
  messages: "پیام ها",
  name: "نسرین",
  id: "nasrin007jf",
  lastMassege: "سلام خوبی فردا میبینمت",
  searchBar: "جستجوی چت",
  enterMessage: "پیام خود را وارد کنید",
};

export const groups = {
  groups: "گروه ها",
  noGroup: "هیچ گروهی وجود ندارد",
};

export const chatData = {
  chooseChat: "یک چت را انتخاب کنید",
  viewProfile: "مشاهده پروفایل",
  newChat: "چت جدید",
  editChat: "تغییر چتها",
};

export const notFound = {
  notFound: "هیچ نتیجه ای یافت نشد",
  goHome: "بازگشت به خانه",
};
