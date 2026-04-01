import React, { useState } from "react";
import { Sparkles } from "../../shared/AnimeDecorations";
import { getAnimePaperVars, getAnimeVars } from "../../shared";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

type NavbarProps = {
  brand?: React.ReactNode;
  items?: NavItem[];
  actions?: React.ReactNode;
  fixed?: boolean;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Navbar: React.FC<NavbarProps> = ({
  brand,
  items = [],
  actions,
  fixed = false,
  fromColor = "#ec4899",
  toColor = "#a855f7",
  textColor = "#ffffff",
  className = "",
  style,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelVars = getAnimeVars({
    fromColor,
    toColor,
    textColor,
    radius: "1.6rem",
  });
  const paperVars = getAnimePaperVars({
    fromColor,
    toColor,
    textColor: "#241335",
    radius: "999px",
    shadowOffset: "3px",
  });

  return (
    <nav
      aria-label="Main navigation"
      className={[
        fixed ? "fixed top-0 left-0 right-0 z-50" : "relative",
        "anime-manga-panel backdrop-blur-md anime-fade-in",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ...panelVars, ...style }}
    >
      <div className="relative overflow-hidden">
        <Sparkles color={fromColor} count={2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex-shrink-0">
              {typeof brand === "string" ? (
                <span
                  className="anime-manga-chip inline-flex px-4 py-2 text-base font-bold uppercase tracking-[0.18em] text-white"
                  style={panelVars}
                >
                  {brand}
                </span>
              ) : (
                brand
              )}
            </div>

            {/* Desktop nav items */}
            <div className="hidden md:flex items-center gap-1">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={[
                    "relative px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em]",
                    "transition-all duration-300",
                    item.active
                      ? "anime-manga-chip text-white"
                      : "anime-manga-paper text-[#241335]",
                  ].join(" ")}
                  style={item.active ? panelVars : paperVars}
                >
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Right actions + mobile toggle */}
            <div className="flex items-center gap-3">
              {actions && (
                <div className="hidden md:flex items-center">{actions}</div>
              )}

              {/* Mobile menu button */}
              <button
                type="button"
                className="anime-manga-paper md:hidden p-2 transition-colors"
                style={paperVars}
                aria-expanded={mobileOpen}
                aria-controls="navbar-mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="navbar-mobile-menu"
            className="md:hidden border-t border-white/10 anime-slide-up"
          >
            <div className="px-4 py-3 space-y-1">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={[
                    item.active ? "anime-manga-chip text-white" : "anime-manga-paper text-[#241335]",
                    "block px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em]",
                  ].join(" ")}
                  style={item.active ? panelVars : paperVars}
                >
                  {item.label}
                </a>
              ))}
              {actions && <div className="pt-2 border-t border-white/10">{actions}</div>}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
