/**
 * AnimeUI Design Tokens
 *
 * Centralized design tokens that define the visual language of the library.
 * These tokens are used by the AnimeThemeProvider and all components.
 */

export type AnimeColorPalette = {
  sakura: string;
  lavender: string;
  sky: string;
  mint: string;
  sunset: string;
  gold: string;
  coral: string;
  ocean: string;
  rose: string;
  violet: string;
};

export type AnimeGradient = {
  from: string;
  to: string;
  direction?: string;
};

export type AnimeThemeColors = {
  primary: AnimeGradient;
  secondary: AnimeGradient;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  sparkle: string;
  glow: string;
  success: string;
  error: string;
  warning: string;
  info: string;
};

export type AnimeThemeAnimations = {
  twinkle: string;
  float: string;
  shimmer: string;
  bounce: string;
  fadeIn: string;
  slideUp: string;
  glow: string;
  sparkle: string;
};

export type AnimeThemeShadows = {
  sm: string;
  md: string;
  lg: string;
  glow: string;
  neon: string;
};

export type AnimeThemeSpacing = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
};

export type AnimeThemeBorderRadius = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

export type AnimeThemeFonts = {
  heading: string;
  body: string;
  accent: string;
};

export type AnimeTheme = {
  name: string;
  colors: AnimeThemeColors;
  palette: AnimeColorPalette;
  animations: AnimeThemeAnimations;
  shadows: AnimeThemeShadows;
  spacing: AnimeThemeSpacing;
  borderRadius: AnimeThemeBorderRadius;
  fonts: AnimeThemeFonts;
};

// ─── Default Color Palettes ────────────────────────────────────────────

export const animePalette: AnimeColorPalette = {
  sakura: '#f9a8d4',
  lavender: '#c084fc',
  sky: '#7dd3fc',
  mint: '#6ee7b7',
  sunset: '#fb923c',
  gold: '#fbbf24',
  coral: '#fb7185',
  ocean: '#38bdf8',
  rose: '#ec4899',
  violet: '#a855f7',
};

// ─── Theme Presets ─────────────────────────────────────────────────────

export const sakuraTheme: AnimeTheme = {
  name: 'sakura',
  colors: {
    primary: { from: '#ec4899', to: '#a855f7', direction: 'to right' },
    secondary: { from: '#f9a8d4', to: '#c084fc', direction: 'to right' },
    accent: '#fbbf24',
    background: '#1a0a2e',
    surface: '#2d1b4e',
    text: '#ffffff',
    textMuted: '#d1d5db',
    border: 'rgba(236, 72, 153, 0.3)',
    sparkle: '#fbbf24',
    glow: 'rgba(236, 72, 153, 0.4)',
    success: '#34d399',
    error: '#f87171',
    warning: '#fbbf24',
    info: '#60a5fa',
  },
  palette: animePalette,
  animations: {
    twinkle: 'twinkle 2s ease-in-out infinite',
    float: 'float 3s ease-in-out infinite',
    shimmer: 'shimmer 2s linear infinite',
    bounce: 'animeBounce 1s ease-in-out infinite',
    fadeIn: 'fadeIn 0.3s ease-out',
    slideUp: 'slideUp 0.4s ease-out',
    glow: 'animeGlow 2s ease-in-out infinite',
    sparkle: 'sparkle 1.5s ease-in-out infinite',
  },
  shadows: {
    sm: '0 2px 8px rgba(236, 72, 153, 0.2)',
    md: '0 4px 16px rgba(236, 72, 153, 0.3)',
    lg: '0 8px 32px rgba(236, 72, 153, 0.4)',
    glow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
    neon: '0 0 5px rgba(236, 72, 153, 0.8), 0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  fonts: {
    heading: '"Press Start 2P", cursive',
    body: '"M PLUS Rounded 1c", "Nunito", sans-serif',
    accent: '"Press Start 2P", cursive',
  },
};

