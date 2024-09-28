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
import { JoinNow } from "@/components/JoinNow";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { data: session, status } = useSession();

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
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
      <Navbar />
      <motion.div
        className="flex flex-col my-9 mb-5 gap-5 justify-center md:mx-6"
        variants={itemVariants}
      >
        <motion.h1
          className="md:text-7xl text-4xl font-bold text-center mt-9"
          variants={itemVariants}
        >
          <motion.span
            className="bg-gradient-to-b from-primary/90 dark:to-primary/60 to-primary/90 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Your
          </motion.span>
          <motion.span variants={itemVariants}>
            {" "}
            <Cover className="rounded p-1">Development Space</Cover>{" "}
          </motion.span>
          <motion.span
            className="md:text-7xl bg-gradient-to-b from-primary/90 dark:to-primary/60 to-primary/90 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            On Cloud!{" "}
          </motion.span>
        </motion.h1>
        <motion.p
          className="mx-auto md:text-xl text-sm text-gray-600 dark:text-gray-400 max-w-xl text-center px-4"
          variants={itemVariants}
        >
          A portable development environment supporting multiple tech stacks,
          accessible via web browser.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-row mx-auto gap-8"
        variants={itemVariants}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
        </motion.div>
      </motion.div>

      <motion.div
        className="flex mx-auto container justify-center my-4 p-3"
        variants={itemVariants}
      >
        <VideoComponent />
      </motion.div>
      <div className="mt-9"></div>
      <motion.div
        className="mt-9 bg-primary/5 py-9 [background-image:radial-gradient(50%_60%_at_top,rgba(200,0,0,0.2),rgba(255,255,255,0))]"
        variants={itemVariants}
      >
        <Features />
      </motion.div>
      <motion.div variants={itemVariants}>
        <JoinNow />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
