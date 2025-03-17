"use client"

import { motion } from "@/utils/motion";

interface FormHeaderProps {
  title: string; 
  subtitle: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle }) => (
  <motion.div 
    className="flex flex-col items-center gap-3 text-center mt-8"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}  
  >
    <h1 className="text-[24px] text-[#252733] font-bold tracking-[0.3px]">
      {title}
    </h1>
    <span className="text-[14px] text-[#9FA2B4] font-extralight tracking-[0.3px] leading-5">
      {subtitle}
    </span>
  </motion.div>
);

export default FormHeader;