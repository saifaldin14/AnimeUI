import React, { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AnimeAccordionProps = {
  items: AccordionItem[];
};

export const Accordion: React.FC<AnimeAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-left focus:outline-none"
          >
            <span className="font-anime">{item.title}</span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                activeIndex === index ? "transform rotate-180" : ""
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
          {activeIndex === index && (
            <div className="p-4 bg-white text-black animate-fadeIn">
              <p className="font-anime text-base">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
