export default function PasswordValidator(password: string): boolean {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(password);
}