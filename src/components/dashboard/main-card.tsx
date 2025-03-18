"use client"

import React from 'react'
import { motion } from "@/utils/motion"

interface MainCardProps {
  title: string; 
  num: number;
  animationDelay: number;
}

const MainCard: React.FC<MainCardProps> = ({ title, num, animationDelay }) => {
  return (
    <motion.div 
      className='group w-full max-h-[134px] border-[2px] border-[#F0F1F7] rounded-[8px] cursor-pointer 
    focus:outline-none hover:border-[#3751ff] transition-colors bg-white p-6 text-center'
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ delay: animationDelay }}
    >
      <h2 className='group-hover:text-[#3751ff] text-[#9FA2B4] font-bold text-[19px] tracking-[0.4px]'>{title}</h2>
      <p className='group-hover:text-[#3751ff] text-[#252733] font-bold text-[40px] tracking-[1px]'>{num}</p>
    </motion.div>
  )
}

export default MainCard