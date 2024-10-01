"use client";

import { Navbar } from "@/components/navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Boxes from "@/components/BoxesCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  if (session == null) {
    router.push("/");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center mx-auto gap-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-yellow-400 text-black">{JSON.stringify(session)}</div>

      <Navbar />
      <div className="bg-primary/1 [background-image:radial-gradient(80%_80%_at_left_bottom,rgba(200,0,0,0.2),rgba(255,255,255,0))]">
        <div className="container mx-auto px-5 flex flex-row justify-between my-auto h-full">
          <h3 className="md:text-4xl text-xl font-semibold mt-2">
            {getGreeting()}, {session?.user?.name?.split(" ")[0]}
          </h3>

          <div className="my-auto">
            <div className="flex mx-auto w-xl  justify-between px-2">
              <Input
                type="email"
                placeholder="Search Container"
                className="min-w-md rounded-full border outline-none"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <Boxes />
        </div>
      </div>
    </motion.div>
  );
}
