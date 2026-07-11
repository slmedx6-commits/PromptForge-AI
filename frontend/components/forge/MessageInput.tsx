"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  loading: boolean;
}

export default function MessageInput({
  value,
  onChange,
  onSend,
  loading,
}: Props) {
  return (
    <div className="mt-6">

      <textarea
        rows={5}
        className="w-full rounded-lg border p-4"
        placeholder="Enter your prompt..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button
        className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white"
        disabled={loading}
        onClick={onSend}
      >
        {loading ? "Enhancing..." : "Enhance Prompt"}
      </button>

    </div>
  );
}