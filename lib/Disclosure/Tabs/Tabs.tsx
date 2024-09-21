import React, { useState } from "react";

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
  activeTabColor?: string; // Color for the active tab
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#ffffff", // Default white
  activeTabColor = "#f472b6", // Default pink-400
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      style={{
        color: textColor,
      }}
    >
      {/* Tab Headers */}
      <div className="flex space-x-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative flex-1 py-2 font-anime text-center transition-colors duration-300 ${
              activeIndex === index
                ? "bg-gradient-to-r from-[var(--from-color)] to-[var(--to-color)] text-white"
                : "bg-pink-200 text-pink-700"
            }`}
            style={
              activeIndex === index
                ? {
                    background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
                    color: textColor,
                  }
                : {}
            }
          >
            {tab.label}
            {/* Cute Anime Elements on Active Tab */}
            {activeIndex === index && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Sparkles */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-200"></div>
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-400"></div>
              </div>
            )}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div
        className="relative mt-4 p-4 rounded-lg shadow-lg overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
          color: textColor,
        }}
      >
        {/* Anime Vibe Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Stars */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"></div>
          {/* Sparkles */}
          <div className="absolute bottom-6 left-6 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-300"></div>
          {/* Floating Hearts */}
          <div className="absolute top-1/3 left-4 w-5 h-5 transform rotate-45 animate-float">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
          <div className="absolute bottom-1/4 right-6 w-4 h-4 transform rotate-45 animate-float delay-500">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
        </div>
        <div className="relative z-10">{tabs[activeIndex].content}</div>
      </div>
      {/* Custom Animations */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          .animate-twinkle {
            animation: twinkle 2s infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0) rotate(45deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
            100% { transform: translateY(0) rotate(45deg); }
          }
        `}
      </style>
    </div>
  );
};
