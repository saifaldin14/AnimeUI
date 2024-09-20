import React from "react";

type KawaiiSkeletonProps = {
  lines?: number; // Number of text lines to display
};

export const Skeleton: React.FC<KawaiiSkeletonProps> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse space-y-6 p-6 max-w-sm w-full mx-auto">
      {/* Kawaii face */}
      <div className="flex items-center justify-center">
        <div className="relative w-24 h-24">
          {/* Face background */}
          <div className="absolute inset-0 bg-pink-200 rounded-full"></div>
          {/* Eyes */}
          <div className="absolute left-6 top-8 w-3 h-3 bg-black rounded-full"></div>
          <div className="absolute right-6 top-8 w-3 h-3 bg-black rounded-full"></div>
          {/* Blush */}
          <div className="absolute left-4 bottom-6 w-4 h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute right-4 bottom-6 w-4 h-2 bg-pink-400 rounded-full"></div>
          {/* Mouth */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 w-2 h-1 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Placeholder text lines */}
      {[...Array(lines)].map((_, index) => (
        <div
          key={index}
          className="h-4 bg-pink-200 rounded mx-auto"
          style={{
            width: `${90 - index * 10}%`,
          }}
        ></div>
      ))}
    </div>
  );
};
