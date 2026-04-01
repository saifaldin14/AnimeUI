import React from "react";

type MaxWidth = "sm" | "md" | "lg" | "xl" | "full";
type PatternType = "dots" | "grid" | "none";

type ContainerProps = {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
  padded?: boolean;
  background?: boolean;
  pattern?: PatternType;
  className?: string;
  style?: React.CSSProperties;
};

const maxWidthClasses: Record<MaxWidth, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

const PatternOverlay: React.FC<{ pattern: PatternType }> = ({ pattern }) => {
  if (pattern === "none") return null;

  const patternStyle: React.CSSProperties =
    pattern === "dots"
      ? {
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }
      : {
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        };

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={patternStyle}
      aria-hidden="true"
    />
  );
};

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "lg",
  padded = true,
  background = false,
  pattern = "none",
  className = "",
  style,
}) => {
  return (
    <div
      className={[
        "relative w-full mx-auto anime-fade-in",
        maxWidthClasses[maxWidth],
        padded && "px-4 py-6 sm:px-6 lg:px-8",
        background && "bg-gray-950 min-h-screen",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <PatternOverlay pattern={pattern} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
