"use client";

import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 p-16 text-center">

      <Sparkles
        size={50}
        className="mx-auto text-blue-500"
      />

      <h2 className="mt-6 text-2xl font-bold">

        Ready to Forge

      </h2>

      <p className="mt-3 text-gray-400">

        Write your idea above and click
        <br />
        <strong>Forge Prompt</strong>

      </p>

    </div>
  );
}