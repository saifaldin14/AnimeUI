import React from "react";

type MenuItem = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

type MenuProps = {
  items: MenuItem[];
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
};

export const Menu: React.FC<MenuProps> = ({
  items,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#ffffff", // Default white
}) => {
  return (
    <div
      className="relative w-64 rounded-lg shadow-lg overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
    >
      {/* Anime-inspired header */}
      <div className="flex items-center justify-center p-4">
        <h2 className="text-2xl font-anime" style={{ color: textColor }}>
          Menu
        </h2>
      </div>
      {/* Menu items */}
      <ul className="divide-y divide-pink-200">
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={item.onClick}
              className="w-full flex items-center px-4 py-3 hover:bg-opacity-75 transition-colors"
              style={{ color: textColor }}
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              <span className="font-anime">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
      {/* Anime vibe elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating elements */}
        <div className="absolute top-4 left-8 w-3 h-3 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-twinkle delay-200"></div>
        <div className="absolute bottom-6 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-8 w-3 h-3 bg-pink-300 rounded-full animate-float delay-500"></div>
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
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};
