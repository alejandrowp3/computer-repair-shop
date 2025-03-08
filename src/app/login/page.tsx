import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
      <h1 className="text-2xl font-bold">Repair Shop</h1>
      <Button asChild>
        <LoginLink postLoginRedirectURL="/home">Sign In</LoginLink>
      </Button>
    </main>
  );
}
