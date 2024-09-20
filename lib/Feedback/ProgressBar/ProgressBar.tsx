import React from "react";

type AnimeProgressBarProps = {
  progress: number; // Progress value between 0 and 100
  fromColor?: string;
  toColor?: string;
  height?: number; // Height of the progress bar in pixels
  showPercentage?: boolean;
};

export const ProgressBar: React.FC<AnimeProgressBarProps> = ({
  progress,
  fromColor = "#ec4899", // Default to Tailwind's pink-500
  toColor = "#a855f7", // Default to Tailwind's purple-500
  height = 20,
  showPercentage = true,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const progressStyle = {
    width: `${clampedProgress}%`,
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
    height: `${height}px`,
  };

  return (
    <div className="w-full bg-gray-300 rounded-full overflow-hidden shadow-inner">
      <div
        className="animate-progress font-anime text-white flex items-center justify-center transition-width duration-500 ease-out"
        style={progressStyle}
      >
        {showPercentage && clampedProgress > 5 && (
          <span className="text-sm font-bold">{clampedProgress}%</span>
        )}
      </div>
    </div>
  );
};
