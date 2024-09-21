import React from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
}) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
  };

  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <div className="relative" style={{ width: "24px", height: "24px" }}>
        {/* Hidden Checkbox Input */}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="opacity-0 absolute inset-0 w-full h-full z-10 cursor-pointer"
        />
        {/* Custom Checkbox */}
        <div
          className="w-full h-full rounded-md flex items-center justify-center transition-colors duration-300"
          style={gradientStyle}
        >
          {checked && (
            <svg
              className="w-5 h-5 text-white animate-draw"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {/* Anime Vibe Elements */}
        {checked && (
          <>
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-pink-300 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-300 rounded-full animate-bounce"></div>
          </>
        )}
      </div>
      {label && <span className="ml-3 font-anime">{label}</span>}
      {/* Custom Animations */}
      <style>
        {`
          @keyframes draw {
            from {
              stroke-dashoffset: 100;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          .animate-draw path {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 0.5s forwards;
          }
        `}
      </style>
    </label>
  );
};
