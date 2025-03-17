"use client"

import Image from "next/image";
import { motion } from "@/utils/motion";

const Logo = () => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <Image src={"/logologo.svg"} width={48} height={48} alt="Logo Image" />
    <span className="text-center text-[#A4A6B3] tracking-[0.4px] pt-3">
      Dashboard Kit
    </span>
  </motion.div>
);

export default Logo;
