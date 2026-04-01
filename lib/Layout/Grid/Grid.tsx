import React from "react";

type GridColumns = 1 | 2 | 3 | 4 | 6;

type GridProps = {
  children: React.ReactNode;
  columns?: GridColumns;
  gap?: "none" | "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
};

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
};

const gapClasses: Record<NonNullable<GridProps["gap"]>, string> = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = "md",
  className = "",
  style,
}) => {
  return (
    <div
      className={[
        "grid w-full anime-fade-in",
        columnClasses[columns],
        gapClasses[gap],
        className,
      ].join(" ")}
      style={style}
    >
      {children}
    </div>
  );
};
