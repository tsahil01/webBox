"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { createContainer } from "@/config/docker";
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { VideoComponent } from "@/components/YTcomponent";
import Features from "@/components/Features";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="flex flex-col justify-center mx-auto gap-5">
        <Navbar />
        <motion.div
          className="flex flex-col my-9 mb-5 gap-5 justify-center md:mx-6 "
          // TODO: add motion
        >
          <h1 className="md:text-7xl text-4xl font-bold text-center mt-9">
            <span className="bg-gradient-to-b from-primary/90 dark:to-primary/60 to-primary/90 bg-clip-text text-transparent">
              Your
            </span>
            <span className="">
              {" "}
              <Cover className="rounded p-1">Devlopment Space</Cover>{" "}
            </span>
            <span className="md:text-7xl bg-gradient-to-b from-primary/90 dark:to-primary/60 to-primary/90 bg-clip-text text-transparent">
              On Cloud!{" "}
            </span>
          </h1>
          <p className="mx-auto md:text-xl text-sm text-gray-600 dark:text-gray-400 max-w-xl text-center">
            A portable development environment supporting multiple tech stacks,
            accessible via web browser.
          </p>
        </motion.div>

        <div className="flex flex-row mx-auto gap-8">
          <Button className="text-xl p-6 my-auto gap-1 mx-auto inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {status !== "authenticated" && (
              <>
                Try Demo <ChevronRight />{" "}
              </>
            )}
            {status == "authenticated" && (
              <>
              Get Started <ChevronRight />{" "}
            </>
            )}
          </Button>
        </div>

        <div className="flex mx-auto container justify-center my-4 p-3">
          <VideoComponent />
        </div>
        
        <div className="mt-9 bg-primary/5">
          <Features/>
        </div>
      </div>
    </>
  );
}

