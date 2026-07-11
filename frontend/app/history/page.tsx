"use client";

import { useEffect, useState } from "react";
import AppLayout from "@/components/layout/AppLayout";

interface HistoryItem {
  prompt: string;
  enhanced: string;
  analysis: any;
  date: string;
  time: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("prompt-history");

    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="text-5xl font-bold">
          Prompt History
        </h1>

        <p className="mt-4 text-gray-300">
          Review your previous prompt sessions.
        </p>

        <div className="mt-10 space-y-6">

          {history.length === 0 ? (

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-gray-400">
              No prompt history found.
            </div>

          ) : (

            history.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >

                <div className="mb-4 flex justify-between text-sm text-gray-400">
                  <span>📅 {item.date}</span>
                  <span>🕒 {item.time}</span>
                </div>

                <h2 className="mb-2 text-lg font-semibold text-cyan-400">
                  User Prompt
                </h2>

                <div className="mb-5 rounded-xl bg-slate-900 p-4">
                  {item.prompt}
                </div>

                <h2 className="mb-2 text-lg font-semibold text-purple-400">
                  Enhanced Prompt
                </h2>

                <div className="mb-5 whitespace-pre-wrap rounded-xl bg-slate-900 p-4">
                  {item.enhanced}
                </div>

                <h2 className="mb-3 text-lg font-semibold text-green-400">
                  ML Analysis
                </h2>

                <div className="grid gap-3 md:grid-cols-2">

                  <div>
                    <strong>Score:</strong>{" "}
                    {item.analysis?.quality?.score}
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

                <h2 className="mt-6 mb-3 text-lg font-semibold text-yellow-400">
                  Data Science Analysis
                </h2>

                <div className="grid gap-3 md:grid-cols-3">

                  <div>
                    <strong>Words:</strong>{" "}
                    {item.analysis?.statistics?.word_count}
                  </div>

                  <div>
                    <strong>Characters:</strong>{" "}
                    {item.analysis?.statistics?.character_count}
                  </div>

                  <div>
                    <strong>Reading Time:</strong>{" "}
                    {item.analysis?.statistics?.reading_time}
                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>
    </AppLayout>
  );
}