"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { registerUser } from "@/services/authService";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterData>();

  const onSubmit = async (data: RegisterData) => {
    try {
      await registerUser(data);

      alert("Registration Successful!");

      router.refresh();
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
        {...register("username")}
        placeholder="Username"
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-gray-400"
      />

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
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}