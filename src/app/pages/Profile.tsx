import { useState } from "react";
import { Settings, Share, Grid, Bookmark, Heart } from "lucide-react";
import { PROMPTS, COLLECTIONS } from "../data";
import { useMyPrompts } from "../../features/prompts/hooks/useMyPrompts";
import { useSavedPrompts } from "../../features/prompts/hooks/useSavedPrompts";
import { useMyProfile } from "../../features/prompts/hooks/useMyProfile";
import { Navigate, useNavigate } from "react-router";
import { logout } from "../../features/auth/api/logout";
import { supabase } from "../../services/supabase/client";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<
    "prompts" | "collections" | "likes"
  >("prompts");
  const { data: profile } = useMyProfile();
  const { data: myPrompts = [] } = useMyPrompts();
  const { data: mySaved = [] } = useSavedPrompts();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        logout();
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-full bg-[#121212] pt-safe">
      <div className="px-4 pt-6 pb-6 border-b border-[#242424]">
        <div className="flex justify-between items-start mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#242424]">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-bold">
                {profile?.username?.charAt(0).toUpperCase() || ""}
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-white hover:bg-[#242424] transition-colors"
              onClick={handleLogout}
            >
              <Share className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-white hover:bg-[#242424] transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-white mb-1">
          {profile?.username}
        </h1>
        <p className="text-sm text-[#A5A5A5] mb-6">{profile?.bio}</p>

        <div className="flex items-center justify-between mb-6">
          <div className="text-center">
            <span className="block text-lg font-semibold text-white">
              12.4k
            </span>
            <span className="text-xs text-[#A5A5A5] uppercase tracking-wider">
              Followers
            </span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-semibold text-white">432</span>
            <span className="text-xs text-[#A5A5A5] uppercase tracking-wider">
              Following
            </span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-semibold text-white">89</span>
            <span className="text-xs text-[#A5A5A5] uppercase tracking-wider">
              Prompts
            </span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-semibold text-white">45k</span>
            <span className="text-xs text-[#A5A5A5] uppercase tracking-wider">
              Saves
            </span>
          </div>
        </div>

        <button
          className="w-full bg-white text-[#121212] py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
          onClick={() => navigate("/settings/profile")}
        >
          Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#242424]">
        <button
          onClick={() => setActiveTab("prompts")}
          className={`flex-1 flex justify-center py-4 relative ${activeTab === "prompts" ? "text-white" : "text-[#A5A5A5]"}`}
        >
          <Grid className="w-5 h-5" />
          {activeTab === "prompts" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("collections")}
          className={`flex-1 flex justify-center py-4 relative ${activeTab === "collections" ? "text-white" : "text-[#A5A5A5]"}`}
        >
          <Bookmark className="w-5 h-5" />
          {activeTab === "collections" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("likes")}
          className={`flex-1 flex justify-center py-4 relative ${activeTab === "likes" ? "text-white" : "text-[#A5A5A5]"}`}
        >
          <Heart className="w-5 h-5" />
          {activeTab === "likes" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-1">
        {activeTab === "prompts" && (
          <div className="grid grid-cols-3 gap-1">
            {myPrompts.map((p) => (
              <div
                key={p.id}
                className="aspect-square bg-[#1B1B1B] cursor-pointer group relative overflow-hidden"
              >
                <img
                  src={p.image_url}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "collections" && (
          <div className="p-3 grid grid-cols-2 gap-3">
            {mySaved.map((c) => (
              <div key={c.id} className="cursor-pointer">
                <div className="aspect-square rounded-xl overflow-hidden mb-1 relative bg-[#1B1B1B]">
                  <img
                    src={c.image_url}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs font-medium text-white truncate">
                  {c.title}
                </h3>
              </div>
            ))}
          </div>
        )}

        {activeTab === "likes" && (
          <div className="flex items-center justify-center py-20 flex-col gap-3">
            <Heart className="w-10 h-10 text-[#242424]" />
            <p className="text-sm text-[#A5A5A5]">No liked prompts yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
