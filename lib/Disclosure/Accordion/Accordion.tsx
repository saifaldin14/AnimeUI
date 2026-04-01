import React, { useState } from "react";
import { getAnimePaperVars, getAnimeVars } from "../../shared";

type AccordionItem = {
  title: string;
  content: string;
};

type AnimeAccordionProps = {
  items: AccordionItem[];
  fromColor?: string;
  toColor?: string;
};

export const Accordion: React.FC<AnimeAccordionProps> = ({
  items,
  fromColor = "#ec4899", // Default to Tailwind's pink-500
  toColor = "#a855f7", // Default to Tailwind's purple-500
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const panelVars = getAnimeVars({
          fromColor,
          toColor,
          textColor: "#ffffff",
          radius: "1.3rem",
          shadowOffset: "4px",
        });
        const paperVars = getAnimePaperVars({
          fromColor,
          toColor,
          radius: "1.2rem",
        });

        return (
          <div key={index} className="space-y-2">
            <button
              onClick={() => toggleItem(index)}
              style={panelVars}
              className="anime-manga-panel anime-manga-pressable w-full flex items-center justify-between p-4 text-left font-bold uppercase tracking-[0.14em] text-white focus:outline-none"
              aria-expanded={isActive}
            >
              <span>{item.title}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isActive ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isActive && (
              <div
                className="anime-manga-paper animate-fadeIn px-5 py-4 text-[#241335]"
                style={paperVars}
              >
                <p className="text-base font-medium leading-relaxed">{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
