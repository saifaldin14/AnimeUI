import React from "react";

type AnimeButtonProps = {
  text: string;
  onClick?: () => void;
};

export const Button: React.FC<AnimeButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-block px-8 py-3 font-bold text-white group"
    >
      <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-0 translate-y-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
      <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
      <span className="relative">{text}</span>
    </button>
  );
};
