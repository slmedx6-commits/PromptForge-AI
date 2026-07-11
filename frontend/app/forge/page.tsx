"use client";

import { useEffect, useRef, useState } from "react";

import EnhancedPrompt from "@/components/forge/EnhancedPrompt";
import EditablePrompt from "@/components/forge/EditablePrompt";
import PromptActions from "@/components/forge/PromptActions";
import { createConversation } from "@/services/conversationService";
import { saveMessage } from "@/services/messageService";

import { enhancePrompt } from "@/services/promptService";
import { savePrompt } from "@/lib/promptHistory";

interface HistoryItem {
  prompt: string;
  enhanced: string;
  analysis: any;
  date: string;
  time: string;
}

export default function ForgePage() {
  const [prompt, setPrompt] = useState("");

  const [history, setHistory] = useState<HistoryItem[]>([]);

  const [loading, setLoading] = useState(false);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [editedPrompt, setEditedPrompt] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);
  const [conversationId, setConversationId] = useState<number | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history]);
  

  const forgePrompt = async () => {
  if (!prompt.trim()) return;

  try {
    setLoading(true);

    let currentConversationId = conversationId;

    // Create conversation only once
    if (!currentConversationId) {
      const conversation = await createConversation(
        prompt.substring(0, 40)
      );

      currentConversationId = conversation.id;

      setConversationId(currentConversationId);
    }

    // Save user's prompt
    await saveMessage(
  currentConversationId!,
  "user",
  prompt
);

    // Get AI response
    const result = await enhancePrompt(prompt);

    // Save AI response
  await saveMessage(
  currentConversationId!,
  "assistant",
  result.enhanced_prompt
);

    savePrompt(prompt, result);

    const now = new Date();

const historyItem: HistoryItem = {
  prompt,
  enhanced: result.enhanced_prompt,
  analysis: result,
  date: now.toLocaleDateString(),
  time: now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};

setHistory((prev) => [...prev, historyItem]);
const stored =
  JSON.parse(localStorage.getItem("prompt-history") || "[]");

stored.unshift(historyItem);

localStorage.setItem(
  "prompt-history",
  JSON.stringify(stored)
);

    setPrompt("");
  } catch (err) {
    console.error(err);
    alert("Failed to enhance prompt.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-5xl p-8">

        <h1 className="mb-8 text-center text-4xl font-bold">
          PromptForge AI
        </h1>

        <textarea
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your prompt..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <button
          onClick={forgePrompt}
          disabled={loading}
          className="mt-4 rounded-lg bg-cyan-600 px-6 py-3"
        >
          {loading ? "Enhancing..." : "Enhance Prompt"}
        </button>

        <div className="mt-10 space-y-8">

{history.map((item, index) => (
            <div
              key={index}
              className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
  <span>📅 {item.date}</span>
  <span>🕒 {item.time}</span>
</div>
              <div>
                <h2 className="mb-2 text-lg font-bold text-cyan-400">
                  👤 User Prompt
                </h2>

                <div className="rounded-lg bg-slate-950 p-4">
                  {item.prompt}
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-lg font-bold text-purple-400">
                  🤖 Enhanced Prompt
                </h2>

                {editingIndex === index ? (
                  <EditablePrompt
                    value={editedPrompt}
                    onSave={(value) => {
                      const copy = [...history];

                      copy[index].enhanced = value;

                      setHistory(copy);

                      setEditingIndex(null);
                    }}
                  />
                ) : (
        <EnhancedPrompt
    value={item.enhanced}
    onChange={(value) => {
        const copy = [...history];
        copy[index].enhanced = value;
        setHistory(copy);
    }}
/>
                )}
              </div>

              

              <div className="rounded-xl bg-slate-950 p-5">

                <h2 className="mb-5 text-xl font-bold">
                  ML Analysis
                </h2>

                <div className="grid gap-4 md:grid-cols-2">

                  <div>
                    <strong>Score:</strong>{" "}
                    {item.analysis?.quality?.score}
                    {item.analysis?.statistics && (
  <div className="mt-8">

    <h2 className="mb-5 text-xl font-bold text-cyan-400">
      📊 Data Science Analysis
    </h2>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-lg bg-slate-900 p-4">
        <p className="text-sm text-slate-400">Words</p>
        <p className="text-2xl font-bold">
          {item.analysis.statistics.word_count}
        </p>
      </div>

      <div className="rounded-lg bg-slate-900 p-4">
        <p className="text-sm text-slate-400">Characters</p>
        <p className="text-2xl font-bold">
          {item.analysis.statistics.character_count}
        </p>
      </div>

      <div className="rounded-lg bg-slate-900 p-4">
        <p className="text-sm text-slate-400">Reading Time</p>
        <p className="text-2xl font-bold">
          {item.analysis.statistics.reading_time}
        </p>
      </div>

      

    </div>

  </div>
)}
                  </div>

                  <div>
                    <strong>Category:</strong>{" "}
                    {typeof item.analysis?.predicted_category === "object"
                      ? item.analysis.predicted_category.label
                      : item.analysis?.predicted_category}
                  </div>

                  <div>
                    <strong>Intent:</strong>{" "}
                    {typeof item.analysis?.predicted_intent === "object"
                      ? item.analysis.predicted_intent.label
                      : item.analysis?.predicted_intent}
                  </div>

                  <div>
                    <strong>Complexity:</strong>{" "}
                    {typeof item.analysis?.predicted_complexity === "object"
                      ? item.analysis.predicted_complexity.label
                      : item.analysis?.predicted_complexity}
                  </div>

                </div>

                {item.analysis?.suggestions?.length > 0 && (

                  <div className="mt-6">

                    <h3 className="mb-3 font-semibold">
                      Suggestions
                    </h3>

                    <ul className="list-disc space-y-2 pl-5">

                      {item.analysis.suggestions.map(
                        (tip: string, i: number) => (
                          <li key={i}>{tip}</li>
                        )
                      )}

                    </ul>

                  </div>

                )}

              </div>

            </div>
          ))}

          <div ref={bottomRef} />

        </div>

      </div>

    </main>
  );
}