import React from "react";

type ListItem = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

type ListProps = {
  items: ListItem[];
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
  fontFamily?: string; // Custom font family
};

export const List: React.FC<ListProps> = ({
  items,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#ffffff", // Default white
  fontFamily = '"Press Start 2P", cursive',
}) => {
  return (
    <div
      className="relative rounded-lg shadow-lg overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
        color: textColor,
        fontFamily: fontFamily,
      }}
    >
      <ul className="divide-y divide-pink-200">
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={item.onClick}
              className="w-full flex items-center px-4 py-3 hover:bg-opacity-75 transition-colors"
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              <span>{item.text}</span>
              {/* Optional anime decoration */}
              <div className="flex-grow text-right">
                <div className="inline-block relative">
                  <div className="absolute -top-1 -right-1 animate-ping">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {/* Anime Vibe Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Stars */}
        <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"></div>
        {/* Sparkles */}
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
