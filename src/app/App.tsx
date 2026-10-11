import { RouterProvider } from "react-router";
import { router } from "./routes";
import { testConnection } from "../services/supabase/test";
import { useEffect } from "react";
import { AuthProvider } from "../features/auth/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/queryClient";

export default function App() {
  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div className="bg-black/90 min-h-screen text-white font-sans antialiased selection:bg-[#5B7FFF]/30 flex justify-center items-center">
      <div className="w-full max-w-md bg-[#121212] h-[100dvh] sm:h-[852px] sm:max-h-[90vh] sm:rounded-[3rem] relative shadow-2xl overflow-hidden shadow-black ring-1 ring-white/10 sm:my-8">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
}
