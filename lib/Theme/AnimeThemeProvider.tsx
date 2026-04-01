import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { AnimeTheme, defaultTheme, themes, ThemeName } from './tokens';

type AnimeThemeContextValue = {
  theme: AnimeTheme;
  themeName: string;
  setTheme: (theme: AnimeTheme | ThemeName) => void;
  gradient: (from?: string, to?: string, direction?: string) => string;
};

const AnimeThemeContext = createContext<AnimeThemeContextValue | undefined>(undefined);

type AnimeThemeProviderProps = {
  theme?: AnimeTheme | ThemeName;
  children: React.ReactNode;
};

export const AnimeThemeProvider: React.FC<AnimeThemeProviderProps> = ({
  theme: initialTheme = defaultTheme,
  children,
}) => {
  const resolvedInitial = typeof initialTheme === 'string' ? themes[initialTheme] : initialTheme;
  const [currentTheme, setCurrentTheme] = useState<AnimeTheme>(resolvedInitial);

  const setTheme = useCallback((theme: AnimeTheme | ThemeName) => {
    if (typeof theme === 'string') {
      setCurrentTheme(themes[theme]);
    } else {
      setCurrentTheme(theme);
    }
  }, []);

  const gradient = useCallback(
    (from?: string, to?: string, direction?: string) => {
      const f = from ?? currentTheme.colors.primary.from;
      const t = to ?? currentTheme.colors.primary.to;
      const d = direction ?? currentTheme.colors.primary.direction ?? 'to right';
      return `linear-gradient(${d}, ${f}, ${t})`;
    },
    [currentTheme],
  );

  const value = useMemo(
    () => ({
      theme: currentTheme,
      themeName: currentTheme.name,
      setTheme,
      gradient,
    }),
    [currentTheme, setTheme, gradient],
  );

  const cssVars = useMemo(() => {
    const t = currentTheme;
    return {
      '--anime-primary-from': t.colors.primary.from,
      '--anime-primary-to': t.colors.primary.to,
      '--anime-secondary-from': t.colors.secondary.from,
      '--anime-secondary-to': t.colors.secondary.to,
      '--anime-accent': t.colors.accent,
      '--anime-bg': t.colors.background,
      '--anime-surface': t.colors.surface,
      '--anime-text': t.colors.text,
      '--anime-text-muted': t.colors.textMuted,
      '--anime-border': t.colors.border,
      '--anime-sparkle': t.colors.sparkle,
      '--anime-glow': t.colors.glow,
      '--anime-success': t.colors.success,
      '--anime-error': t.colors.error,
      '--anime-warning': t.colors.warning,
      '--anime-info': t.colors.info,
      '--anime-shadow-sm': t.shadows.sm,
      '--anime-shadow-md': t.shadows.md,
      '--anime-shadow-lg': t.shadows.lg,
      '--anime-shadow-glow': t.shadows.glow,
      '--anime-shadow-neon': t.shadows.neon,
      '--anime-font-heading': t.fonts.heading,
      '--anime-font-body': t.fonts.body,
      '--anime-font-accent': t.fonts.accent,
      '--anime-radius-sm': t.borderRadius.sm,
      '--anime-radius-md': t.borderRadius.md,
      '--anime-radius-lg': t.borderRadius.lg,
      '--anime-radius-xl': t.borderRadius.xl,
    } as React.CSSProperties;
  }, [currentTheme]);

  return (
    <AnimeThemeContext.Provider value={value}>
      <div style={cssVars} className="anime-theme-root">
        {children}
      </div>
    </AnimeThemeContext.Provider>
  );
};

export const useAnimeTheme = (): AnimeThemeContextValue => {
  const context = useContext(AnimeThemeContext);
  if (!context) {
    // Return a default context if not wrapped in provider (for standalone usage)
    return {
      theme: defaultTheme,
      themeName: defaultTheme.name,
      setTheme: () => {
        // no-op when used outside provider
      },
      gradient: (from?: string, to?: string, direction?: string) => {
        const f = from ?? defaultTheme.colors.primary.from;
        const t = to ?? defaultTheme.colors.primary.to;
        const d = direction ?? defaultTheme.colors.primary.direction ?? 'to right';
        return `linear-gradient(${d}, ${f}, ${t})`;
      },
    };
  }
  return context;
};
