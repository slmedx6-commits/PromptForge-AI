"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 180, 0],
            y: [0, -120, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -180, 0],
            y: [0, 150, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]"
        />

      </div>

      <div className="relative z-10">
        {children}
      </div>

    </main>
  );
}