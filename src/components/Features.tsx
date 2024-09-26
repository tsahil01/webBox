"use client"

import { Code2Icon, TerminalSquare, CloudIcon } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className="container mx-auto flex flex-col gap-5 md:p-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3 
        className="text-4xl md:text-5xl font-bold mx-auto"
        variants={itemVariants}
      >
        Our Features
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-6"
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col md:grid md:grid-cols-2 gap-4 p-5 md:col-span-2 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-indigo-900 rounded-xl h-auto md:h-[400px]"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center md:hidden mb-4">
            <motion.img 
              src={'/vscode.png'} 
              alt="vscode" 
              className="w-32 h-32 md:w-48 md:h-48"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
          <div className="flex flex-col gap-5 justify-center md:p-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center md:text-left text-white"
              variants={itemVariants}
            >
              VS Code IDE for Rapid Development
            </motion.h2>
            <motion.p 
              className="text-center md:text-left text-gray-200"
              variants={itemVariants}
            >
              Access a powerful VS Code instance anywhere. Start coding quickly and efficiently with our cloud-based development environment.
            </motion.p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <motion.img 
              src={'/vscode.png'} 
              alt="vscode" 
              className="w-32 h-32 md:w-48 md:h-48"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col justify-between gap-4 p-5 md:col-span-1 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-emerald-900 rounded-xl h-auto md:h-[400px]"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <motion.img 
              src={'/terminal.png'} 
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
              Integrated Terminal
            </motion.h2>
            <motion.p 
              className="text-center md:text-left text-gray-200"
              variants={itemVariants}
            >
              Execute commands and manage your project with our built-in terminal. Seamlessly interact with your development environment.
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:grid md:grid-cols-2 gap-4 p-5 md:col-span-3 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-pink-900 rounded-xl h-auto md:h-[400px]"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center md:hidden mb-4">
            <motion.div 
              className="relative glow-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={'/techstack.png'} 
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
              Multiple Tech-Stacks
            </motion.h2>
            <motion.p 
              className="text-center md:text-left text-gray-200"
              variants={itemVariants}
            >
              Create and destroy development environments instantly. Perfect for testing, short-term projects, or isolated development tasks.
            </motion.p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <motion.div 
              className="relative glow-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={'/techstack.png'} 
                alt="Various technology stack logos" 
                className="w-32 h-32 md:w-72 md:h-72 relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <style jsx>{`
        .glow-container {
          position: relative;
        }
        .glow-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255, 182, 193, 0.7) 0%, rgba(255, 182, 193, 0) 70%);
          filter: blur(20px);
          z-index: 1;
        }
        .glow-container:hover::before {
          background: radial-gradient(circle, rgba(255, 182, 193, 0.9) 0%, rgba(255, 182, 193, 0) 70%);
        }
      `}</style>
    </motion.div>
  )
}