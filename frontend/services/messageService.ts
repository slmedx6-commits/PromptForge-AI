const API = "http://127.0.0.1:8000/api/v1/messages";

export async function saveMessage(
  conversationId: number,
  role: string,
  content: string
) {
  const response = await fetch(`${API}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversation_id: conversationId,
      role,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to save message");
  }

  return response.json();
}

export async function getMessages(conversationId: number) {
  const response = await fetch(`${API}/${conversationId}`);

  if (!response.ok) {
    throw new Error("Failed to load messages");
  }

  return response.json();
}