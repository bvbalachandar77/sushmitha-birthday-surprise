import React, { useMemo } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

export const FloatingDecorations = () => {
  // Pre-generate a modest set of decorative floating elements for mobile efficiency
  const floatingItems = useMemo(() => [
    { id: 1, type: 'heart', top: '12%', left: '8%', size: 18, delay: '0s', duration: '5s', color: 'text-softpink' },
    { id: 2, type: 'sparkle', top: '18%', right: '10%', size: 16, delay: '1s', duration: '4s', color: 'text-gold' },
    { id: 3, type: 'star', top: '35%', left: '6%', size: 14, delay: '2s', duration: '6s', color: 'text-lavender' },
    { id: 4, type: 'flower', top: '48%', right: '8%', size: 20, delay: '0.5s', duration: '5.5s', color: 'text-blush' },
    { id: 5, type: 'heart', top: '75%', left: '12%', size: 16, delay: '1.5s', duration: '4.5s', color: 'text-softpink' },
    { id: 6, type: 'sparkle', top: '82%', right: '14%', size: 18, delay: '2.5s', duration: '5s', color: 'text-gold' },
    { id: 7, type: 'flower', top: '90%', left: '25%', size: 18, delay: '3s', duration: '6s', color: 'text-lavender' },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {floatingItems.map((item) => (
        <div
          key={item.id}
          className={`absolute opacity-75 animate-float-slow ${item.color}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.type === 'heart' && (
            <Heart size={item.size} fill="currentColor" className="opacity-80 drop-shadow-sm" />
          )}
          {item.type === 'sparkle' && (
            <Sparkles size={item.size} className="animate-sparkle-pulse text-gold" />
          )}
          {item.type === 'star' && (
            <Star size={item.size} fill="currentColor" className="opacity-70" />
          )}
          {item.type === 'flower' && (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.5 4 14 6 12 8C10 6 10.5 4 12 2ZM18 6C18.5 8 17.5 10 15.5 10C15 8 16 6.5 18 6ZM22 12C20 13.5 18 14 16 12C18 10 20 10.5 22 12ZM18 18C16 18.5 14 17.5 14 15.5C16 15 17.5 16 18 18ZM12 22C10.5 20 10 18 12 16C14 18 13.5 20 12 22ZM6 18C5.5 16 6.5 14 8.5 14C9 16 8 17.5 6 18ZM2 12C4 10.5 6 10 8 12C6 14 4 13.5 2 12ZM6 6C8 5.5 10 6.5 10 8.5C8 9 6.5 8 6 6Z" opacity="0.85"/>
              <circle cx="12" cy="12" r="3" fill="#FFD166" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingDecorations;
