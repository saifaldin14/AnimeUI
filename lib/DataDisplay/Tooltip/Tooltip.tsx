import React, { useState, useRef, useCallback } from "react";
import { getAnimeVars } from "../../shared";

type TooltipPosition = "top" | "bottom" | "left" | "right";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: TooltipPosition;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowPositionClasses: Record<TooltipPosition, string> = {
  top:    "top-full left-1/2 -translate-x-1/2 -mt-[1px]",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[1px]",
  left:   "left-full top-1/2 -translate-y-1/2 -ml-[1px]",
  right:  "right-full top-1/2 -translate-y-1/2 -mr-[1px]",
};

const arrowBorderClasses: Record<TooltipPosition, string> = {
  top:    "border-l-transparent border-r-transparent border-b-transparent border-l-[6px] border-r-[6px] border-t-[6px] border-b-0",
  bottom: "border-l-transparent border-r-transparent border-t-transparent border-l-[6px] border-r-[6px] border-b-[6px] border-t-0",
  left:   "border-t-transparent border-b-transparent border-r-transparent border-t-[6px] border-b-[6px] border-l-[6px] border-r-0",
  right:  "border-t-transparent border-b-transparent border-l-transparent border-t-[6px] border-b-[6px] border-r-[6px] border-l-0",
};

const arrowColorProperty: Record<TooltipPosition, string> = {
  top:    "borderTopColor",
  bottom: "borderBottomColor",
  left:   "borderLeftColor",
  right:  "borderRightColor",
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  className = "",
  style,
}) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mangaVars = getAnimeVars({
    fromColor,
    toColor,
    textColor,
    radius: "1rem",
    shadowOffset: "3px",
  });

  const show = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(false), 100);
  }, []);

  // Use midpoint of gradient for the arrow
  const arrowColor = fromColor;

  return (
    <div
      className={`relative inline-flex ${className}`}
      style={style}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {/* Trigger */}
      <div aria-describedby={visible ? "anime-tooltip" : undefined}>
        {children}
      </div>

      {/* Tooltip */}
      {visible && (
        <div
          id="anime-tooltip"
          role="tooltip"
          className={[
            "anime-manga-panel absolute z-50 whitespace-nowrap px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] pointer-events-none anime-fade-in",
            positionClasses[position],
          ].join(" ")}
          style={mangaVars}
        >
          {content}
          {/* Arrow */}
          <span
            className={[
              "absolute w-0 h-0 border-solid",
              arrowPositionClasses[position],
              arrowBorderClasses[position],
            ].join(" ")}
            style={{
              [arrowColorProperty[position]]: arrowColor,
              filter: "drop-shadow(0 2px 0 #241335)",
            }}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
};
