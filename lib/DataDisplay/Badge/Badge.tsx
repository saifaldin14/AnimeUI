import React from "react";
import { getAnimePaperVars, getAnimeVars } from "../../shared";

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
  const panelVars = getAnimeVars({
    fromColor,
    toColor,
    textColor,
    radius: "999px",
    shadowOffset: "3px",
  });
  const paperVars = getAnimePaperVars({
    fromColor,
    toColor,
    textColor: "#241335",
    radius: "999px",
    shadowOffset: "3px",
  });

  const animationClass = animated
    ? variant === "glow"
      ? "anime-glow"
      : "anime-scale-pulse"
    : "";

  return (
    <span
      role="status"
      className={[
        variant === "outline" ? "anime-manga-paper" : "anime-manga-chip",
        "inline-flex items-center gap-1.5 font-semibold uppercase leading-none tracking-[0.12em] anime-fade-in",
        sizeClasses[size],
        animationClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...(variant === "outline" ? paperVars : panelVars),
        ...(variant === "glow"
          ? {
              boxShadow: `0 0 0 2px #241335, 0 0 16px ${fromColor}55, 3px 3px 0 #241335`,
            }
          : {}),
        ...style,
      }}
    >
      {dot && (
        <span
          className={`${dotSizeClasses[size]} shrink-0 rounded-full ${animated ? "animate-pulse" : ""}`}
          style={{
            backgroundColor: variant === "outline" ? fromColor : textColor,
            boxShadow: "0 0 0 2px rgba(36, 19, 53, 0.18)",
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
