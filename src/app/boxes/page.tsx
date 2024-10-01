"use client";

import { Navbar } from "@/components/navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if(session == null){
    router.push('/')
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
      {JSON.stringify(session)}
      <Navbar />
      
    </motion.div>
  );
}
