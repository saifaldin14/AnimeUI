import React from "react";
import { AnimeDecorations } from "../../shared/AnimeDecorations";
import { getAnimePaperVars, getAnimeVars } from "../../shared";

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
    ...(variant === "flat" || variant === "glass"
      ? getAnimePaperVars({
          fromColor,
          toColor,
          textColor: "#241335",
          radius: "1.5rem",
        })
      : getAnimeVars({
          fromColor,
          toColor,
          textColor: "#ffffff",
          radius: "1.5rem",
        })),
  };

  return (
    <div
      {...(typeof title === "string"
        ? { role: "region" as const, "aria-label": title }
        : {})}
      className={[
        variant === "flat" || variant === "glass"
          ? "anime-manga-paper"
          : "anime-manga-panel",
        "relative overflow-hidden p-0 anime-fade-in",
        hoverable && "anime-manga-pressable",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...gradientBorder,
        ...(variant === "glass"
          ? {
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255,255,255,0.82)",
            }
          : {}),
        ...style,
      }}
    >
      <div
        className={[
          "relative overflow-hidden rounded-[inherit]",
          variantClasses[variant],
        ].join(" ")}
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
            className="px-5 py-4 text-lg font-bold uppercase tracking-[0.14em]"
            style={{
              color: variant === "flat" || variant === "glass" ? "#241335" : "#ffffff",
              borderBottom:
                variant === "flat" || variant === "glass"
                  ? "2px solid rgba(36, 19, 53, 0.12)"
                  : "2px solid rgba(255,255,255,0.14)",
            }}
          >
            {title}
          </div>
        )}

        <div className="relative z-10 px-5 py-4">{children}</div>

        {footer && (
          <div
            className="px-5 py-3 text-sm opacity-80"
            style={{
              borderTop:
                variant === "flat" || variant === "glass"
                  ? "2px solid rgba(36, 19, 53, 0.12)"
                  : "2px solid rgba(255,255,255,0.14)",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
