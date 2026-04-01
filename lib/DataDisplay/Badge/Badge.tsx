import React from "react";

type BadgeVariant = "solid" | "outline" | "glow";
type BadgeSize = "sm" | "md" | "lg";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  animated?: boolean;
  dot?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

const dotSizeClasses: Record<BadgeSize, string> = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-2.5 h-2.5",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "solid",
  size = "md",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  animated = false,
  dot = false,
  className = "",
  style,
}) => {
  const gradient = `linear-gradient(135deg, ${fromColor}, ${toColor})`;

  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    solid: {
      background: gradient,
      color: textColor,
    },
    outline: {
      background: "transparent",
      border: "2px solid transparent",
      backgroundImage: `linear-gradient(rgb(17,24,39), rgb(17,24,39)), ${gradient}`,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      color: textColor,
    },
    glow: {
      background: gradient,
      color: textColor,
      "--anime-glow": fromColor,
      boxShadow: `0 0 12px ${fromColor}60, 0 0 24px ${toColor}30`,
    } as React.CSSProperties,
  };

  const animationClass = animated
    ? variant === "glow"
      ? "anime-glow"
      : "anime-scale-pulse"
    : "";

  return (
    <span
      role="status"
      className={[
        "inline-flex items-center gap-1.5 rounded-full font-semibold leading-none anime-fade-in",
        sizeClasses[size],
        animationClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ...variantStyles[variant], ...style }}
    >
      {dot && (
        <span
          className={`${dotSizeClasses[size]} rounded-full shrink-0 ${animated ? "animate-pulse" : ""}`}
          style={{ backgroundColor: textColor }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
