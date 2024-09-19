import React from "react";

type TailPosition = "left" | "right" | "none";

type SpeechBubbleButtonProps = {
  text: string;
  onClick?: () => void;
  tailPosition?: TailPosition;
};

export const SpeechBubbleButton: React.FC<SpeechBubbleButtonProps> = ({
  text,
  onClick,
  tailPosition = "none",
}) => {
  let tailStyles = "";

  if (tailPosition === "left") {
    tailStyles = "after:left-0 after:-ml-4 after:border-r-white";
  } else if (tailPosition === "right") {
    tailStyles = "after:right-0 after:-mr-4 after:border-l-white";
  }

  return (
    <button
      onClick={onClick}
      className={`relative bg-white text-black px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
        tailPosition !== "none"
          ? "after:absolute after:top-1/2 after:-mt-2 after:border-8 after:border-transparent"
          : ""
      } ${tailStyles}`}
    >
      {text}
    </button>
  );
};
