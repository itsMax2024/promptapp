import { useParams, useNavigate } from "react-router";
import { ChevronLeft, Bookmark, Share, Zap, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { PROMPTS } from "../data";

export default function PromptDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const prompt = PROMPTS.find((p) => p.id === id) || PROMPTS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full overflow-y-auto bg-[#121212] pb-24 relative no-scrollbar">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] bg-[#1B1B1B]">
        <img
          src={prompt.image}
          alt={prompt.title}
          className="w-full h-full object-cover rounded-b-[2rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 rounded-b-[2rem]" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-safe mt-4 left-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-5 -mt-6 relative z-10">
        <div className="bg-[#121212] rounded-t-3xl pt-6">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight pr-4">
              {prompt.title}
            </h1>
            <div className="flex gap-2 shrink-0">
              <button className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-[#A5A5A5] hover:text-white transition-colors">
                <Share className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-[#A5A5A5] hover:text-[#5B7FFF] transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <img
              src={prompt.creator.avatar}
              alt={prompt.creator.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-[#A5A5A5]">by <span className="text-white font-medium">{prompt.creator.name}</span></span>
          </div>

          {/* Action Buttons */}
          <button 
            onClick={() => navigate(`/remix/${prompt.id}`)}
            className="w-full bg-[#5B7FFF] hover:bg-[#4a6bdf] text-white py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 mb-8 transition-colors shadow-lg shadow-[#5B7FFF]/20 active:scale-[0.98]"
          >
            <Zap className="w-5 h-5 fill-white" />
            Remix this Prompt
          </button>

          {/* Prompt Text Box */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-[#A5A5A5] uppercase tracking-wider">Prompt</h2>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-medium text-[#5B7FFF] hover:text-[#7694ff] transition-colors bg-[#5B7FFF]/10 px-2 py-1 rounded-md"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="bg-[#1B1B1B] border border-[#242424] rounded-2xl p-4 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5B7FFF]/50" />
              <p className="text-[15px] leading-relaxed text-[#E0E0E0] font-mono">
                {prompt.promptText}
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="mb-10">
            <h2 className="text-sm font-medium text-[#A5A5A5] uppercase tracking-wider mb-4">Details</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1B1B1B] rounded-xl p-3 flex flex-col">
                <span className="text-[11px] text-[#A5A5A5] uppercase mb-1">Model</span>
                <span className="text-sm font-medium">{prompt.model}</span>
              </div>
              <div className="bg-[#1B1B1B] rounded-xl p-3 flex flex-col">
                <span className="text-[11px] text-[#A5A5A5] uppercase mb-1">Aspect Ratio</span>
                <span className="text-sm font-medium">{prompt.aspectRatio}</span>
              </div>
              <div className="bg-[#1B1B1B] rounded-xl p-3 flex flex-col">
                <span className="text-[11px] text-[#A5A5A5] uppercase mb-1">Style</span>
                <span className="text-sm font-medium">{prompt.style}</span>
              </div>
              <div className="bg-[#1B1B1B] rounded-xl p-3 flex flex-col">
                <span className="text-[11px] text-[#A5A5A5] uppercase mb-1">Likes</span>
                <span className="text-sm font-medium">{prompt.likes.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {prompt.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-[#242424] text-[#A5A5A5] rounded-lg text-xs font-medium border border-[#333]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Related Prompts */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Related Inspiration</h2>
            <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-4">
              {PROMPTS.filter(p => p.id !== prompt.id).slice(0, 3).map(related => (
                <div 
                  key={related.id} 
                  className="w-40 shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate(`/prompt/${related.id}`);
                  }}
                >
                  <div className="aspect-[4/5] relative">
                    <img src={related.image} alt={related.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="mt-2 text-xs font-medium text-[#E0E0E0] truncate">{related.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
