import React from 'react';
import { ArrowLeft } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

export const ProgressIndicator = ({ currentStep, totalSteps = 4, onBack }) => {
  return (
    <header className="w-full max-w-md mx-auto px-4 pt-3 pb-2 flex items-center justify-between z-20 relative">
      {/* Back button or spacer */}
      <div className="w-20 flex items-center">
        {currentStep > 1 ? (
          <button
            onClick={onBack}
            type="button"
            className="inline-flex items-center gap-1 text-xs font-semibold text-deeprose/80 hover:text-deeprose bg-white/60 hover:bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-softpink/30 shadow-sm transition-all active:scale-95 min-h-[36px]"
            aria-label="Go back to previous screen"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>
        ) : (
          <span className="text-[11px] font-semibold tracking-wider uppercase text-deeprose/70 bg-blush/60 px-2 py-0.5 rounded-full">
            Gift 🎁
          </span>
        )}
      </div>

      {/* Progress Pills / Indicator */}
      <div className="flex flex-col items-center">
        <span className="text-[11px] font-medium text-warmgrey/75 tracking-tight mb-1">
          Surprise {currentStep} of {totalSteps}
        </span>
        <div className="flex items-center gap-1.5" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps} aria-label={`Step ${currentStep} of ${totalSteps}`}>
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNum = index + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <div
                key={stepNum}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? 'w-6 bg-deeprose shadow-sm'
                    : isCompleted
                    ? 'w-2 bg-softpink'
                    : 'w-2 bg-blush/80'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Music Toggle */}
      <div className="w-20 flex justify-end">
        <MusicPlayer />
      </div>
    </header>
  );
};

export default ProgressIndicator;
