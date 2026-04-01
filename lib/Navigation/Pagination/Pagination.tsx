import React, { useMemo } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  fromColor?: string;
  toColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

function buildPageRange(
  current: number,
  total: number,
  siblings: number
): (number | "ellipsis")[] {
  const range: (number | "ellipsis")[] = [];

  const leftSibling = Math.max(current - siblings, 1);
  const rightSibling = Math.min(current + siblings, total);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;

  if (total <= 1) return [1];

  // Always include page 1
  range.push(1);

  if (showLeftEllipsis) {
    range.push("ellipsis");
  } else {
    for (let i = 2; i < leftSibling; i++) {
      range.push(i);
    }
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    if (i !== 1 && i !== total) {
      range.push(i);
    }
  }

  if (showRightEllipsis) {
    range.push("ellipsis");
  } else {
    for (let i = rightSibling + 1; i < total; i++) {
      range.push(i);
    }
  }

  // Always include last page
  if (total > 1) {
    range.push(total);
  }

  return range;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  className = "",
  style,
}) => {
  const pages = useMemo(
    () => buildPageRange(currentPage, totalPages, siblingCount),
    [currentPage, totalPages, siblingCount]
  );

  const activeGradient = {
    background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
  };

  const glowShadow = {
    boxShadow: `0 0 12px ${fromColor}50, 0 0 4px ${toColor}40`,
  };

  const hoverGlow = {
    "--anime-glow": fromColor,
  } as React.CSSProperties;

  const chevronLeft = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );

  const chevronRight = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  const baseBtn = [
    "inline-flex items-center justify-center",
    "w-10 h-10 rounded-lg text-sm font-medium",
    "transition-all duration-300",
    "active:scale-[0.98]",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",
  ].join(" ");

  return (
    <nav
      aria-label="Pagination"
      className={["anime-fade-in", className].filter(Boolean).join(" ")}
      style={style}
    >
      <ul className="flex items-center gap-1">
        {/* Previous button */}
        <li>
          <button
            type="button"
            disabled={currentPage <= 1}
            aria-label="Go to previous page"
            className={[
              baseBtn,
              "text-gray-300",
              currentPage <= 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-white/10 hover:text-white",
            ].join(" ")}
            style={currentPage > 1 ? hoverGlow : undefined}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {chevronLeft}
          </button>
        </li>

        {/* Page buttons */}
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <li key={`ellipsis-${index}`}>
              <span
                className="inline-flex items-center justify-center w-10 h-10 text-gray-400 select-none"
                aria-hidden="true"
              >
                ⋯
              </span>
            </li>
          ) : (
            <li key={page}>
              <button
                type="button"
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                className={[
                  baseBtn,
                  page === currentPage
                    ? "text-white anime-scale-pulse"
                    : "text-gray-300 hover:bg-white/10 hover:text-white",
                ].join(" ")}
                style={
                  page === currentPage
                    ? { ...activeGradient, ...glowShadow }
                    : hoverGlow
                }
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          )
        )}

        {/* Next button */}
        <li>
          <button
            type="button"
            disabled={currentPage >= totalPages}
            aria-label="Go to next page"
            className={[
              baseBtn,
              "text-gray-300",
              currentPage >= totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-white/10 hover:text-white",
            ].join(" ")}
            style={currentPage < totalPages ? hoverGlow : undefined}
            onClick={() => onPageChange(currentPage + 1)}
          >
            {chevronRight}
          </button>
        </li>
      </ul>
    </nav>
  );
};
