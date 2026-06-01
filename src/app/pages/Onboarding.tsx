import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const ONBOARDING_STEPS = [
  {
    id: 1,
    title: "Discover world-class AI prompts.",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwZ2VvbWV0cmljJTIwc2hhcGVzfGVufDF8fHx8MTc4MDI5MTM3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Save and organize your inspiration.",
    image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MDI5MTM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Remix prompts to create your own style.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBlcGljfGVufDF8fHx8MTc4MDI5MTM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("promptly_onboarding", "true");
      navigate("/");
    }
  };

  return (
    <div className="relative h-full w-full bg-[#121212] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={ONBOARDING_STEPS[step].image}
            alt="Onboarding Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-end px-8 pb-16 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-white mb-4">
              {ONBOARDING_STEPS[step].title}
            </h1>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {ONBOARDING_STEPS.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === step ? "w-8 bg-[#5B7FFF]" : "w-2 bg-[#242424]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#121212] hover:scale-105 active:scale-95 transition-transform"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
