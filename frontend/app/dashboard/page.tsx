"use client";

import Link from "next/link";
import AppLayout from "@/components/layout/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl px-8 py-12">

        {/* Header */}
        <div className="text-center">

          <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            PromptForge AI
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            AI-Powered Prompt Engineering Platform
          </p>

          <p className="mx-auto mt-3 max-w-4xl text-gray-400">
            Create professional AI prompts, enhance them with Artificial
            Intelligence, analyze them using Machine Learning and Data
            Science, and manage your prompt history from one place.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* PromptForge Card */}
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400">

            <div className="text-5xl">🚀</div>

            <h2 className="mt-6 text-3xl font-bold">
              PromptForge AI
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              Generate powerful AI prompts with intelligent prompt
              enhancement, Machine Learning analysis and Data Science
              insights.
            </p>

            <Link
              href="/forge"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Open Workspace
            </Link>

          </div>

          {/* History Card */}
          <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-400">

            <div className="text-5xl">📜</div>

            <h2 className="mt-6 text-3xl font-bold">
              Prompt History
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              View all previously enhanced prompts along with their
              creation date, time, Machine Learning analysis and
              Data Science statistics.
            </p>

            <Link
              href="/history"
              className="mt-8 inline-block rounded-xl bg-purple-500 px-6 py-3 font-semibold text-white transition hover:bg-purple-400"
            >
              Open History
            </Link>

          </div>

        </div>

      </div>
    </AppLayout>
  );
}