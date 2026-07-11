"use client";

import { useState } from "react";

import { comparePrompts } from "@/services/comparisonService";

export default function ComparisonPage() {

  const [original, setOriginal] = useState("");

  const [enhanced, setEnhanced] = useState("");

  const [result, setResult] = useState<any>();

  async function compare() {

    const data = await comparePrompts(
      original,
      enhanced,
    );

    setResult(data);

  }

  return (

    <div className="p-10 text-white">

      <h1 className="text-4xl mb-6">
        Prompt Comparison
      </h1>

      <textarea

        value={original}

        onChange={(e)=>setOriginal(e.target.value)}

        placeholder="Original Prompt"

        className="w-full h-40 p-4 bg-slate-900 rounded"

      />

      <textarea

        value={enhanced}

        onChange={(e)=>setEnhanced(e.target.value)}

        placeholder="Enhanced Prompt"

        className="w-full h-40 p-4 bg-slate-900 rounded mt-5"

      />

      <button

        onClick={compare}

        className="mt-5 bg-blue-600 px-6 py-3 rounded"

      >
        Compare
      </button>

      {result && (

        <div className="mt-8 bg-slate-800 rounded-xl p-6">

          <p>Original Words : {result.original_words}</p>

          <p>Enhanced Words : {result.enhanced_words}</p>

          <p>Improvement : {result.improvement}</p>

          <p>Improvement % : {result.improvement_percent}%</p>

        </div>

      )}

    </div>

  );

}