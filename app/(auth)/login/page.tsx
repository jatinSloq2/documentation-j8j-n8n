"use client";

import { useFormState } from "react-dom";
import { loginAction } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [_, action] = useFormState(loginAction, null);

  return (
    <form action={action} className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-96 space-y-4 bg-zinc-900 p-8 rounded-xl animate-slide-up">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <Input name="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button className="w-full">Login</Button>
      </div>
    </form>
  );
}
