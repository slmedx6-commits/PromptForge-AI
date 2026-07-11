import api from "@/lib/axios";

export async function enhancePrompt(prompt: string) {
  const response = await api.post("/prompts/enhance", {
    prompt,
  });

  return response.data;
}