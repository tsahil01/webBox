"use client";

import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center min-h-screen p-5">
        <h1 className="text-7xl font-bold">Hello World</h1>
        User: {JSON.stringify(session?.user)} {status}
        <Button onClick={()=> signIn()}>Login</Button>
        <Button onClick={()=> signOut()}>Logout</Button>
      </div>
    </>
  );
}
