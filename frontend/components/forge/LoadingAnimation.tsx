"use client";

import { LoaderCircle } from "lucide-react";

export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center py-12">

      <LoaderCircle
        size={40}
        className="animate-spin text-blue-500"
      />

      <p className="mt-4 text-gray-400">

        Forging your prompt...

      </p>

    </div>
  );
}