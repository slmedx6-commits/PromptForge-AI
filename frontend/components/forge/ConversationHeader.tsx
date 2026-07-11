"use client";

export default function ConversationHeader() {
  return (
    <div className="mb-6 flex items-center justify-between border-b pb-4">
      <div>
        <h1 className="text-3xl font-bold">
          PromptForge AI
        </h1>

        <p className="text-gray-500">
          AI Prompt Engineering Workspace
        </p>
      </div>

      <div className="rounded-lg bg-blue-600 px-4 py-2 text-white">
        Online
      </div>
    </div>
  );
}