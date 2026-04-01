import React from "react";
import { getAnimePaperVars } from "../../shared";

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
  className?: string;
  style?: React.CSSProperties;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  disabled = false,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#241335",
  error = false,
  errorMessage = "",
  type = "text",
  className = "",
  style,
}) => {
  const mangaVars = getAnimePaperVars({
    fromColor,
    toColor,
    textColor,
    radius: "1.25rem",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={`anime-manga-paper relative overflow-hidden ${className}`}
      style={{ ...mangaVars, ...style }}
    >
      <div className="absolute inset-0 anime-screen-tone opacity-40" aria-hidden="true" />
      <input
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        aria-disabled={disabled}
        aria-invalid={error}
        aria-describedby={error && errorMessage ? "input-error" : undefined}
        className={`relative z-10 w-full bg-transparent px-4 py-3 pr-12 font-semibold placeholder:text-[#7b6a87] focus:outline-none transition-all duration-300 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={{ color: textColor }}
      />
      {/* Anime Vibe Elements */}
      {!disabled && (
        <>
          <div className="absolute right-4 top-3">
            <div
              className="h-3 w-3 anime-sparkle"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #fff7cc)",
                clipPath:
                  "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
              }}
            ></div>
          </div>
          <div className="absolute bottom-3 left-4 h-1.5 w-10 rounded-full bg-gradient-to-r from-pink-300/60 to-transparent"></div>
          <div className="absolute left-4 top-0 h-1 w-20 rounded-full bg-gradient-to-r from-white/80 to-transparent"></div>
          <div className="absolute bottom-3 right-4 h-2 w-2 rounded-full bg-pink-300/60"></div>
          <div className="absolute bottom-4 right-7 h-1.5 w-1.5 rounded-full bg-yellow-300/70"></div>
        </>
      )}
      {error && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ boxShadow: "inset 0 0 0 3px rgba(239, 68, 68, 0.65)" }}
          aria-hidden="true"
        />
      )}
      {error && errorMessage && (
        <p
          id="input-error"
          className="relative z-10 px-4 pb-3 text-sm font-semibold text-red-600"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
          </div>
        </>
      )}
      {error && errorMessage && (
        <p id="input-error" className="mt-1 text-red-500 text-sm font-anime" role="alert">{errorMessage}</p>
      )}
    </div>
  );
};
