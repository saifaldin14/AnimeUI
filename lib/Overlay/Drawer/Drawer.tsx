import React, { useEffect, useCallback } from "react";

type AnimeDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  elementColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Drawer: React.FC<AnimeDrawerProps> = ({
  isOpen,
  onClose,
  children,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  elementColor = "#f9a8d4",
  textColor = "#ffffff",
  className = "",
  style,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out ${className}`}
        style={{ width: "300px", ...style }}
        role="dialog"
        aria-modal="true"
        aria-label="Drawer"
        aria-hidden={!isOpen}
      >
        <div
          className="relative h-full shadow-xl overflow-hidden"
          style={
            {
              background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
              "--element-color": elementColor,
              "--text-color": textColor,
            } as React.CSSProperties
          }
        >
          {/* Cute Anime Vibe Elements */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Floating Stars */}
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-[var(--element-color)] rounded-full anime-twinkle"></div>
            <div className="absolute top-20 right-1/4 w-3 h-3 bg-[var(--element-color)] rounded-full anime-twinkle anime-delay-200"></div>
            <div className="absolute bottom-16 left-1/3 w-2.5 h-2.5 bg-[var(--element-color)] rounded-full anime-twinkle anime-delay-400"></div>
            {/* Sparkles */}
            <div className="absolute bottom-10 right-10 w-4 h-4 bg-[var(--element-color)] rounded-full animate-ping"></div>
            <div className="absolute top-16 right-8 w-3 h-3 bg-[var(--element-color)] rounded-full animate-ping anime-delay-300"></div>
            {/* Floating Hearts */}
            <div className="absolute bottom-1/3 left-5 w-5 h-5 transform rotate-45 anime-float-rotate">
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full"></div>
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full transform -translate-x-full"></div>
            </div>
            <div className="absolute top-1/4 right-8 w-4 h-4 transform rotate-45 anime-float-rotate anime-delay-500">
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full"></div>
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full transform -translate-x-full"></div>
            </div>
          </div>
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-[var(--text-color)] text-2xl focus:outline-none z-10"
            onClick={onClose}
            aria-label="Close drawer"
          >
            &times;
          </button>
          {/* Content */}
          <div className="relative p-6 overflow-y-auto h-full z-10 font-anime text-[var(--text-color)]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
