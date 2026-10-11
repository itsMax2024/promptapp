import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import PromptDetail from "./pages/PromptDetail";
import Remix from "./pages/Remix";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import CreatePromptPage from "../features/prompts/pages/CreatePromptPage";
import EditProfile from "./pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "collections", Component: Collections },
      { path: "profile", Component: Profile },
    ],
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/prompt/:id",
    Component: PromptDetail,
  },
  {
    path: "/remix/:id",
    Component: Remix,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/create",
    element: <CreatePromptPage />,
  },
  {
    path: "/settings/profile",
    element: <EditProfile />,
  },
]);
