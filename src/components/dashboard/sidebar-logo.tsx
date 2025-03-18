import React from 'react'
import Image from 'next/image'
import { motion } from '@/utils/motion'

const SidebarLogo = () => {
  return (
    <motion.div 
      className="w-full flex justify-between sm:justify-center items-center gap-3 px-[9px] py-[13px] sm:px-0 sm:py-0"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Image width={32} height={32} alt="Logo Image" src={`/logologo.svg`} />
      <span className="text-center text-[19px] text-[#A4A6B3] tracking-[0.4px] font-bold hidden lg:inline">
        Dashboard Kit
      </span>

      {/* Right icon for mobile view */}
      <Image width={20} height={20} alt="Notification Icon" src={"/new.svg"} className="sm:hidden" />
    </motion.div>
  )
}

export default SidebarLogo