import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useMyProfile } from "../../features/prompts/hooks/useMyProfile";
import { updateProfile } from "../../features/auth/api/updateProfile";
import { uploadAvatar } from "../../features/auth/api/uploadAvatar";
import { useQueryClient } from "@tanstack/react-query";
import { checkUsername } from "../../features/auth/api/checkUsername";

export default function EditProfile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: profile } = useMyProfile();

  const [username, setUsername] = useState("");

  const [bio, setBio] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  function validateUsername(username: string) {
    if (username.length < 3) {
      return "Username must be at least 3 characters.";
    }

    if (username.length > 20) {
      return "Username must be less than 20 characters.";
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      return "Only letters, numbers, underscores and hyphens are allowed.";
    }

    return "";
  }

  useEffect(() => {
    if (!profile) return;

    setUsername(profile.username || "");
    setBio(profile.bio || "");
  }, [profile]);

  function isValidUsername(username: string) {
    return /^[a-zA-Z0-9_-]+$/.test(username);
  }

  //   async function handleSave() {
  //     try {
  //       let avatarUrl = profile?.avatar_url || "";

  //       if (avatarFile) {
  //         avatarUrl = await uploadAvatar(avatarFile);
  //       }

  //       await updateProfile(username, bio, avatarUrl);

  //       navigate("/profile");
  //     } catch (error) {
  //       console.error(error);
  //       alert("Failed to save profile");
  //     }
  //   }

  async function handleSave() {
    try {
      console.log("starting save");

      let avatarUrl = profile?.avatar_url || "";
      if (!isValidUsername(username)) {
        alert(
          "Username can only contain letters, numbers, underscores, and hyphens.",
        );
        return;
      }

      if (avatarFile) {
        console.log("uploading avatar");

        avatarUrl = await uploadAvatar(avatarFile);

        console.log("uploaded avatar");
      }

      console.log("updating profile");

      await updateProfile(username, bio, avatarUrl);
      await queryClient.invalidateQueries({
        queryKey: ["my-profile"],
      });
      navigate("/profile");
      console.log("profile updated");
    } catch (error: any) {
      if (error.message.includes("profiles_username_unique")) {
        setUsernameError("Username is already taken.");
        return;
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <button onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft />
      </button>

      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

      {/* Avatar */}

      <div className="mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-[#1B1B1B] mb-4">
          <img
            src={
              avatarFile
                ? URL.createObjectURL(avatarFile)
                : profile?.avatar_url || "/default-avatar.jpg"
            }
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
        />
      </div>

      {/* Username */}

      <div className="mb-4">
        <label className="block mb-2 text-sm">Username</label>

        <input
          value={username}
          onChange={async (e) => {
            const value = e.target.value;

            setUsername(value);

            const validationError = validateUsername(value);

            if (validationError) {
              setUsernameError(validationError);
              return;
            }

            const taken = await checkUsername(value);

            if (taken && value !== profile?.username) {
              setUsernameError("Username is already taken.");
              return;
            }

            setUsernameError("");
          }}
          className="w-full bg-[#1B1B1B] rounded-xl px-4 py-3"
        />
        {usernameError && (
          <p className="mt-2 text-sm text-red-500">{usernameError}</p>
        )}
      </div>

      {/* Bio */}

      <div className="mb-6">
        <label className="block mb-2 text-sm">Bio</label>

        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          className="w-full bg-[#1B1B1B] rounded-xl px-4 py-3 resize-none"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={!!usernameError}
        className={`
    w-full py-3 rounded-xl font-medium
    ${
      usernameError
        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
        : "bg-white text-black"
    }
  `}
      >
        Save Changes
      </button>
    </div>
  );
}
