import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get("token") || null,

  setToken: (token: string) => {
    Cookies.set("token", token, {
      expires: 7,
    });

    set({
      token,
    });
  },

  logout: () => {
    Cookies.remove("token");

    set({
      token: null,
    });
  },
}));