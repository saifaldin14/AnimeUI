import React from "react";
import { animeStatusAccents, getAnimePaperVars } from "../../shared";

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
  const [fromColor, toColor] = animeStatusAccents[type];
  const mangaVars = getAnimePaperVars({
    fromColor,
    toColor,
    textColor: customColors?.text ?? "#241335",
    radius: "1.25rem",
  });

  const containerStyle = customColors
    ? {
        backgroundColor: customColors.background,
        borderColor: customColors.border,
        color: customColors.text,
      }
    : {};

  return (
    <div
      className={`anime-manga-paper relative mb-4 overflow-hidden p-4 animate-fadeIn ${
        !customColors ? `${defaultStyles.text}` : ""
      }`}
      style={{ ...mangaVars, ...containerStyle }}
    >
      <div
        className="absolute bottom-0 left-0 top-0 w-3"
        style={{ background: `linear-gradient(180deg, ${fromColor}, ${toColor})` }}
        aria-hidden="true"
      />
      <p className="pl-3 font-semibold uppercase tracking-[0.08em]">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl leading-none focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};
