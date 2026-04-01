import React from "react";
import { animeInk } from "../../shared";

type TailPosition = "left" | "right" | "none";

type SpeechBubbleButtonProps = {
  text: string;
  onClick?: () => void;
  tailPosition?: TailPosition;
  backgroundColor?: string;
  textColor?: string;
  tailColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const SpeechBubbleButton: React.FC<SpeechBubbleButtonProps> = ({
  text,
  onClick,
  tailPosition = "none",
  backgroundColor = "white",
  textColor = "black",
  tailColor,
  className = "",
  style,
}) => {
  const resolvedTailColor = tailColor || backgroundColor;
  const tailStyles =
    tailPosition !== "none"
      ? {
          content: "''",
          position: "absolute" as "absolute",
          bottom: "-14px",
          width: "22px",
          height: "18px",
          borderBottom: `3px solid ${animeInk}`,
          background: `linear-gradient(180deg, ${resolvedTailColor}, #ffffff)`,
          transform: "skewX(-22deg)",
          borderRadius: "0 0 0.75rem 0",
          borderStyle: "solid",
          ...(tailPosition === "left" && {
            left: "1.25rem",
            borderLeft: `3px solid ${animeInk}`,
          }),
          ...(tailPosition === "right" && {
            right: "1.25rem",
            borderRight: `3px solid ${animeInk}`,
            transform: "skewX(22deg)",
          }),
        }
      : {};

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={text}
      className={`anime-manga-paper anime-manga-pressable relative px-6 py-4 font-bold uppercase tracking-[0.18em] ${className}`}
      style={{
        color: textColor,
        borderColor: animeInk,
        background: `linear-gradient(180deg, ${backgroundColor}, #ffffff)`,
        ...style,
      }}
    >
      {text}
      {tailPosition !== "none" && <span style={tailStyles} />}
    </button>
  );
};
