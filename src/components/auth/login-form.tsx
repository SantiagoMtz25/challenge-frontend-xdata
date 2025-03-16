import Image from "next/image";
import InputField from "./form-input";
import LoginBtn from "./login-btn";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="w-[380px] h-[710px] sm:w-[600px] sm:h-[582px] md:w-[380px] md:h-[582px] bg-white 
    rounded-[8px] font-mulish flex flex-col justify-between items-center py-[40px] px-[32px]">
      <div className="flex flex-col items-center">
        <Image src={"/logologo.svg"} width={48} height={48} alt="Logo Image" />
        <span className="text-center text-[#A4A6B3] tracking-[0.4px] pt-[8px]">
          Dashboard Kit
        </span>
      </div>

      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-[24px] text-[#252733] font-bold tracking-[0.3px]">
          Log In to Dashboard Kit
        </h1>
        <span className="text-[14px] text-[#9FA2B4] font-extralight tracking-[0.3px] leading-[20px]">
          Enter your email and password below
        </span>
      </div>

      <form className="w-full flex flex-col items-center gap-6">
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
      </form>

      <p className="text-center text-[#9FA2B4] text-[14px] tracking-[0.3px] leading-[20px]">
        Don't have an account?{" "}
        <Link href="/" className="text-[#3751ff] hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
