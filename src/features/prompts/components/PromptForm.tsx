import { useState } from "react";
import { useNavigate } from "react-router";
import { createPrompt } from "../../auth/api/createPropmt";
import { uploadImage } from "../../auth/api/uploadImage";

export default function PromptForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [promptText, setPromptText] = useState("");

  const [model, setModel] = useState("Flux");
  const [style, setStyle] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      if (!file) {
        throw new Error("Please select an image");
      }

      const imageUrl = await uploadImage(file);

      await createPrompt({
        title,
        prompt_text: promptText,
        image_url: imageUrl,
        model,
        style,
      });

      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-3xl flex-col gap-4"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">Title</label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded-xl border p-3"
          placeholder="Cyberpunk City"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Prompt</label>

        <textarea
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          required
          rows={8}
          className="w-full rounded-xl border p-3"
          placeholder="Write your prompt..."
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Model</label>

          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full rounded-xl border p-3"
          >
            <option>Flux</option>
            <option>Midjourney</option>
            <option>GPT Image</option>
            <option>Stable Diffusion</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Style</label>

          <input
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full rounded-xl border p-3"
            placeholder="Cyberpunk"
          />
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-100 p-3 text-red-600">{error}</div>
      )}

      <button
        disabled={loading}
        className="rounded-xl bg-black px-4 py-3 text-white"
      >
        {loading ? "Publishing..." : "Publish Prompt"}
      </button>
    </form>
  );
}
