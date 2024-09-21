// Checkbox.tsx
import React from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  size?: number; // Size of the checkbox
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  size = 24, // Default size
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const checkboxStyle = {
    width: `${size}px`,
    height: `${size}px`,
    background: checked
      ? `linear-gradient(135deg, ${fromColor}, ${toColor})`
      : "#e5e7eb", // Tailwind's gray-300
  };

  return (
    <label className="flex items-center cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
        />
        <div
          className={`rounded-md flex items-center justify-center transition-all duration-300 ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={checkboxStyle}
        >
          {checked && (
            <svg
              className="text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width={size * 0.6}
              height={size * 0.6}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        {/* Anime Vibe Elements */}
        {checked && !disabled && (
          <>
            <div className="absolute -top-1 -right-1 animate-ping">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 animate-ping delay-200">
              <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            </div>
          </>
        )}
      </div>
      {label && (
        <span
          className={`ml-3 font-anime ${
            disabled ? "text-gray-400" : "text-black"
          }`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
