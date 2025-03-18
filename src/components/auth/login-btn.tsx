import React from 'react'

interface LoginBtnProps {
  isLoading: boolean;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ isLoading }) => {
  
  return (
    <button 
      className='w-full h-12 flex items-center justify-center border-[1px] rounded-[8px] bg-[#3751ff] py-4 
      text-white tracking-[0.2px] leading-5 cursor-pointer hover:scale-105 active:scale-100 transition-all' 
      onClick={() => null}
      disabled={isLoading}
    >
      Log In
    </button>
  )
}

export default LoginBtn