import api from "@/lib/axios";

export const comparePrompts = async (
  original: string,
  enhanced: string
) => {

  const res = await api.post("/comparison", {

    original,

    enhanced,

  });

  return res.data;
};