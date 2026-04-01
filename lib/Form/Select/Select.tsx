import React, { useState } from "react";
import { getAnimePaperVars } from "../../shared";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
  className?: string;
  style?: React.CSSProperties;
};

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#241335",
  className = "",
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mangaVars = getAnimePaperVars({
    fromColor,
    toColor,
    textColor,
    radius: "1.25rem",
  });

  const selectedOption = options.find((option) => option.value === value);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block w-64 ${className}`} style={style}>
      {/* Selected Option */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
        className={`anime-manga-paper anime-manga-pressable w-full px-4 py-3 text-left focus:outline-none ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={toggleDropdown}
        style={mangaVars}
      >
        <span className="font-semibold uppercase tracking-[0.14em]">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M5 8.5l5 5 5-5H5z" />
        </svg>
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          role="listbox"
          className="anime-manga-paper absolute z-10 mt-3 w-full overflow-hidden"
          style={mangaVars}
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className="w-full border-b border-[#241335]/10 px-4 py-3 text-left font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-white/60 active:scale-[0.98]"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Anime Vibe Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute left-4 top-0 h-1 w-20 rounded-full bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="absolute bottom-3 left-6 h-1.5 w-8 rounded-full bg-gradient-to-r from-pink-300/70 to-transparent"></div>
      </div>
    </div>
  );
};
