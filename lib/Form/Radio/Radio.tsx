import React from "react";
import { animeInk } from "../../shared";

type RadioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type RadioProps = {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  size?: number; // Size of the radio button
  className?: string;
  style?: React.CSSProperties;
};

export const Radio: React.FC<RadioProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  size = 24, // Default size
  className = "",
  style,
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`} style={style} role="radiogroup">
      {options.map((option, index) => {
        const checked = selectedValue === option.value;
        const disabled = option.disabled || false;

        const handleChange = () => {
          if (!disabled) {
            onChange(option.value);
          }
        };

        const radioStyle = {
          width: `${size}px`,
          height: `${size}px`,
          background: checked
            ? `linear-gradient(135deg, ${fromColor}, ${toColor})`
            : "linear-gradient(180deg, #fff7fb, #ffffff)",
          border: `3px solid ${animeInk}`,
          boxShadow: `3px 3px 0 ${animeInk}`,
          color: checked ? "#ffffff" : animeInk,
        };

        return (
          <label
            key={index}
            className={`flex items-center cursor-pointer select-none ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div className="relative">
              <input
                type="radio"
                name={name}
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                className="sr-only"
              />
              <div
                className={`rounded-full flex items-center justify-center transition-all duration-300`}
                style={radioStyle}
              >
                {checked && (
                  <div
                    className="rounded-full bg-white"
                    style={{
                      width: `${size * 0.5}px`,
                      height: `${size * 0.5}px`,
                    }}
                  ></div>
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
            {option.label && (
              <span
                className={`ml-3 font-semibold uppercase tracking-[0.12em] ${
                  disabled ? "text-gray-400" : "text-[#241335]"
                }`}
              >
                {option.label}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
};
