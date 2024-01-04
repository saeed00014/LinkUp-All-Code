import { mainHeaderLinks } from '@/assets/data/data'
import Link from 'next/link'

const HeaderLinks = () => {
  return (
    <>
      {mainHeaderLinks.map((link, e) => {
        return (
          <li 
            key={e} 
            className='group w-full xl:py-1'
          >
            <Link 
              href={link.path} 
              className='flex items-center xl:justify-start justify-center w-full'
            >
              <div className='group flex items-center w-full xl:py-3 xl:pr-3 xl:pl-6 pr-3 pl-3 py-3 rounded-[.6rem] gap-5 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 duration-100'>
                <span className='text-3xl'>
                  {link.icon}
                </span>
                <span className='xl:flex hidden text-[1.2rem]'>
                  {link.name}
                </span>
              </div>
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default HeaderLinks