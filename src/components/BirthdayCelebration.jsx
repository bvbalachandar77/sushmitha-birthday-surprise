import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { fireCelebrationConfetti } from './ConfettiEffect';

export const BirthdayCelebration = ({ content, onNext }) => {
  const [wished, setWished] = useState(false);
  const [candlesGlowing, setCandlesGlowing] = useState(false);

  // Trigger celebration confetti on mount
  useEffect(() => {
    fireCelebrationConfetti();
  }, []);

  const handleMakeWish = () => {
    if (wished) return;
    setCandlesGlowing(true);
    fireCelebrationConfetti();

    // Trigger wish reveal
    setTimeout(() => {
      setCandlesGlowing(false);
      setWished(true);
    }, 600);
  };

  return (
    <div className="flex-1 flex flex-col justify-between items-center text-center px-4 py-3 max-w-md mx-auto w-full relative z-10">
      
      {/* Top VIP Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-1"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-blush to-lavender border border-softpink/60 text-deeprose shadow-sm">
          <Sparkles size={13} className="text-gold" />
          {content.badge}
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center my-auto w-full py-2">
        
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-1 mb-3"
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-deeprose tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-warmgrey text-sm sm:text-base font-medium">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Illustrated Birthday Cake with Balloons */}
        <div className="relative my-3 w-full flex items-center justify-center select-none">
          
          {/* Left Balloon */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-4, 2, -4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-2 sm:left-6 top-0 flex flex-col items-center pointer-events-none"
          >
            <div className="w-10 h-13 rounded-full bg-gradient-to-tr from-[#FF9EC9] to-[#FFD6E7] shadow-md flex items-center justify-center relative">
              <div className="absolute top-2 left-2 w-2.5 h-4 bg-white/40 rounded-full" />
            </div>
            <div className="w-0.5 h-10 bg-warmgrey/30" />
          </motion.div>

          {/* Right Balloon */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [4, -2, 4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute right-2 sm:right-6 top-2 flex flex-col items-center pointer-events-none"
          >
            <div className="w-11 h-14 rounded-full bg-gradient-to-tr from-[#C9B9FF] to-[#E8DFFF] shadow-md flex items-center justify-center relative">
              <div className="absolute top-2 left-2 w-3 h-4 bg-white/40 rounded-full" />
            </div>
            <div className="w-0.5 h-12 bg-warmgrey/30" />
          </motion.div>

          {/* Cake Platform & Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative flex flex-col items-center cursor-pointer group"
            onClick={handleMakeWish}
            aria-label="Birthday cake with glowing candles"
          >
            {/* Candle glow halo */}
            <div className={`absolute top-0 w-36 h-20 rounded-full transition-all duration-500 blur-xl ${
              candlesGlowing ? 'bg-gold/80 scale-125' : 'bg-gold/30'
            }`} />

            {/* Candles Container */}
            <div className="flex items-end justify-center gap-4 mb-1 z-10">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Candle Flame */}
                  <div
                    className={`w-3.5 h-6 rounded-full bg-gradient-to-t from-gold via-amber-300 to-white shadow-glow animate-flame-flicker transition-transform duration-300 ${
                      candlesGlowing ? 'scale-150 ring-4 ring-gold/40' : ''
                    }`}
                  />
                  {/* Candle Wick */}
                  <div className="w-0.5 h-1.5 bg-warmgrey" />
                  {/* Candle Stick (Pastel striped) */}
                  <div className={`w-3 h-9 rounded-t-sm shadow-sm ${
                    idx === 1
                      ? 'h-11 bg-gradient-to-b from-softpink to-deeprose'
                      : 'bg-gradient-to-b from-lavender to-softpink'
                  }`} />
                </div>
              ))}
            </div>

            {/* Cake Top Tier */}
            <div className="relative w-36 h-12 rounded-t-2xl bg-gradient-to-b from-[#FFF5EC] to-[#FFE2EC] border-b-2 border-softpink/40 shadow-sm flex items-center justify-center overflow-hidden">
              {/* Dripping frosting scallops */}
              <div className="absolute -top-1 w-full flex justify-around">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-6 h-4 bg-white rounded-b-full shadow-inner" />
                ))}
              </div>
              {/* Sugar pearl decorations */}
              <div className="flex gap-3 text-[10px] text-deeprose/70 z-10 mt-2 font-bold">
                ✦ ✦ ✦
              </div>
            </div>

            {/* Cake Bottom Tier */}
            <div className="relative w-52 h-16 rounded-t-2xl bg-gradient-to-b from-[#FFE8F2] via-[#FFD0E5] to-[#FFBFDA] shadow-pastel flex flex-col items-center justify-center overflow-hidden border-t-2 border-white/40">
              {/* Middle cream frosting line */}
              <div className="w-full h-2 bg-white/70 shadow-inner" />
              
              {/* Cute pastel decorative dots */}
              <div className="flex items-center gap-3 mt-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
                <span className="w-2 h-2 rounded-full bg-lavender shadow-sm" />
                <span className="w-2.5 h-2.5 rounded-full bg-deeprose/50 shadow-sm" />
                <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
                <span className="w-2.5 h-2.5 rounded-full bg-lavender shadow-sm" />
              </div>
            </div>

            {/* Cake Stand / Plate */}
            <div className="w-60 h-4 bg-gradient-to-r from-white via-[#FFF0F5] to-white rounded-full shadow-md border-b-2 border-warmgrey/10" />
            <div className="w-24 h-2 bg-white/80 rounded-b-md shadow-sm" />
          </motion.div>
        </div>

        {/* Dynamic Action Area: Wish Button or Wish Message */}
        <div className="w-full mt-3 min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!wished ? (
              <motion.div
                key="wish-button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-xs flex flex-col items-center gap-2"
              >
                <p className="text-xs text-warmgrey/75 font-medium">
                  {content.cakePrompt}
                </p>
                <button
                  onClick={handleMakeWish}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-deeprose to-deeprose-light text-white font-semibold text-base shadow-pastel-lg hover:shadow-glow-rose hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 min-h-[50px] relative overflow-hidden"
                >
                  <span className="absolute inset-0 shimmer-badge animate-shimmer" />
                  <Sparkles size={18} className="text-gold animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="relative z-10">{content.wishButton}</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="wish-revealed"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="w-full max-w-sm bg-white/90 backdrop-blur-md border border-softpink/60 rounded-2xl p-4 shadow-pastel text-center"
              >
                <div className="flex items-center justify-center gap-1.5 text-deeprose font-serif font-bold text-base mb-1.5">
                  <Sparkles size={16} className="text-gold" />
                  <span>{content.wishRevealedTitle}</span>
                  <Sparkles size={16} className="text-gold" />
                </div>
                <p className="text-xs sm:text-sm text-warmgrey leading-relaxed mb-3">
                  {content.wishRevealedText}
                </p>

                {/* Continue to Letter Button */}
                <button
                  onClick={onNext}
                  className="w-full py-3 px-5 rounded-xl bg-deeprose text-white font-semibold text-sm shadow-md hover:bg-deeprose-dark active:scale-98 transition-all flex items-center justify-center gap-2 min-h-[46px]"
                >
                  <span>{content.continueButton}</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Gentle Footer */}
      <footer className="safe-bottom pb-1 text-center">
        <p className="text-[11px] text-warmgrey/60 flex items-center justify-center gap-1">
          <Heart size={10} className="text-deeprose fill-deeprose" />
          A celebration of your happiness & kindness
        </p>
      </footer>
    </div>
  );
};

export default BirthdayCelebration;
