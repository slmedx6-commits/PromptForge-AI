"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -150, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[150px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
        />
      </div>

      {/* Navbar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <h1 className="text-3xl font-bold">
          PromptForge AI
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#features" className="hover:text-cyan-400">Features</a>
          <a href="#models" className="hover:text-cyan-400">AI Models</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
        </nav>

       <div>
         <Link
           href="/auth"
           className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
        >
          Get Started
        </Link>
       </div> 
      </header>

      {/* Hero */}
      <section className="relative z-20 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-6xl font-extrabold leading-tight md:text-8xl"
        >
          Build Professional AI Prompts
          <br />
          For Every AI Model
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 max-w-3xl text-xl text-gray-300"
        >
          PromptForge AI transforms simple ideas into structured,
          production-ready prompts that work with ChatGPT, Claude,
          Gemini, DeepSeek, Qwen, Llama, Grok, Copilot and many more.
        </motion.p>

        <div className="mt-14">

          <Link
            href="/auth"
            className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-12 py-5 text-lg font-bold text-white shadow-2xl transition duration-300 hover:scale-105"
        >
          Get Started →
        </Link>

      </div>

      </section>

    </main>
  );
}