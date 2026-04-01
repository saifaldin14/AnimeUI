import React from "react";

export const animeInk = "#241335";
export const animePaper = "#fff7fb";
export const animeSparkleClipPath =
  "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)";
export const animeStatusAccents = {
  success: ["#22c55e", "#86efac"],
  error: ["#ef4444", "#fb7185"],
  warning: ["#f59e0b", "#fde047"],
  info: ["#3b82f6", "#7dd3fc"],
} as const;

type AnimeVarsOptions = {
  fromColor: string;
  toColor: string;
  textColor?: string;
  toneColor?: string;
  accentColor?: string;
  radius?: string;
  shadowOffset?: string;
};

export const getAnimeVars = ({
  fromColor,
  toColor,
  textColor = "#ffffff",
  toneColor = "rgba(255, 255, 255, 0.18)",
  accentColor = "rgba(255, 255, 255, 0.26)",
  radius = "1.5rem",
  shadowOffset = "6px",
}: AnimeVarsOptions): React.CSSProperties =>
  ({
    "--anime-panel-from": fromColor,
    "--anime-panel-to": toColor,
    "--anime-panel-text": textColor,
    "--anime-panel-tone": toneColor,
    "--anime-panel-accent": accentColor,
    "--anime-panel-radius": radius,
    "--anime-shadow-offset": shadowOffset,
    "--anime-ink": animeInk,
  }) as React.CSSProperties;

type AnimePaperVarsOptions = {
  fromColor: string;
  toColor: string;
  textColor?: string;
  paperColor?: string;
  radius?: string;
  shadowOffset?: string;
};

export const getAnimePaperVars = ({
  fromColor,
  toColor,
  textColor = animeInk,
  paperColor = animePaper,
  radius = "1.35rem",
  shadowOffset = "4px",
}: AnimePaperVarsOptions): React.CSSProperties =>
  ({
    ...getAnimeVars({
      fromColor,
      toColor,
      textColor,
      toneColor: "rgba(236, 72, 153, 0.08)",
      accentColor: "rgba(255, 255, 255, 0.72)",
      radius,
      shadowOffset,
    }),
    "--anime-paper": paperColor,
  }) as React.CSSProperties;
