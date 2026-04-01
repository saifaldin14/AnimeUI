import React from "react";
import { animeSparkleClipPath, getAnimeVars } from "../../shared";

type AnimeButtonProps = {
  text: string;
  onClick?: () => void;
  fromColor?: string;
  toColor?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
};

export const Button: React.FC<AnimeButtonProps> = ({
  text,
  onClick,
  fromColor = "#ec4899", // Default to Tailwind's pink-500
  toColor = "#a855f7", // Default to Tailwind's purple-500
  className = "",
  style,
  disabled = false,
}) => {
  const mangaVars = getAnimeVars({
    fromColor,
    toColor,
    textColor: "#ffffff",
    radius: "1.35rem",
  });

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
      aria-disabled={disabled}
      className={`anime-manga-panel anime-manga-pressable relative inline-flex items-center justify-center overflow-hidden px-8 py-3 font-bold uppercase tracking-[0.18em] text-white ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
      style={{ ...mangaVars, ...style }}
    >
      <span className="absolute inset-0 anime-screen-tone opacity-60" aria-hidden="true" />
      <span
        className="absolute right-4 top-3 h-3 w-3 anime-sparkle"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,245,157,0.95))",
          clipPath: animeSparkleClipPath,
        }}
        aria-hidden="true"
      />
      <span className="relative z-10 drop-shadow-[0_2px_0_rgba(36,19,53,0.6)]">
        {text}
      </span>
    </button>
  );
};
