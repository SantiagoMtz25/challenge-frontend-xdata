"use client"

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "@/utils/motion";
import InputField from "./form-input";
import LoginBtn from "./login-btn";

const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // setIsLoading(true);
    
    try {
      // handle login logic or invoke a hook to handle

      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setIsLoading(false);
    } finally {
    }
  }

  return (
    <motion.form
      onSubmit={hanldeSubmit}
      className="w-full flex flex-col items-center gap-6 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <InputField
        label="EMAIL"
        type="email"
        placeholder="Email address"
        name="email"
      />
      <InputField
        label="PASSWORD"
        type="password"
        placeholder="Password"
        name="password"
        altText="Toggle password visibility"
      />
      <LoginBtn isLoading={isLoading}/>
    </motion.form>
  );
};

export default FormLogin;
