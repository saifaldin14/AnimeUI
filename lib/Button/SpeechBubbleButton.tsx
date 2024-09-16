import React from "react";

// Define the possible positions for the speech bubble's tail
type SpeechBubbleButtonProps = {
  text: string;
  tailPosition?: "left" | "right" | "none";
};

export const SpeechBubbleButton: React.FC<SpeechBubbleButtonProps> = ({
  text,
  tailPosition = "none",
}) => {
  return (
    <div
      className={`relative inline-block p-4 bg-white border-2 border-black rounded-lg shadow-lg ${getTailStyles(
        tailPosition
      )}`}
    >
      <button className="text-black font-bold">{text}</button>
      {tailPosition !== "none" && (
        <div className={getTailClass(tailPosition)} />
      )}
    </div>
  );
};

// Helper function to get the position for the tail based on props
const getTailClass = (position: "left" | "right" | "none") => {
  switch (position) {
    case "left":
      return "absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-black left-[-20px] top-[50%] translate-y-[-50%]";
    case "right":
      return "absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-black right-[-20px] top-[50%] translate-y-[-50%]";
    default:
      return "";
  }
};

// Helper function to adjust padding based on tail position
const getTailStyles = (position: "left" | "right" | "none") => {
  switch (position) {
    case "left":
      return "pl-8";
    case "right":
      return "pr-8";
    default:
      return "";
  }
};
