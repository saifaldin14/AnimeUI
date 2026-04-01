import React from "react";

type TagSize = "sm" | "md" | "lg";

type TagProps = {
  children: React.ReactNode;
  onRemove?: () => void;
  size?: TagSize;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

const sizeClasses: Record<TagSize, string> = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-3 py-1 text-sm gap-1.5",
  lg: "px-4 py-1.5 text-base gap-2",
};

const closeSizeClasses: Record<TagSize, string> = {
  sm: "w-3.5 h-3.5 text-[10px]",
  md: "w-4 h-4 text-xs",
  lg: "w-5 h-5 text-sm",
};

export const Tag: React.FC<TagProps> = ({
  children,
  onRemove,
  size = "md",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  className = "",
  style,
}) => {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full font-medium leading-none anime-fade-in",
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
        color: textColor,
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className={[
            "inline-flex items-center justify-center rounded-full shrink-0",
            "transition-colors duration-150",
            "hover:bg-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40",
            closeSizeClasses[size],
          ].join(" ")}
          style={{ color: textColor }}
          aria-label="Remove tag"
        >
          <svg
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="w-full h-full"
            aria-hidden="true"
          >
            <path d="M3 3l6 6M9 3l-6 6" />
          </svg>
        </button>
      )}
    </span>
  );
};
