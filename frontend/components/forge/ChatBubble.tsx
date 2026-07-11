"use client";

interface Props {
  role: "user" | "assistant";
  message: string;
}

export default function ChatBubble({
  role,
  message,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 whitespace-pre-wrap ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}