export const oceanTheme: AnimeTheme = {
  name: 'ocean',
  colors: {
    primary: { from: '#0ea5e9', to: '#6366f1', direction: 'to right' },
    secondary: { from: '#38bdf8', to: '#818cf8', direction: 'to right' },
    accent: '#22d3ee',
    background: '#0c1222',
    surface: '#1e293b',
    text: '#ffffff',
    textMuted: '#94a3b8',
    border: 'rgba(14, 165, 233, 0.3)',
    sparkle: '#22d3ee',
    glow: 'rgba(14, 165, 233, 0.4)',
    success: '#34d399',
    error: '#f87171',
    warning: '#fbbf24',
    info: '#60a5fa',
  },
  palette: {
    ...animePalette,
    sakura: '#7dd3fc',
    lavender: '#818cf8',
    rose: '#0ea5e9',
    violet: '#6366f1',
  },
  animations: sakuraTheme.animations,
  shadows: {
    sm: '0 2px 8px rgba(14, 165, 233, 0.2)',
    md: '0 4px 16px rgba(14, 165, 233, 0.3)',
    lg: '0 8px 32px rgba(14, 165, 233, 0.4)',
    glow: '0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(99, 102, 241, 0.3)',
    neon: '0 0 5px rgba(14, 165, 233, 0.8), 0 0 10px rgba(14, 165, 233, 0.6), 0 0 20px rgba(14, 165, 233, 0.4)',
  },
  spacing: sakuraTheme.spacing,
  borderRadius: sakuraTheme.borderRadius,
  fonts: sakuraTheme.fonts,
};

export const neonTheme: AnimeTheme = {
  name: 'neon',
  colors: {
    primary: { from: '#f43f5e', to: '#ec4899', direction: 'to right' },
    secondary: { from: '#fb7185', to: '#f472b6', direction: 'to right' },
    accent: '#a3e635',
    background: '#0a0a0a',
    surface: '#171717',
    text: '#ffffff',
    textMuted: '#a3a3a3',
    border: 'rgba(244, 63, 94, 0.3)',
    sparkle: '#a3e635',
    glow: 'rgba(244, 63, 94, 0.5)',
    success: '#a3e635',
    error: '#f43f5e',
    warning: '#facc15',
    info: '#38bdf8',
  },
  palette: {
    ...animePalette,
    sakura: '#fb7185',
    rose: '#f43f5e',
    gold: '#a3e635',
  },
  animations: sakuraTheme.animations,
  shadows: {
    sm: '0 2px 8px rgba(244, 63, 94, 0.2)',
    md: '0 4px 16px rgba(244, 63, 94, 0.3)',
    lg: '0 8px 32px rgba(244, 63, 94, 0.4)',
    glow: '0 0 20px rgba(244, 63, 94, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)',
    neon: '0 0 5px rgba(244, 63, 94, 0.8), 0 0 10px rgba(244, 63, 94, 0.6), 0 0 30px rgba(244, 63, 94, 0.4), 0 0 60px rgba(244, 63, 94, 0.2)',
  },
  spacing: sakuraTheme.spacing,
  borderRadius: sakuraTheme.borderRadius,
  fonts: sakuraTheme.fonts,
};

export const sunsetTheme: AnimeTheme = {
  name: 'sunset',
  colors: {
    primary: { from: '#f97316', to: '#ef4444', direction: 'to right' },
    secondary: { from: '#fb923c', to: '#f87171', direction: 'to right' },
    accent: '#fbbf24',
    background: '#1c1017',
    surface: '#2d1f28',
    text: '#ffffff',
    textMuted: '#d4a4b8',
    border: 'rgba(249, 115, 22, 0.3)',
    sparkle: '#fbbf24',
    glow: 'rgba(249, 115, 22, 0.4)',
    success: '#34d399',
    error: '#f87171',
    warning: '#fbbf24',
    info: '#60a5fa',
  },
  palette: {
    ...animePalette,
    sakura: '#fb923c',
    rose: '#f97316',
    violet: '#ef4444',
    lavender: '#f87171',
  },
  animations: sakuraTheme.animations,
  shadows: {
    sm: '0 2px 8px rgba(249, 115, 22, 0.2)',
    md: '0 4px 16px rgba(249, 115, 22, 0.3)',
    lg: '0 8px 32px rgba(249, 115, 22, 0.4)',
    glow: '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(239, 68, 68, 0.3)',
    neon: '0 0 5px rgba(249, 115, 22, 0.8), 0 0 10px rgba(249, 115, 22, 0.6), 0 0 20px rgba(249, 115, 22, 0.4)',
  },
  spacing: sakuraTheme.spacing,
  borderRadius: sakuraTheme.borderRadius,
  fonts: sakuraTheme.fonts,
};

// Default theme
export const defaultTheme = sakuraTheme;

// All available themes
export const themes = {
  sakura: sakuraTheme,
  ocean: oceanTheme,
  neon: neonTheme,
  sunset: sunsetTheme,
} as const;

export type ThemeName = keyof typeof themes;
