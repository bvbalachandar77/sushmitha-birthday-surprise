import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { fireGentleConfetti } from './ConfettiEffect';

export const GiftIntro = ({ content, onNext }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGift = () => {
    if (isOpening) return;
    setIsOpening(true);
    fireGentleConfetti();

    // Allow user to see the lid pop and glow burst before switching screen
    setTimeout(() => {
      onNext();
    }, 850);
  };

  return (
    <div className="flex-1 flex flex-col justify-between items-center text-center px-4 py-3 max-w-md mx-auto w-full relative z-10">
      {/* Top greeting badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-2"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/80 border border-softpink/50 text-deeprose shadow-sm">
          <Sparkles size={13} className="text-gold" />
          {content.tagline}
        </span>
      </motion.div>

      {/* Main Center Area: Gift Box & Headings */}
      <div className="flex flex-col items-center justify-center my-auto w-full py-4">
        {/* Soft Glowing Halo behind Gift */}
        <div className="relative mb-6">
          <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-softpink/40 via-lavender/50 to-blush/60 rounded-full blur-2xl animate-pulse -z-10" />

          {/* Interactive Gift Box */}
          <motion.button
            onClick={handleOpenGift}
            disabled={isOpening}
            className="group relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-softpink/40 rounded-3xl p-3 transition-transform active:scale-95 touch-manipulation"
            aria-label="Open your birthday surprise gift"
            animate={
              isOpening
                ? { scale: [1, 1.08, 0.98] }
                : { y: [0, -8, 0] }
            }
            transition={
              isOpening
                ? { duration: 0.8, ease: 'easeInOut' }
                : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            {/* Sparkle burst when opened */}
            {isOpening && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none -top-10 z-30"
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-gold/80 via-blush to-white blur-md animate-ping" />
              </motion.div>
            )}

            {/* Gift Box Container */}
            <div className="relative w-44 h-44 flex flex-col items-center justify-end select-none">
              
              {/* Ribbon Bow on top */}
              <motion.div
                className="absolute top-1 z-20 flex justify-center items-center"
                animate={isOpening ? { y: -45, rotate: -18, opacity: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* Left bow loop */}
                <div className="w-8 h-8 rounded-full border-4 border-deeprose bg-softpink/60 transform -rotate-45 shadow-sm" />
                {/* Center knot */}
                <div className="w-4 h-4 rounded-full bg-deeprose shadow-md z-10 -mx-2" />
                {/* Right bow loop */}
                <div className="w-8 h-8 rounded-full border-4 border-deeprose bg-softpink/60 transform rotate-45 shadow-sm" />
              </motion.div>

              {/* Gift Box Lid */}
              <motion.div
                className="relative z-10 w-44 h-10 rounded-xl bg-gradient-to-r from-[#FFB3D1] via-[#FFC6DE] to-[#FFA8CB] shadow-md border-b-2 border-deeprose/30 flex items-center justify-center"
                animate={isOpening ? { y: -35, rotate: -12, opacity: 0.9 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Vertical Ribbon on Lid */}
                <div className="w-7 h-full bg-deeprose shadow-inner" />
              </motion.div>

              {/* Gift Box Body */}
              <div className="relative w-40 h-28 rounded-b-2xl bg-gradient-to-b from-[#FFAED1] via-[#FF9ECA] to-[#F282B3] shadow-pastel-lg flex items-center justify-center overflow-hidden border-t-2 border-white/20">
                {/* Vertical Ribbon */}
                <div className="w-7 h-full bg-deeprose shadow-inner" />
                {/* Horizontal Ribbon */}
                <div className="absolute w-full h-7 bg-deeprose/90 shadow-inner" />
                
                {/* Subtle highlight sheen */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
              </div>

              {/* Box Shadow on ground */}
              <div className="w-36 h-4 bg-warmgrey/15 rounded-full blur-sm mt-1" />
            </div>
          </motion.button>
        </div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2 mt-1"
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-deeprose tracking-tight drop-shadow-sm">
            {content.greeting}
          </h1>
          <p className="text-warmgrey text-base sm:text-lg max-w-xs mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 w-full max-w-xs"
        >
          <button
            onClick={handleOpenGift}
            disabled={isOpening}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-deeprose to-deeprose-light text-white font-semibold text-base shadow-pastel-lg hover:shadow-glow-rose hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 touch-manipulation min-h-[50px] relative overflow-hidden"
          >
            {/* Shimmer light effect across button */}
            <span className="absolute inset-0 shimmer-badge animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              {isOpening ? "Opening your gift..." : content.buttonText}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="safe-bottom pb-2 text-center"
      >
        <p className="text-xs text-warmgrey/70 flex items-center justify-center gap-1">
          <Heart size={12} className="text-deeprose fill-deeprose" />
          {content.footerText}
        </p>
      </motion.footer>
    </div>
  );
};

export default GiftIntro;
