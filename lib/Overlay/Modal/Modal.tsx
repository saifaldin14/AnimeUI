import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#ffffff", // Default white
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className="relative z-10 w-11/12 max-w-md mx-auto p-6 rounded-lg shadow-lg overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
          color: textColor,
        }}
      >
        {/* Anime Vibe Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Stars */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"></div>
          {/* Sparkles */}
          <div className="absolute bottom-6 left-6 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-300"></div>
          {/* Floating Hearts */}
          <div className="absolute top-1/3 left-4 w-5 h-5 transform rotate-45 animate-float">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
          <div className="absolute bottom-1/4 right-6 w-4 h-4 transform rotate-45 animate-float delay-500">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none"
          onClick={onClose}
          style={{ color: textColor }}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="relative z-10 font-anime">{children}</div>
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
    </div>
  );
};
