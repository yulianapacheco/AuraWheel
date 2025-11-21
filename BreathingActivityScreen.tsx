import { useState, useEffect } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Play, Pause } from 'lucide-react';

interface BreathingActivityScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

export function BreathingActivityScreen({ onNavigate, darkMode }: BreathingActivityScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [count, setCount] = useState(4);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;
        
        // Move to next phase
        setPhase((currentPhase) => {
          if (currentPhase === 'inhale') return 'hold';
          if (currentPhase === 'hold') return 'exhale';
          if (currentPhase === 'exhale') return 'rest';
          return 'inhale';
        });
        
        return 4;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, phase]);

  const getCircleSize = () => {
    if (phase === 'inhale') return 'scale-150';
    if (phase === 'exhale') return 'scale-75';
    return 'scale-125';
  };

  const getPhaseText = () => {
    if (phase === 'inhale') return 'Breathe In';
    if (phase === 'hold') return 'Hold';
    if (phase === 'exhale') return 'Breathe Out';
    return 'Rest';
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4">
        <button onClick={() => onNavigate('unwind')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Breathing Rhythm</h2>
      </div>

      {/* Breathing Circle */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-6 w-full`}>
          <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center">
            {/* Animated breathing circle */}
            <div
              className={`absolute inset-0 rounded-full ${
                darkMode 
                  ? 'bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-blue-500/40'
                  : 'bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200'
              } transition-all duration-[4000ms] ease-in-out ${isPlaying ? getCircleSize() : 'scale-100'} shadow-2xl`}
            />
            
            {/* Inner circle with text */}
            <div className="relative z-10 flex flex-col items-center">
              <div className={`text-6xl mb-4 ${darkMode ? 'text-purple-200' : 'text-purple-600'}`}>
                {count}
              </div>
              <div className={`text-xl ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                {isPlaying ? getPhaseText() : 'Ready'}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-6 w-full`}>
          <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            Follow the expanding and contracting circle. Breathe in as it grows, hold at the peak, breathe out as it shrinks, and rest before the next cycle.
          </p>
        </div>

        {/* Control Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-full max-w-[280px] py-4 ${
            darkMode
              ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80'
              : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'
          } text-white rounded-3xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Start Breathing
            </>
          )}
        </button>
      </div>
    </div>
  );
}
