import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ModeToggle } from "./themeBtn";
import { ChevronRight } from "lucide-react";

export function Navbar() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="flex flex-row p-3 justify-between border-b container mx-auto">
        <div className="flex flex-row gap-3">
          <div className="text-2xl font-bold my-auto">DevContainer</div>
        </div>
        <div className="flex flex-row gap-3">
        <ModeToggle/>
          {status === "authenticated" && <>
          <img src={session.user?.image} alt="User img" className="w-8 rounded-full my-auto"></img>
          <Button onClick={() => signOut()}>Logout</Button>
          </>}
          {status === "unauthenticated" && <>
          <Button onClick={() => signIn()}>Login</Button>
          <Button variant={"secondary"} className="my-auto">Try Demo <ChevronRight className="p-0"/></Button>
          </>}
          
        </div>
      </div>
    </>
  );
}
