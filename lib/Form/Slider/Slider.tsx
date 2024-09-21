import React from "react";

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  color?: string; // Start color for gradient
};

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  color = "#ec4899", // Default pink-500
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange(newValue);
  };

  return (
    <div className="relative w-full">
      <input
        type="range"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className="slider"
        style={{
          background: `linear-gradient(90deg, ${color} ${percentage}%, #e5e7eb ${percentage}%)`,
        }}
      />
      {/* Anime Vibe Elements */}
      {!disabled && (
        <div
          className="absolute top-1/2 transform -translate-y-1/2 pointer-events-none"
          style={{ left: `calc(${percentage}% - 10px)` }}
        >
          <div className="relative">
            {/* Sparkle */}
            <div className="absolute -top-3 -left-3 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
            {/* Floating Heart */}
            <div className="absolute -bottom-4 -right-3 w-4 h-4 transform rotate-45 animate-float">
              <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
              <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
            </div>
          </div>
        </div>
      )}
      {/* TailwindCSS Custom Styles and Animations */}
      <style>
        {`
          .slider {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            border-radius: 4px;
            outline: none;
          }
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: ${color};
            border-radius: 50%;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: ${color};
            border-radius: 50%;
            cursor: pointer;
          }
          @keyframes float {
            0% { transform: translateY(0) rotate(45deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
            100% { transform: translateY(0) rotate(45deg); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};
