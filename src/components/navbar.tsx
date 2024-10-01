import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { ModeToggle } from "./themeBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ImgAvatar from "./Avatar";

export function Navbar() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="flex flex-row p-3 justify-between border-b container mx-auto">
        <div className="flex flex-row gap-3">
          <h3 className="text-2xl font-bold my-auto">DevSpace</h3>
        </div>
        <div className="flex flex-row gap-3">
          <ModeToggle />
          {status === "authenticated" && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-1 rounded-full"
                  >

                    <ImgAvatar
                      imgSrc={session.user?.image}
                      fallback={`${session.user?.name}`}
                    />
                    
                    <span className="sr-only">Profile</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Signout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {status === "unauthenticated" && (
            <>
              <Button variant={"outline"} onClick={() => signIn()}>
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
