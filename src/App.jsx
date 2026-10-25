import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { birthdayData } from './data/birthdayContent';
import FloatingDecorations from './components/FloatingDecorations';
import ProgressIndicator from './components/ProgressIndicator';
import GiftIntro from './components/GiftIntro';
import BirthdayCelebration from './components/BirthdayCelebration';
import BirthdayLetter from './components/BirthdayLetter';
import FinalSurprise from './components/FinalSurprise';

export function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReplay = () => {
    setCurrentStep(1);
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.98, y: -15, transition: { duration: 0.35, ease: 'easeIn' } },
  };

  return (
    <main className="min-h-screen min-h-[100svh] flex flex-col justify-between relative overflow-x-hidden safe-top">
      {/* Ambient Floating Elements */}
      <FloatingDecorations />

      {/* Top Header & Navigation Bar */}
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={4}
        onBack={handleBack}
      />

      {/* Animated Screen Stages */}
      <div className="flex-1 flex flex-col w-full relative z-10">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col w-full"
            >
              <GiftIntro content={birthdayData.intro} onNext={handleNext} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step-2"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col w-full"
            >
              <BirthdayCelebration content={birthdayData.celebration} onNext={handleNext} />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step-3"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col w-full"
            >
              <BirthdayLetter content={birthdayData.letter} onNext={handleNext} />
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step-4"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col w-full"
            >
              <FinalSurprise content={birthdayData.final} onReplay={handleReplay} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
