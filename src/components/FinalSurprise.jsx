import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, RotateCcw, PartyPopper } from 'lucide-react';
import { fireGrandConfetti } from './ConfettiEffect';

export const FinalSurprise = ({ content, onReplay }) => {
  // Fire grand celebratory confetti on mount
  useEffect(() => {
    fireGrandConfetti();
  }, []);

  const handleCelebrateAgain = () => {
    fireGrandConfetti();
    setTimeout(() => {
      onReplay();
    }, 350);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={18} className="text-gold" />;
      case 'Heart':
        return <Heart size={18} className="text-deeprose fill-deeprose/40" />;
      case 'Compass':
        return <Compass size={18} className="text-lavender" />;
      default:
        return <Sparkles size={18} className="text-gold" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between items-center text-center px-4 py-3 max-w-md mx-auto w-full relative z-10">
      
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-1"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-blush to-lavender border border-softpink/60 text-deeprose shadow-sm">
          <PartyPopper size={13} className="text-deeprose" />
          {content.badge}
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center my-auto w-full py-2">
        
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-1 mb-4"
        >
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-deeprose tracking-tight">
            {content.title}
          </h1>
          <p className="text-warmgrey text-xs sm:text-sm font-medium">
            {content.subtitle}
          </p>
        </motion.div>

        {/* 3 Wishes Cards for the Year Ahead */}
        <div className="grid grid-cols-1 gap-2.5 w-full mb-4">
          {content.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * (idx + 1), duration: 0.5 }}
              className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-softpink/40 shadow-sm text-left hover:shadow-pastel transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blush/60 flex items-center justify-center shrink-0 shadow-inner">
                {getIcon(card.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xs sm:text-sm font-bold text-deeprose font-serif">
                  {card.title}
                </h2>
                <p className="text-[11px] sm:text-xs text-warmgrey/90 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grand Final Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full rounded-2xl bg-gradient-to-r from-[#FFF0F5] via-[#FFFBF7] to-[#F7F2FF] border-2 border-softpink/60 p-4 shadow-pastel relative overflow-hidden mb-4"
        >
          <div className="flex items-center justify-center gap-1.5 text-deeprose mb-1.5">
            <span className="text-lg">🌷</span>
            <span className="text-xs font-bold uppercase tracking-wider text-deeprose/80">Always Remember</span>
            <span className="text-lg">🌸</span>
          </div>

          <p className="font-serif italic text-sm sm:text-base text-deeprose font-medium leading-relaxed">
            "{content.finalQuote}"
          </p>
        </motion.div>

        {/* Action Button: Celebrate Again */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-xs"
        >
          <button
            onClick={handleCelebrateAgain}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-deeprose to-deeprose-light text-white font-semibold text-base shadow-pastel-lg hover:shadow-glow-rose hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 min-h-[50px] relative overflow-hidden"
          >
            <span className="absolute inset-0 shimmer-badge animate-shimmer" />
            <RotateCcw size={18} className="relative z-10" />
            <span className="relative z-10">{content.replayButton}</span>
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="safe-bottom pb-1 text-center">
        <p className="text-[11px] text-warmgrey/70 flex items-center justify-center gap-1">
          <Heart size={10} className="text-deeprose fill-deeprose" />
          {content.footerText}
        </p>
      </footer>
    </div>
  );
};

export default FinalSurprise;
