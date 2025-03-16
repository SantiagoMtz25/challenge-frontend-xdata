"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation';

const LoginBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setIsLoading(true);

    // setTimeout to simulate real login time
    setTimeout(() => {
      console.log("Logging in...");
      setIsLoading(false);
    }, 2000);

    router.push("/dashboard");
  };

  return (
    <button 
      className='w-full flex items-center justify-center border-[1px] rounded-[8px] bg-[#3751ff] py-4 
      text-white tracking-[0.2px] leading-[20px] cursor-pointer hover:scale-105 active:scale-95 transition-all' 
      onClick={handleLogin}
      disabled={isLoading}
    >
      Log In
    </button>
  )
}

export default LoginBtn