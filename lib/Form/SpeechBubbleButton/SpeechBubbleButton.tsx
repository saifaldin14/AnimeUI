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
          position: "absolute" as "absolute",
          bottom: "-10px",
          width: "18px",
          height: "18px",
          background: `linear-gradient(180deg, ${resolvedTailColor}, #ffffff)`,
          transform: "rotate(45deg)",
          ...(tailPosition === "left" && {
            left: "1.5rem",
            borderRight: `3px solid ${animeInk}`,
            borderBottom: `3px solid ${animeInk}`,
          }),
          ...(tailPosition === "right" && {
            right: "1.5rem",
            borderTop: `3px solid ${animeInk}`,
            borderLeft: `3px solid ${animeInk}`,
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
