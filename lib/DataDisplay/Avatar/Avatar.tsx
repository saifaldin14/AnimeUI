import React, { useState } from "react";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarShape = "circle" | "square";
type AvatarStatus = "online" | "offline" | "busy";

type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  fromColor?: string;
  toColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

const sizeMap: Record<AvatarSize, { outer: string; inner: string; text: string; status: string }> = {
  xs: { outer: "w-8 h-8", inner: "w-7 h-7", text: "text-xs", status: "w-2 h-2 border" },
  sm: { outer: "w-10 h-10", inner: "w-9 h-9", text: "text-sm", status: "w-2.5 h-2.5 border" },
  md: { outer: "w-14 h-14", inner: "w-[3.25rem] h-[3.25rem]", text: "text-base", status: "w-3 h-3 border-2" },
  lg: { outer: "w-20 h-20", inner: "w-[4.75rem] h-[4.75rem]", text: "text-lg", status: "w-3.5 h-3.5 border-2" },
  xl: { outer: "w-28 h-28", inner: "w-[6.75rem] h-[6.75rem]", text: "text-xl", status: "w-4 h-4 border-2" },
};

const statusColorMap: Record<AvatarStatus, string> = {
  online:  "#22c55e",
  offline: "#6b7280",
  busy:    "#ef4444",
};

const statusLabelMap: Record<AvatarStatus, string> = {
  online:  "Online",
  offline: "Offline",
  busy:    "Busy",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  name,
  size = "md",
  shape = "circle",
  status,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  className = "",
  style,
}) => {
  const [imgError, setImgError] = useState(false);
  const sizeConfig = sizeMap[size];
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-xl";
  const showImage = src && !imgError;
  const initials = name ? getInitials(name) : "?";

  return (
    <div
      role="img"
      aria-label={alt || name || "Avatar"}
      className={[
        "relative inline-flex items-center justify-center shrink-0 anime-fade-in",
        sizeConfig.outer,
        shapeClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
        boxShadow: `0 0 14px ${fromColor}40, 0 0 28px ${toColor}20`,
        padding: "2px",
        ...style,
      }}
    >
      {/* Inner container */}
      <div
        className={[
          "flex items-center justify-center overflow-hidden bg-gray-900",
          sizeConfig.inner,
          shapeClass,
        ].join(" ")}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            className={`w-full h-full object-cover ${shapeClass}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            className={`font-bold select-none ${sizeConfig.text}`}
            style={{
              backgroundImage: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            aria-hidden="true"
          >
            {initials}
          </span>
        )}
      </div>

      {/* Status indicator */}
      {status && (
        <span
          className={[
            "absolute bottom-0 right-0 rounded-full border-gray-900",
            sizeConfig.status,
          ].join(" ")}
          style={{ backgroundColor: statusColorMap[status] }}
          role="status"
          aria-label={statusLabelMap[status]}
        />
      )}
    </div>
  );
};
