import { useState } from "react";
import { Plus, LayoutGrid, List } from "lucide-react";
import { motion } from "motion/react";
import { COLLECTIONS } from "../data";

export default function Collections() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-full bg-[#121212] pt-safe">
      <div className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-xl border-b border-[#242424] px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold tracking-tight">Saved</h1>
          <button className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-white hover:bg-[#242424] transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#A5A5A5]">{COLLECTIONS.reduce((acc, c) => acc + c.count, 0)} items across {COLLECTIONS.length} collections</p>
          <div className="flex bg-[#1B1B1B] rounded-lg p-1">
            <button 
              onClick={() => setView("grid")}
              className={`p-1.5 rounded-md transition-colors ${view === "grid" ? "bg-[#242424] text-white" : "text-[#A5A5A5]"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setView("list")}
              className={`p-1.5 rounded-md transition-colors ${view === "list" ? "bg-[#242424] text-white" : "text-[#A5A5A5]"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        {view === "grid" ? (
          <div className="grid grid-cols-2 gap-4">
            {COLLECTIONS.map((collection, i) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-2 relative bg-[#1B1B1B]">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-medium text-white">
                    {collection.count}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white truncate">{collection.title}</h3>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {COLLECTIONS.map((collection, i) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 group cursor-pointer bg-[#1B1B1B] p-2 rounded-2xl"
              >
                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden relative">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-white truncate mb-1">{collection.title}</h3>
                  <p className="text-xs text-[#A5A5A5]">{collection.count} saved items</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
