"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { techStacks } from "@/lib/techStack";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { launchBox } from "@/app/actions/launchBox";

export default function Boxes() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="container mx-auto flex flex-col gap-5 md:p-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Button onClick={async () => launchBox("ubuntu", "")}>
        LAUNCH UBUNTU
      </Button>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto p-6"
        variants={containerVariants}
      >
        <Cols2Block
          itemVariants={itemVariants}
          name={techStacks[0].name}
          image={techStacks[0].image}
          description={techStacks[0].description}
        />
        <Cols1Block
          itemVariants={itemVariants}
          name={techStacks[1].name}
          image={techStacks[1].image}
          description={techStacks[1].description}
        />
        <Cols3Block
          itemVariants={itemVariants}
          name={techStacks[2].name}
          image={techStacks[2].image}
          description={techStacks[2].description}
        />
      </motion.div>

      <style jsx>{`
        .glow-container {
          position: relative;
        }
        .glow-container::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(
            circle,
            rgba(255, 182, 193, 0.7) 0%,
            rgba(255, 182, 193, 0) 70%
          );
          filter: blur(20px);
          z-index: 1;
        }
        .glow-container:hover::before {
          background: radial-gradient(
            circle,
            rgba(255, 182, 193, 0.9) 0%,
            rgba(255, 182, 193, 0) 70%
          );
        }
      `}</style>
    </motion.div>
  );
}

function Cols2Block({
  itemVariants,
  name,
  description,
  image,
}: {
  itemVariants: any;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <>
      <motion.div
        className="flex flex-col md:grid md:grid-cols-2 gap-4 p-5 md:col-span-2 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-indigo-900 rounded-xl h-auto md:min-h-[400px]"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center md:hidden mb-4">
          <motion.img
            src={image}
            alt="vscode"
            className="w-32 h-32 md:w-48 md:h-48"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center md:p-4 ">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center md:text-left text-white"
            variants={itemVariants}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-center md:text-left text-gray-200"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <div className="flex md:flex-row flex-col justify-start">
            <Button className="mt-5 px-9 rounded-2xl font-bold text-md">
              Launch Now
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center ">
          <motion.img
            src={image}
            alt="vscode"
            className="w-32 h-32 md:w-72 md:h-72"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      </motion.div>
    </>
  );
}

function Cols1Block({
  itemVariants,
  name,
  description,
  image,
}: {
  itemVariants: any;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <>
      <motion.div
        className="flex flex-col justify-between gap-4 p-5 md:col-span-1 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-emerald-900 rounded-xl h-auto md:min-h-[400px]"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <motion.img
            src={image}
            alt="terminal"
            className="w-32 h-32 md:w-48 md:h-48"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left text-white"
            variants={itemVariants}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-center md:text-left text-gray-200"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <div className="flex md:flex-row flex-col justify-center">
            <Button className="mt-5 px-9 rounded-2xl font-bold text-md">
              Launch Now
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function Cols3Block({
  itemVariants,
  name,
  description,
  image,
}: {
  itemVariants: any;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <>
      <motion.div
        className="flex flex-col md:grid md:grid-cols-2 gap-4 p-5 md:col-span-3 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-pink-900 rounded-xl h-auto md:min-h-[400px]"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center md:hidden mb-4">
          <motion.div
            className="relative glow-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={image}
              alt="Various technology stack logos"
              className="w-60 h-60 md:w-72 md:h-72 relative z-10"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-5 justify-center md:p-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center md:text-left text-white"
            variants={itemVariants}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-center md:text-left text-gray-200"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <div className="flex md:flex-row flex-col justify-start">
            <Button className="mt-5 px-9 rounded-2xl font-bold text-md">
              Launch Now
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <motion.div
            className="relative glow-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={image}
              alt="Various technology stack logos"
              className="w-32 h-32 md:w-96 md:h-96 relative z-10"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
