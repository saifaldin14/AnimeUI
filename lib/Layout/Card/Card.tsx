import React from "react";
import { AnimeDecorations } from "../../shared/AnimeDecorations";

type CardVariant = "default" | "glass" | "neon" | "flat";

type CardProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: CardVariant;
  fromColor?: string;
  toColor?: string;
  hoverable?: boolean;
  decorations?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const variantClasses: Record<CardVariant, string> = {
  default:
    "bg-gray-900/90 text-white shadow-lg",
  glass:
    "bg-white/10 backdrop-blur-md text-white shadow-lg border border-white/20",
  neon:
    "bg-gray-950 text-white shadow-lg anime-glow",
  flat:
    "bg-gray-900 text-white",
};

export const Card: React.FC<CardProps> = ({
  children,
  title,
  footer,
  variant = "default",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  hoverable = true,
  decorations = false,
  className = "",
  style,
}) => {
  const gradientBorder = {
    background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
  };

  const glowShadow = {
    "--anime-glow": fromColor,
    boxShadow: `0 0 15px ${fromColor}40, 0 0 30px ${toColor}20`,
  } as React.CSSProperties;

  return (
    <div
      {...(typeof title === "string"
        ? { role: "region" as const, "aria-label": title }
        : {})}
      className={[
        "relative rounded-xl p-[2px] anime-fade-in",
        hoverable &&
          "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ...gradientBorder, ...style }}
    >
      <div
        className={[
          "relative rounded-[10px] overflow-hidden",
          variantClasses[variant],
        ].join(" ")}
        style={variant === "neon" ? glowShadow : undefined}
      >
        {decorations && (
          <AnimeDecorations
            stars
            sparkles
            hearts={false}
            starCount={3}
            sparkleCount={2}
          />
        )}

        {title && (
          <div
            className="px-5 py-4 border-b border-white/10 font-bold text-lg"
            style={{
              backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </div>
        )}

        <div className="px-5 py-4 relative z-10">{children}</div>

        {footer && (
          <div className="px-5 py-3 border-t border-white/10 text-sm opacity-80">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
