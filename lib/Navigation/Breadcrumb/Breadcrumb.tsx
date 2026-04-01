import React from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
  active?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "★",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  className = "",
  style,
}) => {
  const activeGradientText = {
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent",
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={["anime-fade-in", className].filter(Boolean).join(" ")}
      style={style}
    >
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = item.active ?? isLast;

          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && (
                <span
                  className="mx-1 text-xs opacity-60 anime-twinkle select-none"
                  style={{ color: fromColor }}
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}

              {isActive ? (
                <span
                  className="font-semibold anime-text-glow"
                  style={activeGradientText}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className="transition-all duration-200 opacity-70 hover:opacity-100"
                  style={{
                    color: fromColor,
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span className="opacity-70 text-gray-300">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
