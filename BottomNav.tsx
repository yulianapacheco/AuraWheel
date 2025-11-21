import { Home, TrendingUp, CircleDot, BookOpen, Wind } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

export function BottomNav({ currentScreen, onNavigate, darkMode }: BottomNavProps) {
  const navItems = [
    { id: 'home' as Screen, label: 'Home', icon: Home },
    { id: 'insights' as Screen, label: 'Insights', icon: TrendingUp },
    { id: 'emotion-wheel' as Screen, label: 'Wheel', icon: CircleDot },
    { id: 'resources' as Screen, label: 'Resources', icon: BookOpen },
    { id: 'unwind' as Screen, label: 'Unwind', icon: Wind },
  ];

  return (
    <div className={`absolute bottom-0 left-0 right-0 ${darkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-md border-t ${darkMode ? 'border-indigo-900' : 'border-purple-100'} px-4 py-3 rounded-t-3xl`}>
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 min-w-0"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? (darkMode ? 'text-purple-400' : 'text-purple-500') : (darkMode ? 'text-gray-500' : 'text-gray-400')
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? (darkMode ? 'text-purple-400' : 'text-purple-500') : (darkMode ? 'text-gray-500' : 'text-gray-400')
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}