import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Bookmark, Sparkles, ArrowRight } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "motion/react";
import { CATEGORIES, PROMPTS, COLLECTIONS } from "../data";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Trending");
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-[#121212] flex flex-col w-full pb-8">
      {/* Hero Section */}
      <div className="relative w-full h-[65vh] min-h-[500px] flex-shrink-0">
        {/* Top Header Overlay */}
        <div className="absolute top-0 inset-x-0 z-40 bg-gradient-to-b from-[#121212]/80 via-[#121212]/40 to-transparent pt-safe pb-6 px-6">
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-2xl font-bold tracking-tighter text-white">Promptly</h1>
            <button 
              className="w-10 h-10 rounded-full overflow-hidden bg-[#242424] border border-white/20 shadow-lg hover:scale-105 transition-transform"
              onClick={() => navigate("/profile")}
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzgwMjIyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBkYXJrJTIwbW9vZHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMjkyNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Cinematic Dark Moody Architecture"
            className="w-full h-full object-cover"
          />
          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 z-20 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-4">
              <Sparkles className="w-4 h-4 text-[#5B7FFF]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/90">Prompt of the Day</span>
            </div>
            
            <h2 className="text-[2.75rem] leading-[1.05] font-bold text-white tracking-tighter mb-4">
              Cinematic Dark Moody Architecture
            </h2>
            
            <p className="text-[#A5A5A5] text-base leading-relaxed line-clamp-2 mb-6 max-w-sm">
              A brutalist concrete home integrated into a lush green cliffside, massive floor-to-ceiling glass windows...
            </p>
            
            <button 
              onClick={() => navigate("/prompt/3")}
              className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm w-max hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-white/10"
            >
              View Prompt
            </button>
          </motion.div>
        </div>
      </div>

      {/* Curated Collections */}
      <div className="mt-2 px-6 mb-8 flex-shrink-0">
        <div className="flex justify-between items-end mb-5">
          <h3 className="text-xl font-bold text-white tracking-tight">Curated Collections</h3>
          <button 
            onClick={() => navigate("/collections")}
            className="text-[#5B7FFF] text-sm font-semibold flex items-center gap-1 hover:text-white transition-colors"
          >
            View all <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-4 snap-x snap-mandatory">
          {COLLECTIONS.map((collection, i) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              key={collection.id}
              onClick={() => navigate("/collections")}
              className="relative w-[160px] h-[220px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer group snap-start bg-[#1B1B1B]"
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[#A5A5A5] text-xs font-semibold mb-1 uppercase tracking-wider">{collection.count} Prompts</span>
                <h4 className="text-white font-bold text-lg leading-tight tracking-tight">{collection.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories / Search Area */}
      <div className="sticky top-0 z-30 bg-[#121212]/95 backdrop-blur-xl pt-2 pb-4 shadow-sm border-t border-[#242424]/30">
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-6">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === category
                  ? "bg-white text-[#121212] shadow-md shadow-white/10"
                  : "bg-[#1B1B1B] text-[#A5A5A5] hover:bg-[#242424] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Feed */}
      <div className="px-4 pt-4 flex-1">
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 2, 700: 3 }}>
          <Masonry gutter="12px">
            {PROMPTS.map((prompt, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.4 }}
                key={prompt.id}
                className="group relative rounded-2xl overflow-hidden bg-[#1B1B1B] cursor-pointer"
                onClick={() => navigate(`/prompt/${prompt.id}`)}
              >
                <img
                  src={prompt.image}
                  alt={prompt.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                  <div className="flex justify-end">
                    <button 
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#5B7FFF] hover:scale-110 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Save action
                      }}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-tight drop-shadow-md mb-1.5 tracking-tight">
                      {prompt.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <img 
                        src={prompt.creator.avatar}
                        alt={prompt.creator.name}
                        className="w-4 h-4 rounded-full border border-white/20"
                      />
                      <span className="text-[10px] font-medium text-white/80">{prompt.creator.name}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-5 w-14 h-14 bg-[#5B7FFF] rounded-full shadow-lg shadow-[#5B7FFF]/25 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform z-40">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
