import React, { useEffect, useCallback } from "react";
import { getAnimeVars } from "../../shared";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  className = "",
  style,
}) => {
  const mangaVars = getAnimeVars({
    fromColor,
    toColor,
    textColor,
    radius: "1.6rem",
  });

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Modal"
    >
      {/* Background Overlay */}
      <div
        className="anime-overlay-backdrop absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={`anime-manga-panel relative z-10 mx-auto w-11/12 max-w-md overflow-hidden p-6 anime-fade-in ${className}`}
        style={{ ...mangaVars, ...style }}
      >
        <div className="absolute inset-0 anime-screen-tone opacity-45" aria-hidden="true" />

        {/* Close Button */}
        <button
          className="absolute right-4 top-4 z-10 text-2xl focus:outline-none"
          onClick={onClose}
          style={{ color: textColor }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="relative z-10 font-medium">{children}</div>
      </div>
    </div>
  );
};
