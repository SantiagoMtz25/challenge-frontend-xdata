import Signup from "./signup";
import Logo from "./logo";
import FormHeader from "./form-header";
import FormLogin from "./form-login";

// includes all components for form login card
const LoginCard = () => {
  return (
    <div className="w-[380px] h-[710px] sm:w-[600px] sm:h-[582px] md:w-[380px] md:h-[582px] bg-white 
    rounded-[8px] font-mulish flex flex-col items-center py-10 px-8">
      <Logo />
      
      <FormHeader 
        title="Log In to Dashboard Kit"
        subtitle="Enter your email and password below"
      />

      <FormLogin />

      <Signup />
    </div>
  );
};

export default LoginCard;
