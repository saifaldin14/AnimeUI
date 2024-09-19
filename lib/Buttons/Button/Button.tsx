import React from "react";

type AnimeButtonProps = {
  text: string;
  onClick?: () => void;
  fromColor?: string;
  toColor?: string;
};

export const Button: React.FC<AnimeButtonProps> = ({
  text,
  onClick,
  fromColor = "#ec4899", // Default to Tailwind's pink-500
  toColor = "#a855f7", // Default to Tailwind's purple-500
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
  };

  return (
    <button
      onClick={onClick}
      className="relative inline-block px-8 py-3 font-bold text-white group"
    >
      <span
        style={gradientStyle}
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-0 translate-y-0 group-hover:-translate-x-1 group-hover:-translate-y-1"
      ></span>
      <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
      <span className="relative">{text}</span>
    </button>
  );
};
