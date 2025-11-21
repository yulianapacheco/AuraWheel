import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Hand } from 'lucide-react';

interface MindfulTapsScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

export function MindfulTapsScreen({ onNavigate, darkMode }: MindfulTapsScreenProps) {
  const [taps, setTaps] = useState(0);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTaps(prev => prev + 1);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  const resetTaps = () => {
    setTaps(0);
    setRipples([]);
  };

  const getMessage = () => {
    if (taps < 10) return 'Tap anywhere to begin your mindful journey';
    if (taps < 25) return 'You\'re finding your rhythm...';
    if (taps < 50) return 'Feel the calm washing over you';
    if (taps < 100) return 'You\'re doing beautifully';
    return 'You\'ve reached a state of mindful focus ✨';
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4">
        <button onClick={() => onNavigate('unwind')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Mindful Taps</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        {/* Instructions */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-center`}>
            Tap the canvas below at your own pace. Watch the ripples form and fade. Let each tap be an intentional, mindful action.
          </p>
        </div>

        {/* Tap Counter */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center`}>
          <div className={`text-5xl mb-3 ${darkMode ? 'bg-gradient-to-r from-pink-300 to-purple-300' : 'bg-gradient-to-r from-pink-400 to-purple-400'} bg-clip-text text-transparent`}>
            {taps}
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mindful taps</p>
        </div>

        {/* Interactive Tap Canvas */}
        <div
          onClick={handleTap}
          className={`relative w-full aspect-square ${darkMode ? 'bg-gradient-to-br from-slate-800 to-indigo-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'} rounded-3xl shadow-lg overflow-hidden cursor-pointer`}
        >
          {/* Ripples */}
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="absolute w-16 h-16 rounded-full pointer-events-none"
              style={{
                left: `${ripple.x}%`,
                top: `${ripple.y}%`,
                transform: 'translate(-50%, -50%)',
                background: darkMode
                  ? 'radial-gradient(circle, rgba(167, 139, 250, 0.6) 0%, rgba(139, 92, 246, 0) 70%)'
                  : 'radial-gradient(circle, rgba(216, 180, 254, 0.8) 0%, rgba(233, 213, 255, 0) 70%)',
                animation: 'ripple 1s ease-out forwards',
              }}
            />
          ))}

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Hand className={`w-16 h-16 ${darkMode ? 'text-purple-500/30' : 'text-purple-300/40'}`} />
          </div>
        </div>

        {/* Progress Message */}
        <div className={`${darkMode ? 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40' : 'bg-gradient-to-br from-purple-100/60 to-blue-100/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
          <p className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} leading-relaxed`}>
            {getMessage()}
          </p>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetTaps}
          className={`w-full py-3 ${darkMode ? 'bg-slate-800/60 text-gray-400' : 'bg-white/60 text-gray-600'} backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all`}
        >
          Reset
        </button>

        {/* Info */}
        <div className={`${darkMode ? 'bg-indigo-900/40' : 'bg-purple-100/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm`}>
            Mindful tapping is a grounding exercise that brings your attention to the present moment. Each tap is a gentle reminder to breathe and be here now.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
