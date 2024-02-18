import Link from "next/link";
import { BiAperture } from "react-icons/bi";

const LogoLink = () => {
  return (
    <li className="group flex items-center justify-center">
      <Link
        href="/"
        className="flex justify-start items-center w-full px-3 py-2 gap-3"
      >
        {/* <span className='relative w-8 h-8'>
          <Image 
            fill={true}
            src={logo}
            alt="logo"
          /> 
        </span> */}
        <span className="group text-3xl group-hover:rotate-180 duration-500">
          <BiAperture />
        </span>
        <span className="xl:flex hidden font-bold h-fit text-[1.4rem]">
          LinkUp
        </span>
      </Link>
    </li>
  );
};

export default LogoLink;
