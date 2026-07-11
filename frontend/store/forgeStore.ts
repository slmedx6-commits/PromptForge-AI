import { create } from "zustand";

export interface PromptVersion {
  id: number;
  prompt: string;
  type: "AI" | "USER";
  createdAt: string;
}

interface ForgeState {
  sessionId: string | null;

  originalPrompt: string;

  enhancedPrompt: string;

  loading: boolean;

  versions: PromptVersion[];

  currentVersion: number | null;

  setOriginalPrompt: (value: string) => void;

  setEnhancedPrompt: (value: string) => void;

  setLoading: (value: boolean) => void;

  setSessionId: (id: string) => void;

  addVersion: (version: PromptVersion) => void;

  selectVersion: (id: number) => void;

  clear: () => void;
}

export const useForgeStore = create<ForgeState>((set) => ({
  sessionId: null,

  originalPrompt: "",

  enhancedPrompt: "",

  loading: false,

  versions: [],

  currentVersion: null,

  setOriginalPrompt: (value) =>
    set({
      originalPrompt: value,
    }),

  setEnhancedPrompt: (value) =>
    set({
      enhancedPrompt: value,
    }),

  setLoading: (value) =>
    set({
      loading: value,
    }),

  setSessionId: (id) =>
    set({
      sessionId: id,
    }),

  addVersion: (version) =>
    set((state) => ({
      versions: [version, ...state.versions],
      currentVersion: version.id,
    })),

  selectVersion: (id) =>
    set({
      currentVersion: id,
    }),

  clear: () =>
    set({
      sessionId: null,
      originalPrompt: "",
      enhancedPrompt: "",
      versions: [],
      currentVersion: null,
      loading: false,
    }),
}));