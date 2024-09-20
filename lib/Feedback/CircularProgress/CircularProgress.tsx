import React from "react";

type AnimeCircularProgressBarProps = {
  progress: number; // Progress value between 0 and 100
  size?: number; // Diameter of the circular progress bar
  strokeWidth?: number; // Width of the progress bar stroke
  fromColor?: string; // Start color of the gradient
  toColor?: string; // End color of the gradient
  showPercentage?: boolean; // Whether to display percentage text
};

export const CircularProgress: React.FC<AnimeCircularProgressBarProps> = ({
  progress,
  size = 150,
  strokeWidth = 10,
  fromColor = "#ec4899", // Default to Tailwind's pink-500
  toColor = "#a855f7", // Default to Tailwind's purple-500
  showPercentage = true,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedProgress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#e5e7eb" // Tailwind's gray-300
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="animate-progress"
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
      </svg>
      {/* Percentage Text */}
      {showPercentage && (
        <div className="absolute font-anime text-xl text-black">
          {clampedProgress}%
        </div>
      )}
    </div>
  );
};
