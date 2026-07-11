"use client";

interface Props {
  prompt: string;
}

export default function PromptActions({ prompt }: Props) {
  const copyPrompt = async () => {
    if (!prompt) return;

    await navigator.clipboard.writeText(prompt);

    alert("Prompt copied.");
  };

  return (
    <div className="mt-4 flex gap-2">
      <button
        onClick={copyPrompt}
        className="rounded bg-slate-700 px-3 py-2 text-sm font-medium text-white hover:bg-slate-600"
      >
        📋 Copy
      </button>
    </div>
  );
}