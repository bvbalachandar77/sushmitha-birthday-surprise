import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Mail, ArrowRight } from 'lucide-react';
import { fireGentleConfetti } from './ConfettiEffect';

export const BirthdayLetter = ({ content, onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);
    fireGentleConfetti();
  };

  return (
    <div className="flex-1 flex flex-col justify-between items-center text-center px-3 sm:px-4 py-3 max-w-md mx-auto w-full relative z-10">
      
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-1"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white/80 border border-softpink/50 text-deeprose shadow-sm">
          <Sparkles size={13} className="text-gold" />
          {content.badge}
        </span>
      </motion.div>

      {/* Main Area: Envelope or Unfolded Letter */}
      <div className="flex-1 flex flex-col items-center justify-center w-full my-auto py-2">
        
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-1 mb-3 text-center"
        >
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-deeprose tracking-tight">
            {content.title}
          </h1>
          <p className="text-warmgrey text-xs sm:text-sm">
            {content.subtitle}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED ENVELOPE STAGE */
            <motion.div
              key="closed-envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center my-auto py-4 cursor-pointer group"
              onClick={handleOpenEnvelope}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpenEnvelope(); }}
              aria-label="Tap to open your birthday letter envelope"
            >
              {/* Envelope Graphic */}
              <div className="relative w-64 h-44 sm:w-72 sm:h-48 rounded-2xl bg-gradient-to-br from-[#FFE4F0] via-[#FFD3E8] to-[#FFBFDA] shadow-pastel-lg border border-softpink/60 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-102 group-active:scale-98">
                
                {/* Envelope Flap Creases (Pastel geometric folds) */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Bottom triangle fold */}
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#FFC5DE]/60 clip-path-triangle-up border-t border-white/40" />
                  {/* Left fold */}
                  <div className="absolute top-0 bottom-0 left-0 w-28 bg-[#FFD3E8]/40 clip-path-left" />
                  {/* Right fold */}
                  <div className="absolute top-0 bottom-0 right-0 w-28 bg-[#FFD3E8]/40 clip-path-right" />
                  {/* Top triangular flap */}
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FFAFD3] to-[#FFC5DE] shadow-md clip-path-triangle-down border-b border-deeprose/20" />
                </div>

                {/* Golden Heart Wax Seal */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-gold via-amber-300 to-amber-500 shadow-lg flex items-center justify-center border-2 border-white/60 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Heart size={24} className="text-deeprose fill-deeprose drop-shadow" />
                </div>

                {/* Letter Peek top */}
                <div className="absolute top-3 w-52 h-4 bg-white/70 rounded-t-md shadow-inner" />
              </div>

              {/* Tap Prompt */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-5 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-softpink/40 text-deeprose font-semibold text-xs shadow-sm"
              >
                <Mail size={14} className="text-deeprose" />
                <span>{content.envelopeHint}</span>
              </motion.div>
            </motion.div>
          ) : (
            /* OPENED UNFOLDED LETTER STAGE */
            <motion.div
              key="opened-letter"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full flex flex-col items-center"
            >
              {/* Stationery Card Container with Max Height and Mobile Scrollability */}
              <div className="w-full max-w-sm rounded-2xl paper-texture border border-[#E8DACB] shadow-letter p-5 sm:p-6 text-left relative overflow-hidden max-h-[62vh] overflow-y-auto overscroll-contain">
                
                {/* Decorative Floral Header Corner Accent */}
                <div className="absolute top-2 right-2 opacity-30 pointer-events-none">
                  <span className="text-2xl">🌸</span>
                </div>

                {/* Salutation */}
                <div className="font-serif font-bold text-xl sm:text-2xl text-deeprose mb-3">
                  {content.salutation}
                </div>

                {/* Letter Body Paragraphs */}
                <div className="space-y-3.5 text-warmgrey text-sm sm:text-base leading-relaxed font-sans">
                  {content.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "font-serif text-deeprose font-semibold text-base" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Closing and Signature */}
                <div className="mt-5 pt-3 border-t border-softpink/30 space-y-1">
                  <p className="text-xs sm:text-sm text-warmgrey italic">
                    {content.closing}
                  </p>
                  <p className="font-handwriting text-2xl sm:text-3xl text-deeprose font-bold">
                    {content.signature}
                  </p>
                </div>
              </div>

              {/* Bottom Next Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 w-full max-w-xs"
              >
                <button
                  onClick={onNext}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-deeprose to-deeprose-light text-white font-semibold text-base shadow-pastel-lg hover:shadow-glow-rose hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 min-h-[50px] relative overflow-hidden"
                >
                  <span className="absolute inset-0 shimmer-badge animate-shimmer" />
                  <span className="relative z-10 flex items-center gap-2">
                    {content.continueButton}
                    <ArrowRight size={18} />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="safe-bottom pb-1 text-center">
        <p className="text-[11px] text-warmgrey/60 flex items-center justify-center gap-1">
          <Heart size={10} className="text-deeprose fill-deeprose" />
          A keepsake of genuine friendship
        </p>
      </footer>
    </div>
  );
};

export default BirthdayLetter;
