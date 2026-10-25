import confetti from 'canvas-confetti';

const PASTEL_COLORS = ['#FFD6E7', '#FFB6D5', '#C94F7C', '#E8DFFF', '#FFD166', '#FFFFFF'];

/**
 * Gentle burst for gift opening
 */
export const fireGentleConfetti = () => {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.65 },
    colors: PASTEL_COLORS,
    disableForReducedMotion: true,
    ticks: 200,
  });
};

/**
 * Joyful celebration burst for cake / wishes
 */
export const fireCelebrationConfetti = () => {
  // Left cannon
  confetti({
    particleCount: 40,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    colors: PASTEL_COLORS,
    disableForReducedMotion: true,
  });
  // Right cannon
  confetti({
    particleCount: 40,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    colors: PASTEL_COLORS,
    disableForReducedMotion: true,
  });
};

/**
 * Grand finale fireworks-like confetti burst
 */
export const fireGrandConfetti = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000, colors: PASTEL_COLORS, disableForReducedMotion: true };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 45 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.15, 0.35), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.65, 0.85), y: Math.random() - 0.2 } }));
  }, 250);
};

export default {
  fireGentleConfetti,
  fireCelebrationConfetti,
  fireGrandConfetti
};
