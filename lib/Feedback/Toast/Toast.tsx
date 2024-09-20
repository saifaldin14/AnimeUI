import React, { useEffect } from "react";

type ToastType = "success" | "error" | "warning" | "info";

type AnimeToastProps = {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number; // Duration in milliseconds
  customColors?: {
    background: string;
    text: string;
    icon: string;
  };
};

const toastTypeStyles: Record<
  ToastType,
  { background: string; icon: JSX.Element; text: string }
> = {
  success: {
    background: "bg-green-500",
    icon: (
      <svg
        className="w-6 h-6 text-white mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    text: "text-white",
  },
  error: {
    background: "bg-red-500",
    icon: (
      <svg
        className="w-6 h-6 text-white mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    text: "text-white",
  },
  warning: {
    background: "bg-yellow-500",
    icon: (
      <svg
        className="w-6 h-6 text-black mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m0-4h.01"
        />
      </svg>
    ),
    text: "text-black",
  },
  info: {
    background: "bg-blue-500",
    icon: (
      <svg
        className="w-6 h-6 text-white mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m0-4h.01"
        />
      </svg>
    ),
    text: "text-white",
  },
};

export const Toast: React.FC<AnimeToastProps> = ({
  message,
  type = "info",
  onClose,
  duration = 3000,
  customColors,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const defaultStyles = toastTypeStyles[type];

  const containerStyle = customColors
    ? {
        backgroundColor: customColors.background,
        color: customColors.text,
      }
    : {};

  const iconStyle = customColors ? { color: customColors.icon } : undefined;

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-sm w-full flex items-center p-4 mb-4 animate-slideIn rounded-md shadow-md ${
        !customColors ? `${defaultStyles.background} ${defaultStyles.text}` : ""
      }`}
      style={containerStyle}
    >
      <div className="flex items-center">
        {customColors ? (
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={iconStyle}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V9H9V7h2zm0 4v4H9v-4h2z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          defaultStyles.icon
        )}
        <p className="font-anime">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-xl leading-none focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};
