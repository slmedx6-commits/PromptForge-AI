export interface ChatMessage {
  id: string;

  role: "user" | "assistant";

  content: string;

  analysis?: {
    score: number;

    category: string;

    intent: string;

    complexity: string;

    keywords: string[];

    suggestions: string[];

    comparison: any;

    analytics: any;
  };
}