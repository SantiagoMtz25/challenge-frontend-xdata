import Image from 'next/image'
import React from 'react'

interface TableBtnProps {
  title: string;
}

const TableBtn: React.FC<TableBtnProps> = ({ title }) => {
  const isUpload = title === "Upload";
  
  return (
    <button className={`px-4 py-2 rounded-lg font-medium text-[14px] flex items-center justify-center gap-2 
    ${isUpload ? "bg-[#7F56D9] text-white" : "bg-white text-[#344054] border border-[#D0D5DD]"} 
    hover:shadow-sm transition-all cursor-pointer hover:scale-105 active:scale-100`}>
      {isUpload && <Image width={20} height={20} alt="" src="/upload-cloud.svg" />}
      {title}
    </button>
  )
}

export default TableBtn