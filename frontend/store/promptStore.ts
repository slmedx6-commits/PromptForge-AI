import api from "@/lib/axios";
import {
  EnhancePromptRequest,
  EnhancePromptResponse,
} from "@/types/prompt";

export async function enhancePrompt(
  data: EnhancePromptRequest
): Promise<EnhancePromptResponse> {

  const response = await api.post(
    "/prompt/enhance",
    data
  );

  return response.data;
}