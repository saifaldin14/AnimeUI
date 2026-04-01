/**
 * Shared Anime Decorative Elements
 *
 * Reusable floating stars, sparkles, and hearts that give components
 * their characteristic anime look. Extracts the duplicated decoration
 * patterns from individual components.
 */
import React from 'react';

type DecorationColor = string;

type FloatingStarsProps = {
  color?: DecorationColor;
  count?: number;
};

export const FloatingStars: React.FC<FloatingStarsProps> = ({
  color = '#ffffff',
  count = 3,
}) => {
  const positions = [
    { top: '10%', left: '15%', size: 'w-2 h-2', delay: '' },
    { top: '20%', right: '12%', size: 'w-3 h-3', delay: 'anime-delay-200' },
    { bottom: '25%', left: '20%', size: 'w-2.5 h-2.5', delay: 'anime-delay-400' },
    { top: '50%', right: '8%', size: 'w-2 h-2', delay: 'anime-delay-300' },
    { bottom: '15%', left: '10%', size: 'w-1.5 h-1.5', delay: 'anime-delay-500' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {positions.slice(0, count).map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos.size} anime-twinkle ${pos.delay}`}
          style={{
            background: `radial-gradient(circle, ${color} 0 42%, transparent 44%)`,
            clipPath: 'polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)',
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.55))',
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
          }}
        />
      ))}
    </div>
  );
};

type SparklesProps = {
  color?: DecorationColor;
  count?: number;
};

export const Sparkles: React.FC<SparklesProps> = ({
  color = '#fbbf24',
  count = 2,
}) => {
  const positions = [
    { bottom: '12%', left: '8%', size: 'w-4 h-4', delay: '' },
    { bottom: '20%', right: '10%', size: 'w-3 h-3', delay: 'anime-delay-300' },
    { top: '15%', right: '15%', size: 'w-2.5 h-2.5', delay: 'anime-delay-500' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {positions.slice(0, count).map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos.size} anime-sparkle ${pos.delay}`}
          style={{
            background: `linear-gradient(135deg, ${color}, #fff7cc)`,
            clipPath: 'polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)',
            boxShadow: `0 0 12px ${color}88`,
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
          }}
        />
      ))}
    </div>
  );
};

type FloatingHeartsProps = {
  color?: DecorationColor;
  count?: number;
};

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({
  color = '#f9a8d4',
  count = 2,
}) => {
  const positions = [
    { top: '33%', left: '5%', size: 5, delay: '' },
    { bottom: '25%', right: '6%', size: 4, delay: 'anime-delay-500' },
    { top: '20%', right: '10%', size: 3, delay: 'anime-delay-300' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {positions.slice(0, count).map((pos, i) => (
        <div
          key={i}
          className={`absolute transform rotate-45 anime-float-rotate ${pos.delay}`}
          style={{
            width: `${pos.size * 4}px`,
            height: `${pos.size * 4}px`,
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${color}, #ffffff)`,
              boxShadow: `0 0 10px ${color}55`,
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${color}, #ffffff)`,
              transform: 'translateX(-100%)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

type AnimeDecorationsProps = {
  stars?: boolean;
  sparkles?: boolean;
  hearts?: boolean;
  starColor?: string;
  sparkleColor?: string;
  heartColor?: string;
  starCount?: number;
  sparkleCount?: number;
  heartCount?: number;
};

/**
 * Combined anime decorations component.
 * Renders a mix of floating stars, sparkles, and hearts.
 */
export const AnimeDecorations: React.FC<AnimeDecorationsProps> = ({
  stars = true,
  sparkles = true,
  hearts = true,
  starColor,
  sparkleColor,
  heartColor,
  starCount = 3,
  sparkleCount = 2,
  heartCount = 2,
}) => {
  return (
    <>
      {stars && <FloatingStars color={starColor} count={starCount} />}
      {sparkles && <Sparkles color={sparkleColor} count={sparkleCount} />}
      {hearts && <FloatingHearts color={heartColor} count={heartCount} />}
    </>
  );
};
