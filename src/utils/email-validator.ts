export default function EmailValidator(email: string): boolean {
  // typically emails can not be larger than 254 characters
  if (email.length > 254) return false; 

  const emailRegex = /^(?=.{1,64}@.{1,255}$)[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}