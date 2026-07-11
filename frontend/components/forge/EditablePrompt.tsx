"use client";

import { useState } from "react";

interface Props {
  value: string;
  onSave: (value: string) => void;
}

export default function EditablePrompt({
  value,
  onSave,
}: Props) {
  const [text, setText] = useState(value);

  return (
    <div className="mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        className="w-full rounded-lg border bg-slate-900 p-4 text-white"
      />

      <button
        onClick={() => onSave(text)}
        className="mt-3 rounded bg-green-700 px-4 py-2 text-white"
      >
        Save
      </button>
    </div>
  );
}