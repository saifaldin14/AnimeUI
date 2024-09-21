import React from "react";

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
};

export const Radio: React.FC<RadioProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  size = 24, // Default size
}) => {
  return (
    <div className="flex flex-col space-y-2">
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
            : "#e5e7eb", // Tailwind's gray-300
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
                  <div className="absolute -top-1 -right-1 animate-ping">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 animate-ping delay-200">
                    <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                  </div>
                </>
              )}
            </div>
            {option.label && (
              <span
                className={`ml-3 font-anime ${
                  disabled ? "text-gray-400" : "text-black"
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
