import React, { useState, useRef, useEffect } from "react";
import { getAnimeVars } from "../../shared";

type PopoverProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  trigger?: "click" | "hover";
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  trigger = "click",
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  className = "",
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const mangaVars = getAnimeVars({
    fromColor,
    toColor,
    textColor,
    radius: "1.35rem",
  });

  const openPopover = () => setIsOpen(true);
  const closePopover = () => setIsOpen(false);
  const togglePopover = () => setIsOpen(!isOpen);

  // Close popover when clicking outside (for 'click' trigger)
  useEffect(() => {
    if (trigger === "click") {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, trigger]);

  return (
    <div
      className={`relative inline-block ${className}`}
      ref={popoverRef}
      onMouseEnter={trigger === "hover" ? openPopover : undefined}
      onMouseLeave={trigger === "hover" ? closePopover : undefined}
      style={style}
    >
      <div onClick={trigger === "click" ? togglePopover : undefined}>
        {children}
      </div>
      {isOpen && (
        <div
          className="anime-manga-panel absolute z-10 mt-4 w-64 overflow-hidden anime-fade-in"
          style={mangaVars}
          role="tooltip"
        >
          {/* Upward Chevron */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform" aria-hidden="true">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M0 10L10 0L20 10H0Z" fill={fromColor} stroke="#241335" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute inset-0 anime-screen-tone opacity-40" aria-hidden="true" />

          <div className="relative z-10 mt-2 p-4 font-medium">{content}</div>
        </div>
      )}
    </div>
  );
};
