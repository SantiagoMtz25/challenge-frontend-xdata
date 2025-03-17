"use client"

import React from "react";
import { motion } from "@/utils/motion";
import InputField from "./form-input";
import LoginBtn from "./login-btn";

const FormLogin = () => {
  return (
    <motion.form
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
      <LoginBtn />
    </motion.form>
  );
};

export default FormLogin;
