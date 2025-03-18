"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import Image from 'next/image';
import { motion } from "@/utils/motion"

const DashboardHeader = () => {
  return (
    <motion.header 
      className='hidden sm:flex'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className='w-full flex justify-between'>
        <h1 className='text-[#252733] font-bold text-[24px] tracking-[0.3px]'>Overview</h1>
        
        
        <div className='flex justify-center items-center gap-5'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#c5c7cd" }} className='w-4 h-4 cursor-pointer' />
          <Image width={16} height={16} alt='Notification Icon' src={"./new.svg"} className='cursor-pointer'/>
        
          <div className='h-8 border-l border-[#c5c7cd] mx-4 self-end'></div>
        
        
          <div className='flex justify-center items-center gap-[14px]'>
            <h3 className='text-[#252733] font-semibold tracking-[0.2px] leading-5 text-[14px]'>Jones Ferdinand</h3>
            <Image width={44} height={44} alt='Profile Image' src={"/photo.svg"} className='cursor-pointer' />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default DashboardHeader