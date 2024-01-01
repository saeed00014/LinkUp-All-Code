import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import HeaderLinks from './headerLinks'
import LogoLink from './logoLink'
import AcountInfo from './acountInfo'

const Header = () => {
  return (
    <header className='fixed top-0 right-0'>
      <nav className=' md:flex hidden items-start justify-between flex-col h-screen xl:w-[240px] w-[88px] py-2 px-4 border-l-[1px] border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800'>
        <ul className='flex w-full flex-col xl:gap-1 gap-2 '>
          <LogoLink />
          <HeaderLinks />
          <ThemeSwitcher />
        </ul>
        <div className='sticky bottom-0 top-[445px] w-full h-fit mb-2'>
          <AcountInfo />
        </div>
      </nav>
    </header>
  )
}

export default Header