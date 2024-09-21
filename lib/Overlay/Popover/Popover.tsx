import React, { useState, useRef, useEffect } from "react";

type PopoverProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  trigger?: "click" | "hover"; // Option to open on click or hover
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
};

export const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  trigger = "click",
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#ffffff", // Default white
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

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
      className="relative inline-block"
      ref={popoverRef}
      onMouseEnter={trigger === "hover" ? openPopover : undefined}
      onMouseLeave={trigger === "hover" ? closePopover : undefined}
    >
      <div onClick={trigger === "click" ? togglePopover : undefined}>
        {children}
      </div>
      {isOpen && (
        <div
          className="absolute z-10 mt-2 w-64 rounded-lg shadow-lg overflow-hidden"
          style={{
            background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
            color: textColor,
          }}
        >
          {/* Upward Chevron */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M0 10L10 0L20 10H0Z" fill={fromColor} />
            </svg>
          </div>
          {/* Anime Vibe Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating Stars */}
            <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"></div>
            {/* Sparkles */}
            <div className="absolute bottom-2 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-6 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"></div>
            {/* Floating Hearts */}
            <div className="absolute top-1/3 left-2 w-4 h-4 transform rotate-45 animate-float">
              <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
              <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
            </div>
            <div className="absolute bottom-1/4 right-4 w-3 h-3 transform rotate-45 animate-float delay-500">
              <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
              <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
            </div>
          </div>

          <div className="relative p-4 font-anime z-10 mt-4">{content}</div>
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
                50% { transform: translateY(-10px) rotate(45deg); }
                100% { transform: translateY(0) rotate(45deg); }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
};
