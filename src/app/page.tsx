"use client";

import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center min-h-screen p-5">
        <h1 className="text-7xl font-bold">Hello World</h1>
        User: {session?.user?.email}
        <Button onClick={()=>{
          window.location.href = '/api/auth/signin'
        }}>Login</Button>
      </div>
    </>
  );
}
