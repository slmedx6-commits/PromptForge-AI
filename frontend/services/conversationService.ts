const API = "http://127.0.0.1:8000/api/v1/conversations";

export async function createConversation(title: string) {
  const response = await fetch(`${API}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create conversation");
  }

  return response.json();
}

export async function getConversations() {
  const response = await fetch(`${API}/`);

  if (!response.ok) {
    throw new Error("Failed to load conversations");
  }

  return response.json();
}