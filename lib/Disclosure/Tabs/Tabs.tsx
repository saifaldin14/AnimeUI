import React, { useState } from "react";
import { getAnimePaperVars, getAnimeVars } from "../../shared";

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
  const panelVars = getAnimeVars({
    fromColor,
    toColor,
    textColor,
    radius: "1.5rem",
  });
  const paperVars = getAnimePaperVars({
    fromColor,
    toColor,
    textColor: "#241335",
    radius: "1.25rem",
  });

  return (
    <div className={`w-full ${className}`} style={style}>
      {/* Tab Headers */}
      <div className="relative">
        <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`relative px-5 py-2.5 font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                activeTab === index
                  ? "anime-manga-chip text-white"
                  : "anime-manga-paper text-[#241335]"
              }`}
              onClick={() => setActiveTab(index)}
              style={
                activeTab === index
                  ? { ...panelVars, color: textColor }
                  : paperVars
              }
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
            >
              {tab.label}
              {activeTab === index && (
                <span
                  className="absolute -bottom-2 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full"
                  style={{ backgroundColor: indicatorColor }}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div
        className="anime-manga-panel mt-5 overflow-hidden p-6"
        style={panelVars}
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        <div className="absolute inset-0 anime-screen-tone opacity-45" aria-hidden="true" />
        <div className="relative z-10 font-medium">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};
