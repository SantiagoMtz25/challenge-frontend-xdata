import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NotificationIcon from "../../../public/new.svg";
import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex'>
      <div className='w-full flex justify-between'>
        <h1 className='text-[#252733] font-bold text-[24px] tracking-[0.3px]'>Overview</h1>
        
        
        <div className='flex justify-center items-center gap-[20px]'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#c5c7cd" }} className='w-[16px] h-[16px] cursor-pointer' />
          <Image width={16} height={16} alt='Notification Icon' src={NotificationIcon} className='cursor-pointer'/>
        
          <div className='h-[32px] border-l border-[#c5c7cd] mx-4 self-end'></div>
        
        
          <div className='flex justify-center items-center gap-[14px]'>
            <h3 className='text-[#252733] font-semibold tracking-[0.2px] leading-[20px] text-[14px]'>Jones Ferdinand</h3>
            <Image width={44} height={44} alt='Profile Image' src={"/photo.svg"} className='cursor-pointer' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header