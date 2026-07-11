import api from "@/lib/axios";

export const enhancePrompt = async (prompt: string) => {
  const response = await api.post("/prompt/enhance", {
    prompt,
  });

  return response.data;
};