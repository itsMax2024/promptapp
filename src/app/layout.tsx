import { Outlet, NavLink, useNavigate, useLocation } from "react-router";
import { Home, Bookmark, User } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("promptly_onboarding");
    if (!hasSeenOnboarding && location.pathname === "/") {
      navigate("/onboarding", { replace: true });
    }
  }, [navigate, location]);

  return (
    <div className="flex flex-col h-full relative">
      <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-[#121212]/80 backdrop-blur-xl border-t border-[#242424] pb-safe z-50">
        <div className="flex justify-around items-center h-16 px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-16 h-full transition-colors ${
                isActive ? "text-[#5B7FFF]" : "text-[#A5A5A5] hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Home className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#5B7FFF] rounded-full"
                    />
                  )}
                </div>
              </>
            )}
          </NavLink>

          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-16 h-full transition-colors ${
                isActive ? "text-[#5B7FFF]" : "text-[#A5A5A5] hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Bookmark className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#5B7FFF] rounded-full"
                    />
                  )}
                </div>
              </>
            )}
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-16 h-full transition-colors ${
                isActive ? "text-[#5B7FFF]" : "text-[#A5A5A5] hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <User className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#5B7FFF] rounded-full"
                    />
                  )}
                </div>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
