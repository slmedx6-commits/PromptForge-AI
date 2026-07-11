export interface PromptHistoryItem {
  id: string;
  prompt: string;
  enhancedPrompt: string;
  createdAt: string;
  analysis: any;
}

const STORAGE_KEY = "prompt-history";

export function savePrompt(
  prompt: string,
  result: any
): void {
  if (typeof window === "undefined") return;

  const history = getHistory();

  history.unshift({
    id: crypto.randomUUID(),
    prompt,
    enhancedPrompt: result.enhanced_prompt,
    createdAt: new Date().toISOString(),
    analysis: result,
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}

export function getHistory(): PromptHistoryItem[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function clearHistory(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}

export function deleteHistory(id: string): void {
  if (typeof window === "undefined") return;

  const history = getHistory().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}