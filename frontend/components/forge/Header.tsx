"use client";

import { Sparkles, UserCircle2, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <div className="flex items-center gap-3">

          <Sparkles
            size={28}
            className="text-blue-500"
          />

          <div>

            <h1 className="text-xl font-bold">
              PromptForge AI
            </h1>

            <p className="text-xs text-gray-400">
              Forge better prompts instantly
            </p>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <Settings
            className="cursor-pointer text-gray-400 hover:text-white transition"
          />

          <UserCircle2
            size={34}
            className="cursor-pointer text-gray-300 hover:text-white transition"
          />

        </div>

      </div>

    </header>
  );
}