import React, { useState } from "react";

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
  textColor = "#ffffff", // Default white
  className = "",
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
        className={`w-full px-4 py-2 text-left rounded-lg shadow-md focus:outline-none ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={toggleDropdown}
        style={{
          background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
          color: textColor,
        }}
      >
        <span className="font-anime">
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
          className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ color: "black" }}
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 font-anime"
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
        <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full anime-twinkle"></div>
        <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full anime-twinkle anime-delay-200"></div>
        <div className="absolute bottom-2 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-6 w-2 h-2 bg-pink-300 rounded-full anime-float anime-delay-300"></div>
      </div>
    </div>
  );
};
