import React from "react";

type DividerOrientation = "horizontal" | "vertical";
type DividerVariant = "solid" | "dashed" | "sparkle";
type DividerDecoration = "star" | "heart" | "diamond" | "none";

type DividerProps = {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  fromColor?: string;
  toColor?: string;
  decoration?: DividerDecoration;
  thickness?: number;
  className?: string;
  style?: React.CSSProperties;
};

const DecorationIcon: React.FC<{
  decoration: DividerDecoration;
  color: string;
}> = ({ decoration, color }) => {
  if (decoration === "none") return null;

  const icons: Record<Exclude<DividerDecoration, "none">, React.ReactNode> = {
    star: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={color}
        className="anime-twinkle"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    heart: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={color}
        className="anime-scale-pulse"
        aria-hidden="true"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    diamond: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={color}
        className="anime-sparkle"
        aria-hidden="true"
      >
        <path d="M12 2L2 12l10 10 10-10L12 2z" />
      </svg>
    ),
  };

  return (
    <span className="mx-3 flex-shrink-0 inline-flex items-center">
      {icons[decoration]}
    </span>
  );
};

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  decoration = "none",
  thickness = 2,
  className = "",
  style,
}) => {
  const isVertical = orientation === "vertical";

  const lineGradient: React.CSSProperties = isVertical
    ? { backgroundImage: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }
    : { backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})` };

  const variantStyle: React.CSSProperties =
    variant === "dashed"
      ? {
          ...lineGradient,
          maskImage: isVertical
            ? `repeating-linear-gradient(to bottom, black 0px, black 8px, transparent 8px, transparent 16px)`
            : `repeating-linear-gradient(to right, black 0px, black 8px, transparent 8px, transparent 16px)`,
          WebkitMaskImage: isVertical
            ? `repeating-linear-gradient(to bottom, black 0px, black 8px, transparent 8px, transparent 16px)`
            : `repeating-linear-gradient(to right, black 0px, black 8px, transparent 8px, transparent 16px)`,
        }
      : lineGradient;

  const glowStyle: React.CSSProperties =
    variant === "sparkle"
      ? { boxShadow: `0 0 8px ${fromColor}80, 0 0 16px ${toColor}40` }
      : {};

  if (isVertical) {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={`inline-flex flex-col items-center self-stretch ${className}`}
        style={style}
      >
        <div
          className="flex-1 rounded-full"
          style={{
            width: `${thickness}px`,
            ...variantStyle,
            ...glowStyle,
          }}
        />
      </div>
    );
  }

  const hasDecoration = decoration !== "none";

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`flex items-center w-full my-4 ${className}`}
      style={style}
    >
      <div
        className="flex-1 rounded-full"
        style={{
          height: `${thickness}px`,
          ...variantStyle,
          ...glowStyle,
        }}
      />
      {hasDecoration && (
        <DecorationIcon decoration={decoration} color={fromColor} />
      )}
      {hasDecoration && (
        <div
          className="flex-1 rounded-full"
          style={{
            height: `${thickness}px`,
            ...variantStyle,
            ...glowStyle,
          }}
        />
      )}
    </div>
  );
};
