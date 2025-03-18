import LoginCard from "@/components/auth/login-card";

// main page that renders the login form
export default function Login() {
  return (
    <div className="w-full min-h-full bg-[#363740] flex justify-center items-center py-[75px] sm:py-0">
      <LoginCard />
    </div>
  );
}