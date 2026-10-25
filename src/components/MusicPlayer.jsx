import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * Web Audio API gentle Music Box Synthesizer
 * Plays a sweet, soft music box melody of "Happy Birthday"
 * 100% self-contained, no external mp3 files, zero network failure risk.
 */
export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const melodyTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Frequencies for "Happy Birthday" melody (Key of C)
  // C4, D4, E4, F4, G4, A4, B4, C5
  const NOTES = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.00,
    A4: 440.00,
    B4: 493.88,
    C5: 523.25,
    D5: 587.33,
    REST: 0
  };

  // Note pattern: [note, duration in beats]
  const MELODY = [
    ['G4', 0.75], ['G4', 0.25], ['A4', 1.0], ['G4', 1.0], ['C5', 1.0], ['B4', 2.0],
    ['G4', 0.75], ['G4', 0.25], ['A4', 1.0], ['G4', 1.0], ['D5', 1.0], ['C5', 2.0],
    ['G4', 0.75], ['G4', 0.25], ['G4', 1.0], ['E4', 1.0], ['C5', 1.0], ['B4', 1.0], ['A4', 2.0],
    ['F4', 0.75], ['F4', 0.25], ['E4', 1.0], ['C5', 1.0], ['D5', 1.0], ['C5', 2.5]
  ];

  const playTone = (freq, durationMs) => {
    if (!audioCtxRef.current || freq === 0) return;

    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Music box tone using sine + soft overtone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Bell / music box envelope: instant attack, exponential decay
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + durationMs / 1000);
    } catch {
      // Audio context edge cases handled gracefully
    }
  };

  const playMelodySequence = (index = 0) => {
    if (!isPlayingRef.current) return;

    const tempoMs = 500; // Base beat length in ms
    const currentNote = MELODY[index % MELODY.length];
    const [noteName, beats] = currentNote;
    const noteFreq = NOTES[noteName] || 0;
    const durationMs = beats * tempoMs;

    playTone(noteFreq, durationMs * 0.9);

    melodyTimeoutRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        playMelodySequence((index + 1) % MELODY.length);
      }
    }, durationMs);
  };

  const toggleMusic = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (melodyTimeoutRef.current) {
        clearTimeout(melodyTimeoutRef.current);
      }
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      playMelodySequence(0);
    }
  };

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (melodyTimeoutRef.current) clearTimeout(melodyTimeoutRef.current);
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md bg-white/70 border border-softpink/40 text-deeprose shadow-sm hover:bg-white/90 active:scale-95 transition-all touch-manipulation min-h-[36px]"
      aria-label={isPlaying ? "Mute birthday music box" : "Play birthday music box chime"}
      title={isPlaying ? "Mute music box" : "Play sweet music box chime"}
    >
      {isPlaying ? (
        <>
          <Volume2 size={15} className="animate-pulse text-deeprose" />
          <span className="flex items-center gap-1">
            <span className="hidden xs:inline">Music:</span> ON
            <Music size={12} className="animate-bounce text-deeprose inline" />
          </span>
        </>
      ) : (
        <>
          <VolumeX size={15} className="text-warmgrey/70" />
          <span className="text-warmgrey/80">
            <span className="hidden xs:inline">Music:</span> OFF
          </span>
        </>
      )}
    </button>
  );
};

export default MusicPlayer;
