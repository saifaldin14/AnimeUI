import React, { useState } from "react";
import { Sparkles } from "../../shared/AnimeDecorations";

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

  const gradientBg = {
    background: `linear-gradient(135deg, ${fromColor}dd, ${toColor}dd)`,
  };

  const glowShadow = {
    boxShadow: `0 4px 20px ${fromColor}40, 0 2px 10px ${toColor}30`,
  };

  const brandGradient = {
    backgroundImage: `linear-gradient(to right, ${textColor}, ${textColor})`,
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent",
  };

  const activeGradient = {
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
  };

  return (
    <nav
      aria-label="Main navigation"
      className={[
        fixed ? "fixed top-0 left-0 right-0 z-50" : "relative",
        "backdrop-blur-md anime-fade-in",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ...gradientBg, ...glowShadow, ...style }}
    >
      <div className="relative overflow-hidden">
        <Sparkles color={fromColor} count={2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex-shrink-0">
              {typeof brand === "string" ? (
                <span
                  className="text-xl font-bold tracking-wide anime-text-glow"
                  style={{ ...brandGradient, color: textColor }}
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
                    "relative px-4 py-2 text-sm font-medium rounded-lg",
                    "transition-all duration-300",
                    "hover:bg-white/10",
                    "group",
                  ].join(" ")}
                  style={{ color: textColor }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Glow underline */}
                  <span
                    className={[
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full",
                      "transition-all duration-300",
                      item.active
                        ? "w-4/5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-70",
                    ].join(" ")}
                    style={activeGradient}
                    aria-hidden="true"
                  />
                  {item.active && (
                    <span
                      className="absolute inset-0 rounded-lg opacity-10"
                      style={{ background: fromColor }}
                      aria-hidden="true"
                    />
                  )}
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
                className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: textColor }}
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
                    "block px-4 py-2 text-sm font-medium rounded-lg",
                    "transition-colors duration-200",
                    item.active ? "bg-white/10" : "hover:bg-white/5",
                  ].join(" ")}
                  style={{ color: textColor }}
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
