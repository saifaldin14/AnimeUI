/**
 * AnimeUI Design Tokens
 *
 * Centralized design tokens that define the visual language of the library.
 * These tokens are used by the AnimeThemeProvider and all components.
 */

// ─── Typography Scale (Modular scale ratio 1.25) ───────────────────────

export const fontSize = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  md: '1.125rem',    // 18px
  lg: '1.25rem',     // 20px
  xl: '1.5rem',      // 24px
  '2xl': '1.875rem', // 30px
  '3xl': '2.25rem',  // 36px
  '4xl': '3rem',     // 48px
  '5xl': '3.75rem',  // 60px
  display: '4.5rem', // 72px
} as const;

export const lineHeight = {
  tight: '1.15',
  snug: '1.3',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
} as const;

export const letterSpacing = {
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
} as const;

// ─── Spacing (4px base unit, consistent rhythm) ────────────────────────

export const spacing = {
  '0': '0px',
  '0.5': '0.125rem', // 2px
  '1': '0.25rem',    // 4px
  '1.5': '0.375rem', // 6px
  '2': '0.5rem',     // 8px
  '2.5': '0.625rem', // 10px
  '3': '0.75rem',    // 12px
  '4': '1rem',       // 16px
  '5': '1.25rem',    // 20px
  '6': '1.5rem',     // 24px
  '8': '2rem',       // 32px
  '10': '2.5rem',    // 40px
  '12': '3rem',      // 48px
  '16': '4rem',      // 64px
  '20': '5rem',      // 80px
  '24': '6rem',      // 96px
} as const;

// ─── Elevation System ──────────────────────────────────────────────────

export const elevation = {
  none: 'none',
  low: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  high: '0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.08)',
  highest: '0 20px 50px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1)',
  glow: {
    sm: '0 0 8px rgba(236, 72, 153, 0.3)',
    md: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
    lg: '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), 0 0 90px rgba(236, 72, 153, 0.2)',
  },
  neon: {
    sm: '0 0 5px rgba(236, 72, 153, 0.6), 0 0 10px rgba(236, 72, 153, 0.3)',
    md: '0 0 5px rgba(236, 72, 153, 0.8), 0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)',
    lg: '0 0 5px rgba(236, 72, 153, 0.8), 0 0 15px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)',
  },
} as const;

// ─── Border System ─────────────────────────────────────────────────────

export const borders = {
  width: {
    thin: '1px',
    medium: '2px',
    thick: '3px',
    manga: '4px',
  },
  radius: {
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
    manga: '1.35rem',
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    manga: 'double',
  },
} as const;

// ─── Motion Tokens ─────────────────────────────────────────────────────

export const motion = {
  duration: {
    instant: '50ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    glacial: '1000ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  reducedMotion: {
    duration: '0.01ms',
    easing: 'linear',
  },
} as const;

// ─── Z-Index Scale ─────────────────────────────────────────────────────

export const zIndex = {
  base: '0',
  dropdown: '10',
  sticky: '20',
  modal: '40',
  popover: '30',
  overlay: '40',
  toast: '50',
  maximum: '9999',
} as const;

// ─── Color Palette & Theme Types ───────────────────────────────────────

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
