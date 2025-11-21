import { Screen } from '../App';
import { BottomNav } from './BottomNav';
import { Wind, Palette, Sprout, Focus } from 'lucide-react';

interface UnwindScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

const activities = [
  {
    id: 1,
    title: 'Breathing Rhythm Activity',
    description: 'Guided breathing exercises to calm your mind',
    icon: Wind,
    gradient: 'from-pink-200 via-pink-300 to-pink-400',
    darkGradient: 'from-pink-500/40 via-pink-600/40 to-pink-700/40',
    screen: 'breathing-activity' as Screen,
  },
  {
    id: 2,
    title: 'Focus Sort',
    description: 'Gentle sorting game to ease anxiety',
    icon: Focus,
    gradient: 'from-purple-200 via-purple-300 to-purple-400',
    darkGradient: 'from-purple-500/40 via-purple-600/40 to-purple-700/40',
    screen: 'focus-sort' as Screen,
  },
  {
    id: 3,
    title: 'Mindful Taps',
    description: 'Calming tapping game for grounding',
    icon: Palette,
    gradient: 'from-blue-200 via-blue-300 to-blue-400',
    darkGradient: 'from-blue-500/40 via-blue-600/40 to-blue-700/40',
    screen: 'mindful-taps' as Screen,
  },
  {
    id: 4,
    title: 'Soothing Colors',
    description: 'Interactive color therapy for relaxation',
    icon: Palette,
    gradient: 'from-green-200 via-green-300 to-green-400',
    darkGradient: 'from-green-500/40 via-green-600/40 to-green-700/40',
    screen: 'soothing-colors' as Screen,
  },
];

export function UnwindScreen({ onNavigate, darkMode }: UnwindScreenProps) {
  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4">
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Unwind</h2>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Take a moment for yourself</p>
      </div>

      {/* Activities */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <button
              key={activity.id}
              onClick={() => onNavigate(activity.screen)}
              className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden group`}
            >
              <div className={`h-40 bg-gradient-to-br ${darkMode ? activity.darkGradient : activity.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                <Icon className={`w-20 h-20 ${darkMode ? 'text-white/80' : 'text-white/90'} group-hover:scale-110 transition-transform relative z-10`} />
              </div>
              <div className="p-6 text-left">
                <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>{activity.title}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mt-2`}>{activity.description}</p>
              </div>
            </button>
          );
        })}

        {/* Info Card */}
        <div className={`${darkMode ? 'bg-indigo-900/40' : 'bg-gradient-to-br from-purple-100/60 to-blue-100/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            These activities are designed to help you decompress and center yourself. 
            Take as much time as you need. There's no pressure—just gentle support.
          </p>
        </div>
      </div>

      <BottomNav currentScreen="unwind" onNavigate={onNavigate} darkMode={darkMode} />
    </div>
  );
}