"use client";

import { Copy } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function EnhancedPrompt({
  value,
  onChange,
}: Props) {
  const copyPrompt = async () => {
    if (!value) return;

    await navigator.clipboard.writeText(value);

    alert("Prompt copied!");
  };

  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-purple-400">
          ⚡ Enhanced Prompt
        </h2>

        
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Your enhanced prompt will appear here..."
        className="h-[420px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-950 p-6 text-white leading-8 outline-none transition focus:border-cyan-400"
      />

      <div className="mt-6 flex justify-end">
        <button
          onClick={copyPrompt}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          <Copy size={18} />
          Copy
        </button>
      </div>
    </div>
  );
}