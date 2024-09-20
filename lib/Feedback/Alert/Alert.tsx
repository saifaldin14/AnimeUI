import React from "react";

type AlertType = "success" | "error" | "warning" | "info";

type AnimeAlertProps = {
  message: string;
  type?: AlertType;
  onClose?: () => void;
  customColors?: {
    background: string;
    text: string;
    border: string;
  };
};

const alertTypeStyles: Record<
  AlertType,
  { background: string; border: string; text: string }
> = {
  success: {
    background: "bg-green-500",
    border: "border-green-700",
    text: "text-white",
  },
  error: {
    background: "bg-red-500",
    border: "border-red-700",
    text: "text-white",
  },
  warning: {
    background: "bg-yellow-500",
    border: "border-yellow-700",
    text: "text-black",
  },
  info: {
    background: "bg-blue-500",
    border: "border-blue-700",
    text: "text-white",
  },
};

export const Alert: React.FC<AnimeAlertProps> = ({
  message,
  type = "info",
  onClose,
  customColors,
}) => {
  const defaultStyles = alertTypeStyles[type];

  const containerStyle = customColors
    ? {
        backgroundColor: customColors.background,
        borderColor: customColors.border,
        color: customColors.text,
      }
    : {};

  return (
    <div
      className={`relative border-l-4 p-4 mb-4 animate-fadeIn rounded-md shadow-md ${
        !customColors
          ? `${defaultStyles.background} ${defaultStyles.border} ${defaultStyles.text}`
          : ""
      }`}
      style={containerStyle}
    >
      <p className="font-anime">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl leading-none focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};
