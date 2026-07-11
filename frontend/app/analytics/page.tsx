"use client";

import { useState } from "react";

import { analyzePrompt } from "@/services/analyticsService";

export default function AnalyticsPage() {

  const [original, setOriginal] = useState("");

  const [enhanced, setEnhanced] = useState("");

  const [data, setData] = useState<any>();

  async function analyze() {

    const result = await analyzePrompt(
      original,
      enhanced
    );

    setData(result);

  }

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl mb-6">
        Prompt Analytics
      </h1>

      <textarea
        className="w-full h-40 p-4 bg-slate-900 rounded"
        value={original}
        onChange={(e)=>setOriginal(e.target.value)}
        placeholder="Original Prompt"
      />

      <textarea
        className="w-full h-40 mt-4 p-4 bg-slate-900 rounded"
        value={enhanced}
        onChange={(e)=>setEnhanced(e.target.value)}
        placeholder="Enhanced Prompt"
      />

      <button
        onClick={analyze}
        className="mt-5 px-6 py-3 bg-green-600 rounded"
      >
        Analyze
      </button>

      {data && (

        <div className="mt-8 bg-slate-800 rounded-xl p-6 space-y-2">

          <p>Total Words : {data.total_words}</p>

          <p>Total Characters : {data.total_characters}</p>

          <p>Average Word Length : {data.average_word_length}</p>

          <p>Estimated Reading Time : {data.reading_time}</p>

        </div>

      )}

    </div>

  );

}