// Checkbox.tsx
import React from "react";
import { animeInk } from "../../shared";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  size?: number; // Size of the checkbox
  className?: string;
  style?: React.CSSProperties;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  size = 24, // Default size
  className = "",
  style,
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
      : "linear-gradient(180deg, #fff7fb, #ffffff)",
    border: `3px solid ${animeInk}`,
    borderRadius: "0.75rem",
    boxShadow: `3px 3px 0 ${animeInk}`,
    color: checked ? "#ffffff" : animeInk,
  };

  return (
    <label className={`flex items-center cursor-pointer select-none ${className}`} style={style} role="checkbox" aria-checked={checked} aria-disabled={disabled}>
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
            <div className="absolute -top-1 right-0">
              <div
                className="h-2.5 w-2.5 anime-sparkle"
                style={{
                  background: "linear-gradient(135deg, #fbbf24, #fff7cc)",
                  clipPath:
                    "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
                }}
              ></div>
            </div>
            <div className="absolute -bottom-1 -left-1 h-1.5 w-4 rounded-full bg-gradient-to-r from-pink-300/70 to-transparent"></div>
          </>
        )}
      </div>
      {label && (
        <span
          className={`ml-3 font-semibold uppercase tracking-[0.12em] ${
            disabled ? "text-gray-400" : "text-[#241335]"
          }`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
