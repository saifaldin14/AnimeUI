import React from "react";

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
  const tailStyles =
    tailPosition !== "none"
      ? {
          content: "''",
          position: "absolute" as "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          borderWidth: "8px",
          borderStyle: "solid",
          borderColor: "transparent",
          ...(tailPosition === "left" && {
            left: "0",
            marginLeft: "-16px",
            borderRightColor: tailColor || backgroundColor,
          }),
          ...(tailPosition === "right" && {
            right: "0",
            marginRight: "-16px",
            borderLeftColor: tailColor || backgroundColor,
          }),
        }
      : {};

  return (
    <button
      onClick={onClick}
      aria-label={text}
      className={`relative px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
      style={{ backgroundColor, color: textColor, ...style }}
    >
      {text}
      {tailPosition !== "none" && <span style={tailStyles} />}
    </button>
  );
};
