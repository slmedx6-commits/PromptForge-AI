"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { loginUser } from "@/services/authService";
import { useAuthStore } from "@/store/authStore";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const setToken = useAuthStore((state) => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      const res = await loginUser(data);

      Cookies.set("token", res.access_token, {
  expires: 7,
});

setToken(res.access_token);

// Save logged-in user
localStorage.setItem(
  "current-user",
  JSON.stringify({
    email: data.email,
  })
);

router.push("/dashboard");
    } catch (error: any) {
      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Unable to connect to backend.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-gray-400"
      />

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-gray-400"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}