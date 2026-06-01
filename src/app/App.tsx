import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="bg-black/90 min-h-screen text-white font-sans antialiased selection:bg-[#5B7FFF]/30 flex justify-center items-center">
      <div className="w-full max-w-md bg-[#121212] h-[100dvh] sm:h-[852px] sm:max-h-[90vh] sm:rounded-[3rem] relative shadow-2xl overflow-hidden shadow-black ring-1 ring-white/10 sm:my-8">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
