import React from "react";

type ListItem = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

type ListProps = {
  items: ListItem[];
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  fontFamily?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const List: React.FC<ListProps> = ({
  items,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  fontFamily = '"Press Start 2P", cursive',
  className = "",
  style,
}) => {
  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
        color: textColor,
        fontFamily: fontFamily,
        ...style,
      }}
      role="list"
    >
      <ul className="divide-y divide-pink-200">
        {items.map((item, index) => (
          <li key={index} role="listitem">
            <button
              onClick={item.onClick}
              className="w-full flex items-center px-4 py-3 hover:bg-opacity-75 transition-colors"
            >
              {item.icon && <span className="mr-3" aria-hidden="true">{item.icon}</span>}
              <span>{item.text}</span>
              {/* Optional anime decoration */}
              <div className="flex-grow text-right">
                <div className="inline-block relative">
                  <div className="absolute -top-1 -right-1 animate-ping" aria-hidden="true">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {/* Anime Vibe Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating Stars */}
        <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full anime-twinkle"></div>
        <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full anime-twinkle anime-delay-200"></div>
        {/* Sparkles */}
        <div className="absolute bottom-6 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-8 w-3 h-3 bg-pink-300 rounded-full anime-float anime-delay-500"></div>
      </div>
    </div>
  );
};
