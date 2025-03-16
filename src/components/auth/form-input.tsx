"use client"

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  altText?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder, name, altText }) => {
  const [showPassword, setShowPassword] = useState(false);
  const actualType = type === "password" ? (showPassword ? "text" : "password") : type;
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-[100%] flex flex-col gap-1">
      {type === "password" ? (
        <div className="flex justify-between items-center">
          <label className="text-[12px] font-bold text-[#9FA2B4] tracking-[0.3px]">{label}</label>
          <Link href='/' className="text-[10px] font-normal text-[#9FA2B4] tracking-[0.1px]">Forgot password?</Link>
        </div>
      ) : (
        <label className="text-[12px] font-bold text-[#9FA2B4] tracking-[0.3px]">{label}</label>
      )}
      <div className="relative">
        <input
          type={actualType}
          name={name}
          placeholder={placeholder}
          className="w-full py-3 px-4 bg-[#FCFDFE] text-[14px] text-[#4B506D] tracking-[0.3px] leading-[20px]
           border-[1px] border-[#F0F1F7] rounded-[8px] focus:outline-none focus:border-[#3751ff]
          transition-colors"
        />
        {type === "password" && (
          <Image 
            width={17} 
            height={13} 
            src={showPassword ? "/eye.svg" : "/eye-off.svg"} 
            alt={altText || "Toggle password visibility"} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" 
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;