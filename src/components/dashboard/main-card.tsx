import React from 'react'

interface MainCardProps {
  title: string; 
  num: number;
}

const MainCard: React.FC<MainCardProps> = ({ title, num }) => {
  return (
    <div className='group w-full max-h-[134px] border-[2px] border-[#F0F1F7] rounded-[8px] cursor-pointer 
    focus:outline-none hover:border-[#3751ff] transition-colors bg-white p-[24px] text-center'>
      <h2 className='group-hover:text-[#3751ff] text-[#9FA2B4] font-bold text-[19px] tracking-[0.4px]'>{title}</h2>
      <p className='group-hover:text-[#3751ff] text-[#252733] font-bold text-[40px] tracking-[1px]'>{num}</p>
    </div>
  )
}

export default MainCard