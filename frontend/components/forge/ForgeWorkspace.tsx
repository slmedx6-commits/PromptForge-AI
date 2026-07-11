"use client";

import { useState } from "react";

import ChatWindow from "@/components/forge/ChatWindow";
import PromptActions from "@/components/forge/PromptActions";
import PromptAnalysis from "@/components/forge/PromptAnalysis";
import EditablePrompt from "@/components/forge/EditablePrompt";
import EnhancedPrompt from "@/components/forge/EnhancedPrompt";

import { createConversation } from "@/services/conversationService";
import { saveMessage } from "@/services/messageService";
import { enhancePrompt } from "@/services/promptService";
import { savePrompt } from "@/lib/promptHistory";

interface ChatMessage {
  role: "user" | "assistant";
  message: string;
}

export default function ForgeWorkspace() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [analysis, setAnalysis] = useState<any>(null);

  const [conversationId, setConversationId] = useState<number | null>(null);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [editing, setEditing] = useState(false);

  const [editedPrompt, setEditedPrompt] = useState("");

  const sendPrompt = async () => {
    if (!input.trim()) return;

    const userPrompt = input;

    setInput("");

    try {
      setLoading(true);

      let currentConversationId = conversationId;

      if (!currentConversationId) {
        const conversation = await createConversation(
          userPrompt.substring(0, 40)
        );

        currentConversationId = conversation.id;

        setConversationId(currentConversationId);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          message: userPrompt,
        },
      ]);

      await saveMessage(
        currentConversationId,
        "user",
        userPrompt
      );

      const result = await enhancePrompt(userPrompt);

      setAnalysis(result);

      setEditedPrompt(result.enhanced_prompt);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message: result.enhanced_prompt,
        },
      ]);

      await saveMessage(
        currentConversationId,
        "assistant",
        result.enhanced_prompt
      );

      savePrompt(userPrompt, result);
    } catch (err) {
      console.error(err);
      alert("Failed to enhance prompt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-6">

      <h1 className="mb-6 text-3xl font-bold">
        PromptForge AI
      </h1>

      <ChatWindow messages={messages} />

      <div className="mt-6">

        <textarea
          className="w-full rounded-lg border p-4"
          rows={6}
          placeholder="Describe your prompt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white"
          onClick={sendPrompt}
          disabled={loading}
        >
          {loading ? "Enhancing..." : "Enhance Prompt"}
        </button>

      </div>

      {analysis && (
        <div className="mt-8">

          {editing ? (
            <EditablePrompt
              value={editedPrompt}
              onSave={(value) => {
                setEditedPrompt(value);

                setMessages((prev) => {
                  const copy = [...prev];

                  copy[copy.length - 1] = {
                    role: "assistant",
                    message: value,
                  };

                  return copy;
                });

                setEditing(false);
              }}
            />
          ) : (
            <>
              <EnhancedPrompt prompt={editedPrompt} />

              <PromptActions
                prompt={editedPrompt}
                onEdit={() => setEditing(true)}
                onReEnhance={sendPrompt}
              />

              <PromptAnalysis analysis={analysis} />
            </>
          )}

        </div>
      )}

    </div>
  );
}