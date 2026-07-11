"use client";

interface Props {
  role: "user" | "assistant";
  message: string;
}

export default function ChatMessage({
  role,
  message,
}: Props) {
  return (
    <div
      className={`mb-4 rounded-lg p-4 ${
        role === "user"
          ? "bg-blue-100 text-right"
          : "bg-gray-100"
      }`}
    >
      <strong>
        {role === "user" ? "You" : "PromptForge"}
      </strong>

      <p className="mt-2 whitespace-pre-wrap">
        {message}
      </p>
    </div>
  );
}