import React from "react";
import { Sparkles } from "../../shared/AnimeDecorations";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  children: React.ReactNode;
  level?: HeadingLevel;
  gradient?: boolean;
  glow?: boolean;
  sparkle?: boolean;
  fromColor?: string;
  toColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-5xl font-extrabold leading-tight",
  2: "text-4xl font-bold leading-tight",
  3: "text-3xl font-bold leading-snug",
  4: "text-2xl font-semibold leading-snug",
  5: "text-xl font-semibold leading-normal",
  6: "text-lg font-medium leading-normal",
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  gradient = false,
  glow = false,
  sparkle = false,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  className = "",
  style,
}) => {
  const Tag = `h${level}` as const;

  const gradientStyle: React.CSSProperties = gradient
    ? {
        backgroundImage: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }
    : {};

  const glowStyle: React.CSSProperties = glow
    ? ({ "--anime-glow": fromColor } as React.CSSProperties)
    : {};

  const classes = [
    levelClasses[level],
    "anime-fade-in",
    glow ? "anime-text-glow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={sparkle ? "relative inline-block" : "inline-block"}
      style={style}
    >
      <span
        className={classes}
        style={{ ...gradientStyle, ...glowStyle }}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </span>
      {sparkle && (
        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Sparkles color={fromColor} count={2} />
        </span>
      )}
    </Tag>
  );
};
