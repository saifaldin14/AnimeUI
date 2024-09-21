import React, { useState, useRef, useEffect } from "react";

type EditableProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
  fontSize?: number; // Font size in pixels
};

export const Editable: React.FC<EditableProps> = ({
  value,
  onChange,
  placeholder = "Click to edit",
  disabled = false,
  fromColor = "#ec4899", // Default pink-500
  toColor = "#a855f7", // Default purple-500
  textColor = "#000000", // Default black
  fontSize = 16, // Default font size
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const startEditing = () => {
    if (!disabled) {
      setIsEditing(true);
    }
  };

  const stopEditing = () => {
    setIsEditing(false);
    onChange(currentValue);
  };

  // Automatically focus the input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      className={`relative inline-block cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={startEditing}
    >
      {!isEditing ? (
        <span
          className="font-anime"
          style={{
            background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: `${fontSize}px`,
          }}
        >
          {value || placeholder}
          {/* Anime Vibe Elements */}
          <div className="absolute -top-2 -right-2 animate-ping">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </span>
      ) : (
        <input
          ref={inputRef}
          type="text"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onBlur={stopEditing}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              stopEditing();
            }
          }}
          disabled={disabled}
          className="font-anime bg-transparent border-b-2 border-dashed border-pink-500 focus:outline-none"
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
          }}
        />
      )}
      {/* TailwindCSS Custom Animations */}
      <style>
        {`
          @keyframes ping {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          .animate-ping {
            animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </div>
  );
};
