"use client";

import ChatMessage from "./ChatMessage";

interface Message {
  role: "user" | "assistant";
  message: string;
}

interface Props {
  messages: Message[];
}

export default function ChatWindow({
  messages,
}: Props) {
  return (
    <div className="h-[500px] overflow-y-auto rounded-lg border p-6">

      {messages.length === 0 ? (
        <div className="text-center text-gray-500">
          Start a conversation...
        </div>
      ) : (
        messages.map((msg, index) => (
          <ChatMessage
            key={index}
            role={msg.role}
            message={msg.message}
          />
        ))
      )}

    </div>
  );
}