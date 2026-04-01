import React from "react";

type MenuItem = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

type MenuProps = {
  items: MenuItem[];
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Menu: React.FC<MenuProps> = ({
  items,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  className = "",
  style,
}) => {
  return (
    <div
      className={`relative w-64 rounded-lg shadow-lg overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        ...style,
      }}
      role="menu"
      aria-label="Menu"
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
          <li key={index} role="none">
            <button
              onClick={item.onClick}
              className="w-full flex items-center px-4 py-3 hover:bg-opacity-75 active:scale-[0.98] transition-colors"
              style={{ color: textColor }}
              role="menuitem"
            >
              {item.icon && <span className="mr-3" aria-hidden="true">{item.icon}</span>}
              <span className="font-anime">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
      {/* Anime vibe elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating elements */}
        <div className="absolute top-4 left-8 w-3 h-3 bg-white rounded-full anime-twinkle"></div>
        <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full anime-twinkle anime-delay-200"></div>
        <div className="absolute bottom-6 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-8 w-3 h-3 bg-pink-300 rounded-full anime-float anime-delay-500"></div>
      </div>
    </div>
  );
};
