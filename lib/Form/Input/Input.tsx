import React from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
  error?: boolean;
  errorMessage?: string;
  type?: string; // Input type (e.g., 'text', 'password')
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  disabled = false,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#fff", // Default black
  error = false,
  errorMessage = "",
  type = "text",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${error ? "border border-red-500" : ""}`}
        style={{
          background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
          color: textColor,
        }}
      />
      {/* Anime Vibe Elements */}
      {!disabled && (
        <>
          <div className="absolute -top-2 -right-2 animate-ping">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
          <div className="absolute -bottom-2 -left-2 animate-ping delay-200">
            <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
          </div>
        </>
      )}
      {error && errorMessage && (
        <p className="mt-1 text-red-500 text-sm font-anime">{errorMessage}</p>
      )}
    </div>
  );
};
