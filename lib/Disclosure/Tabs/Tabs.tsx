import React, { useState } from "react";

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  indicatorColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  indicatorColor = "#f9a8d4",
  className = "",
  style,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`w-full ${className}`} style={style}>
      {/* Tab Headers */}
      <div className="relative">
        <div className="flex justify-center" role="tablist" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`relative px-4 py-2 mx-2 font-anime transition-colors duration-300 ${
                activeTab === index
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab(index)}
              style={{ color: textColor }}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
            >
              {tab.label}
              {/* Active Indicator */}
              {activeTab === index && (
                <div
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded-full"
                  style={{ backgroundColor: indicatorColor }}
                ></div>
              )}
            </button>
          ))}
        </div>
        {/* Anime Vibe Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Floating Stars */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full anime-twinkle"></div>
          <div className="absolute top-2 right-1/4 w-3 h-3 bg-white rounded-full anime-twinkle anime-delay-200"></div>
          {/* Sparkles */}
          <div className="absolute bottom-0 left-1/3 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping anime-delay-300"></div>
          {/* Floating Hearts */}
          <div className="absolute top-1/2 left-2 w-5 h-5 transform rotate-45 anime-float-rotate">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
          <div className="absolute bottom-1/2 right-4 w-4 h-4 transform rotate-45 anime-float-rotate anime-delay-500">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
        </div>
      </div>
      {/* Tab Content */}
      <div
        className="mt-4 p-6 rounded-lg shadow-lg relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
          color: textColor,
        }}
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {/* Anime Vibe Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Floating Stars */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full anime-twinkle"></div>
          <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full anime-twinkle anime-delay-200"></div>
          {/* Sparkles */}
          <div className="absolute bottom-6 left-6 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping anime-delay-300"></div>
          {/* Floating Hearts */}
          <div className="absolute top-1/3 left-4 w-5 h-5 transform rotate-45 anime-float-rotate">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
          <div className="absolute bottom-1/4 right-6 w-4 h-4 transform rotate-45 anime-float-rotate anime-delay-500">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 font-anime">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};
