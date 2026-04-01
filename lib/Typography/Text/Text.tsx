import React from "react";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
type TextWeight = "light" | "normal" | "medium" | "bold";
type TextElement = "p" | "span" | "div";

type TextProps = {
  children: React.ReactNode;
  size?: TextSize;
  gradient?: boolean;
  glow?: boolean;
  color?: string;
  weight?: TextWeight;
  as?: TextElement;
  fromColor?: string;
  toColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

const sizeClasses: Record<TextSize, string> = {
  xs: "text-xs leading-relaxed",
  sm: "text-sm leading-relaxed",
  md: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
  xl: "text-xl leading-relaxed",
};

const weightClasses: Record<TextWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

export const Text: React.FC<TextProps> = ({
  children,
  size = "md",
  gradient = false,
  glow = false,
  color,
  weight = "normal",
  as: Tag = "p",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  className = "",
  style,
}) => {
  const gradientStyle: React.CSSProperties = gradient
    ? {
        backgroundImage: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }
    : {};

  const colorStyle: React.CSSProperties =
    !gradient && color ? { color } : {};

  const glowStyle: React.CSSProperties = glow
    ? ({ "--anime-glow": fromColor } as React.CSSProperties)
    : {};

  const classes = [
    sizeClasses[size],
    weightClasses[weight],
    "anime-fade-in",
    glow ? "anime-text-glow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={classes}
      style={{ ...gradientStyle, ...colorStyle, ...glowStyle, ...style }}
    >
      {children}
    </Tag>
  );
};
