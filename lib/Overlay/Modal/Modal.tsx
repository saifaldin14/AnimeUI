import React, { useEffect, useCallback } from "react";

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
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div
        className={`relative z-10 w-11/12 max-w-md mx-auto p-6 rounded-lg shadow-lg overflow-hidden anime-fade-in ${className}`}
        style={{
          background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
          color: textColor,
          ...style,
        }}
      >
        {/* Anime Vibe Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Floating Stars */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full anime-twinkle"></div>
          <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full anime-twinkle anime-delay-200"></div>
          {/* Sparkles */}
          <div className="absolute bottom-6 left-6 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping anime-delay-300"></div>
          {/* Floating Hearts */}
          <div className="absolute top-1/3 left-4 w-5 h-5 transform rotate-45 anime-float-rotate">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
          <div className="absolute bottom-1/4 right-6 w-4 h-4 transform rotate-45 anime-float-rotate anime-delay-500">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none"
          onClick={onClose}
          style={{ color: textColor }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="relative z-10 font-anime">{children}</div>
      </div>
    </div>
  );
};
