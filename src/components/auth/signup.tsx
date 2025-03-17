"use client"

import Link from "next/link";
import { motion } from "@/utils/motion";

const Signup = () => (
  <motion.p 
    className="h-full flex items-end sm:inline text-center text-[#9FA2B4] text-[14px] tracking-[0.3px] leading-5 mt-8"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}   
  >
    Don't have an account?{" "}
    <Link href="/" className="text-[#3751ff] hover:underline">Sign up</Link>
  </motion.p>
);

export default Signup;