import api from "@/lib/axios";

export const analyzePrompt = async (
  original: string,
  enhanced: string
) => {

  const res = await api.post("/analytics", {
    original,
    enhanced,
  });

  return res.data;
};