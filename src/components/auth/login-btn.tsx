"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation';

const LoginBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // setIsLoading(true);
    // handle login logic or invoke a hook to handle logic

    router.push("/dashboard");
  };

  return (
    <button 
      className='w-full h-12 flex items-center justify-center border-[1px] rounded-[8px] bg-[#3751ff] py-4 
      text-white tracking-[0.2px] leading-5 cursor-pointer hover:scale-105 active:scale-100 transition-all' 
      onClick={handleLogin}
      disabled={isLoading}
    >
      Log In
    </button>
  )
}

export default LoginBtn