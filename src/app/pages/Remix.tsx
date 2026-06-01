import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ChevronLeft, SlidersHorizontal, Wand2 } from "lucide-react";
import { motion } from "motion/react";
import { PROMPTS } from "../data";

const STYLES = ["Cinematic", "Anime", "Photorealistic", "Digital Art", "Oil Painting"];
const LIGHTING = ["Golden Hour", "Cyberpunk Neon", "Soft Studio", "Volumetric", "Moody Dark"];
const CAMERA = ["35mm Lens", "Drone View", "Macro", "Wide Angle", "Telephoto"];

export default function Remix() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prompt = PROMPTS.find((p) => p.id === id) || PROMPTS[0];

  const [activeTab, setActiveTab] = useState<"edit" | "advanced">("edit");
  const [promptText, setPromptText] = useState(prompt.promptText);

  // Form State
  const [style, setStyle] = useState(STYLES[0]);
  const [lighting, setLighting] = useState(LIGHTING[0]);
  const [camera, setCamera] = useState(CAMERA[0]);
  const [detailLevel, setDetailLevel] = useState(80);

  return (
    <div className="h-full overflow-hidden bg-[#121212] flex flex-col relative pb-safe">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-xl border-b border-[#242424] pt-safe px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-white hover:bg-[#1B1B1B] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="font-medium text-sm">Remix</span>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#A5A5A5] hover:text-white">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-28">
        {/* Preview */}
        <div className="p-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#1B1B1B] mb-6 shadow-2xl">
            <img 
              src={prompt.image} 
              alt="Original Reference" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-medium uppercase tracking-wider text-[#A5A5A5] mb-1 block">Reference</span>
              <p className="text-sm font-medium text-white truncate">{prompt.title}</p>
            </div>
          </div>

          {/* Prompt Editor */}
          <div className="mb-6">
            <label className="text-sm font-medium text-[#A5A5A5] uppercase tracking-wider mb-2 block">The Prompt</label>
            <textarea 
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="w-full h-32 bg-[#1B1B1B] border border-[#242424] rounded-2xl p-4 text-sm text-[#E0E0E0] font-mono outline-none focus:border-[#5B7FFF]/50 transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-white">Style</label>
                <span className="text-xs text-[#5B7FFF]">{style}</span>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                {STYLES.map(s => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm transition-colors border ${
                      style === s 
                        ? "bg-[#5B7FFF]/10 border-[#5B7FFF] text-[#5B7FFF]" 
                        : "bg-[#1B1B1B] border-[#242424] text-[#A5A5A5] hover:border-[#333]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-white">Lighting</label>
                <span className="text-xs text-[#5B7FFF]">{lighting}</span>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                {LIGHTING.map(l => (
                  <button
                    key={l}
                    onClick={() => setLighting(l)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm transition-colors border ${
                      lighting === l 
                        ? "bg-[#5B7FFF]/10 border-[#5B7FFF] text-[#5B7FFF]" 
                        : "bg-[#1B1B1B] border-[#242424] text-[#A5A5A5] hover:border-[#333]"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-white">Camera</label>
                <span className="text-xs text-[#5B7FFF]">{camera}</span>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                {CAMERA.map(c => (
                  <button
                    key={c}
                    onClick={() => setCamera(c)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm transition-colors border ${
                      camera === c 
                        ? "bg-[#5B7FFF]/10 border-[#5B7FFF] text-[#5B7FFF]" 
                        : "bg-[#1B1B1B] border-[#242424] text-[#A5A5A5] hover:border-[#333]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-white">Detail Level</label>
                <span className="text-xs text-[#5B7FFF]">{detailLevel}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={detailLevel}
                onChange={(e) => setDetailLevel(Number(e.target.value))}
                className="w-full accent-[#5B7FFF] h-1.5 bg-[#242424] rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent pb-safe">
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-white text-[#121212] py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <Wand2 className="w-5 h-5" />
          Generate New Prompt
        </button>
      </div>
    </div>
  );
}
