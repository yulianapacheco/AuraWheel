import { Screen } from '../App';
import { BottomNav } from './BottomNav';
import { User, Smile, Meh, Frown, Heart, Sparkles } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  userName: string;
  darkMode: boolean;
}

export function HomeScreen({ onNavigate, userName, darkMode }: HomeScreenProps) {
  const wellnessAreas = [
    { name: 'Mood', value: 75, color: darkMode ? 'from-pink-400/60 to-pink-500/60' : 'from-pink-300 to-pink-400' },
    { name: 'Sleep', value: 60, color: darkMode ? 'from-purple-400/60 to-purple-500/60' : 'from-purple-300 to-purple-400' },
    { name: 'Social', value: 80, color: darkMode ? 'from-blue-400/60 to-blue-500/60' : 'from-blue-300 to-blue-400' },
    { name: 'Energy', value: 55, color: darkMode ? 'from-green-400/60 to-green-500/60' : 'from-green-300 to-green-400' },
    { name: 'Focus', value: 70, color: darkMode ? 'from-yellow-400/60 to-yellow-500/60' : 'from-yellow-300 to-yellow-400' },
    { name: 'Stress', value: 45, color: darkMode ? 'from-orange-400/60 to-orange-500/60' : 'from-orange-300 to-orange-400' },
    { name: 'Balance', value: 65, color: darkMode ? 'from-red-400/60 to-red-500/60' : 'from-red-300 to-red-400' },
  ];

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Hi, {userName}</h2>
              <User className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
            </button>
          </div>
          <button className={darkMode ? 'text-purple-400' : 'text-gray-600'}>
            <Sparkles className="w-6 h-6" />
          </button>
        </div>

        {/* Daily Check-in Card */}
        <div className={`${darkMode ? 'bg-gradient-to-br from-indigo-800/40 via-purple-800/40 to-pink-800/40' : 'bg-gradient-to-br from-pink-200/60 via-purple-200/60 to-blue-200/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-4`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className={darkMode ? 'text-purple-300' : 'text-purple-700'}>Daily Check-in</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>How are you feeling today?</p>
            </div>
            <Heart className={`w-8 h-8 ${darkMode ? 'text-pink-400' : 'text-pink-400'}`} />
          </div>
          <button
            onClick={() => onNavigate('emotion-wheel')}
            className={`w-full py-3 ${darkMode ? 'bg-slate-700/60 text-purple-300' : 'bg-white/80 text-purple-600'} rounded-2xl hover:opacity-90 transition-all`}
          >
            Open Emotion Wheel
          </button>
        </div>
      </div>

      {/* Wellness Wheel */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Your Wellness Wheel</h3>
        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg mt-4`}>
          <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-6">
            {/* Simple radial visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-full h-full rounded-full border-8 ${darkMode ? 'border-indigo-900/50' : 'border-purple-100'}`}>
                {wellnessAreas.map((area, index) => {
                  const angle = (index * 360) / wellnessAreas.length;
                  const radius = 45;
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <div
                      key={area.name}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg ${darkMode ? 'ring-2 ring-slate-700/50' : ''}`}>
                        <span className="text-white text-xs">{area.value}%</span>
                      </div>
                      <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center mt-1 whitespace-nowrap`}>
                        {area.name}
                      </p>
                    </div>
                  );
                })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-full ${darkMode ? 'bg-gradient-to-br from-indigo-600/60 via-purple-600/60 to-pink-600/60' : 'bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200'} flex items-center justify-center shadow-lg`}>
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('ai-chat')}
            className={`w-full py-3 ${darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-purple-300 to-blue-300'} text-white rounded-2xl shadow-md hover:shadow-lg transition-all`}
          >
            Chat with AI Assistant
          </button>
        </div>
      </div>

      <BottomNav currentScreen="home" onNavigate={onNavigate} darkMode={darkMode} />
    </div>
  );
}