"use client";

import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">PromptForge AI</h1>
          <p className="mt-2 text-gray-300">
            Build professional AI prompts effortlessly.
          </p>
        </div>

        <div className="mb-8 flex rounded-full bg-white/10 p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 rounded-full py-3 transition ${
              isLogin
                ? "bg-cyan-500 font-semibold text-black"
                : "text-gray-300"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 rounded-full py-3 transition ${
              !isLogin
                ? "bg-cyan-500 font-semibold text-black"
                : "text-gray-300"
            }`}
          >
            Register
          </button>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </motion.div>
    </main>
  );
}