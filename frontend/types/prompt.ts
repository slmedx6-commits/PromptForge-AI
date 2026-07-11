export interface EnhancePromptRequest {
  prompt: string;
  session_id?: string | null;
}

export interface PromptData {
  id: number;
  prompt: string;
  enhanced_prompt: string;
  score: number;
  version: number;
  parent_id: number | null;
  session_id: string;
  created_at: string;
}

export interface EnhancePromptResponse {
  session_id: string;
  prompt: PromptData;
}