import React from "react";

type AnimeDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fromColor?: string; // Start color for the gradient
  toColor?: string; // End color for the gradient
  elementColor?: string; // Color for the floating elements
  textColor?: string; // Text color
};

export const Drawer: React.FC<AnimeDrawerProps> = ({
  isOpen,
  onClose,
  children,
  fromColor = "#ec4899", // Default to pink-500
  toColor = "#a855f7", // Default to purple-500
  elementColor = "#f9a8d4", // Default to pink-300
  textColor = "#ffffff", // Default to white
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
        style={{ width: "300px" }}
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
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating Stars */}
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-[var(--element-color)] rounded-full animate-twinkle"></div>
            <div className="absolute top-20 right-1/4 w-3 h-3 bg-[var(--element-color)] rounded-full animate-twinkle delay-200"></div>
            <div className="absolute bottom-16 left-1/3 w-2.5 h-2.5 bg-[var(--element-color)] rounded-full animate-twinkle delay-400"></div>
            {/* Sparkles */}
            <div className="absolute bottom-10 right-10 w-4 h-4 bg-[var(--element-color)] rounded-full animate-ping"></div>
            <div className="absolute top-16 right-8 w-3 h-3 bg-[var(--element-color)] rounded-full animate-ping delay-300"></div>
            {/* Floating Hearts */}
            <div className="absolute bottom-1/3 left-5 w-5 h-5 transform rotate-45 animate-float">
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full"></div>
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full transform -translate-x-full"></div>
            </div>
            <div className="absolute top-1/4 right-8 w-4 h-4 transform rotate-45 animate-float delay-500">
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full"></div>
              <div className="absolute inset-0 bg-[var(--element-color)] rounded-full transform -translate-x-full"></div>
            </div>
          </div>
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-[var(--text-color)] text-2xl focus:outline-none z-10"
            onClick={onClose}
          >
            &times;
          </button>
          {/* Content */}
          <div className="relative p-6 overflow-y-auto h-full z-10 font-anime text-[var(--text-color)]">
            {children}
          </div>
        </div>
      </div>

      {/* TailwindCSS Custom Animations */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          .animate-twinkle {
            animation: twinkle 2s infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0) rotate(45deg); }
            50% { transform: translateY(-20px) rotate(45deg); }
            100% { transform: translateY(0) rotate(45deg); }
          }
        `}
      </style>
    </>
  );
};
