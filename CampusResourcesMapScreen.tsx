import { Screen } from '../App';
import { ArrowLeft, MapPin, Heart, Utensils, BookOpen, Dumbbell, Users, Phone, Clock } from 'lucide-react';

interface CampusResourcesMapScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

const locations = [
  {
    id: 1,
    name: 'Counseling Center',
    icon: Heart,
    color: 'from-pink-300 to-pink-400',
    darkColor: 'from-pink-500/60 to-pink-600/60',
    x: 40,
    y: 35,
    location: 'Student Center, 2nd Floor, Room 280',
    phone: '(470) 578-6600',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
  {
    id: 2,
    name: 'Food Pantry',
    icon: Utensils,
    color: 'from-purple-300 to-purple-400',
    darkColor: 'from-purple-500/60 to-purple-600/60',
    x: 60,
    y: 45,
    location: 'Carmichael Student Center, Room 277',
    phone: '(470) 578-2347',
    hours: 'Mon, Wed, Thu: 10:00 AM - 6:00 PM',
  },
  {
    id: 3,
    name: 'KSU Library',
    icon: BookOpen,
    color: 'from-blue-300 to-blue-400',
    darkColor: 'from-blue-500/60 to-blue-600/60',
    x: 50,
    y: 60,
    location: 'Sturgis Library Building',
    phone: '(470) 578-6050',
    hours: 'Mon-Thu: 7:30 AM - 1:00 AM',
  },
  {
    id: 4,
    name: 'Recreation Center',
    icon: Dumbbell,
    color: 'from-green-300 to-green-400',
    darkColor: 'from-green-500/60 to-green-600/60',
    x: 70,
    y: 65,
    location: '590 Cobb Avenue NW',
    phone: '(470) 578-6850',
    hours: 'Mon-Fri: 6:00 AM - 11:00 PM',
  },
  {
    id: 5,
    name: 'Multicultural Center',
    icon: Users,
    color: 'from-yellow-300 to-yellow-400',
    darkColor: 'from-yellow-500/60 to-yellow-600/60',
    x: 30,
    y: 55,
    location: 'Carmichael Student Center, Suite 267',
    phone: '(470) 578-2046',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
];

export function CampusResourcesMapScreen({ onNavigate, darkMode }: CampusResourcesMapScreenProps) {
  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4">
        <button onClick={() => onNavigate('resources')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>KSU Campus Resources</h2>
      </div>

      {/* Map */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-4`}>
          {/* Simple campus map visualization */}
          <div className={`relative w-full aspect-square ${darkMode ? 'bg-gradient-to-br from-slate-800 to-indigo-900' : 'bg-gradient-to-br from-green-50 to-blue-50'} rounded-2xl overflow-hidden border-2 ${darkMode ? 'border-indigo-800' : 'border-purple-100'}`}>
            {/* Campus paths */}
            <div className="absolute inset-0">
              <div className={`absolute top-1/2 left-0 right-0 h-2 ${darkMode ? 'bg-slate-600' : 'bg-gray-300'} transform -translate-y-1/2`} />
              <div className={`absolute left-1/2 top-0 bottom-0 w-2 ${darkMode ? 'bg-slate-600' : 'bg-gray-300'} transform -translate-x-1/2`} />
            </div>

            {/* Building blocks */}
            <div className={`absolute top-[15%] left-[15%] w-[20%] h-[15%] ${darkMode ? 'bg-indigo-700/40' : 'bg-blue-200'} rounded-lg`} />
            <div className={`absolute top-[15%] right-[15%] w-[25%] h-[20%] ${darkMode ? 'bg-purple-700/40' : 'bg-purple-200'} rounded-lg`} />
            <div className={`absolute bottom-[15%] left-[15%] w-[30%] h-[25%] ${darkMode ? 'bg-green-700/40' : 'bg-green-200'} rounded-lg`} />
            <div className={`absolute bottom-[15%] right-[15%] w-[20%] h-[20%] ${darkMode ? 'bg-pink-700/40' : 'bg-pink-200'} rounded-lg`} />

            {/* Location pins */}
            {locations.map((location) => {
              const Icon = location.icon;
              return (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${darkMode ? location.darkColor : location.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform animate-pulse`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`absolute top-12 left-1/2 transform -translate-x-1/2 ${darkMode ? 'bg-slate-800' : 'bg-white'} px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs z-10 ${darkMode ? 'text-gray-300' : ''}`}>
                    {location.name}
                  </div>
                </div>
              );
            })}

            {/* Campus label */}
            <div className={`absolute top-4 left-4 ${darkMode ? 'bg-slate-800/80' : 'bg-white/80'} backdrop-blur-sm px-3 py-1 rounded-full text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Kennesaw State University
            </div>
          </div>
        </div>

        {/* Location List */}
        <div className="space-y-3">
          <h3 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} px-2 mb-3`}>Available Resources</h3>
          
          {locations.map((location) => {
            const Icon = location.icon;
            return (
              <div
                key={location.id}
                className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-5 shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${darkMode ? location.darkColor : location.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>{location.name}</h4>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'} flex-shrink-0 mt-0.5`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{location.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                    <span className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{location.hours}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Contact */}
        <div className={`mt-6 ${darkMode ? 'bg-red-900/40' : 'bg-red-50/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
          <h3 className={`${darkMode ? 'text-red-400' : 'text-red-600'} mb-2`}>Emergency Support</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
            If you're in crisis or need immediate help, please contact:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-red-600">🚨</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>KSU Crisis Line: (470) 578-6600</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-red-600">📞</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>National Crisis Lifeline: 988</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-red-600">🏥</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Campus Police: (470) 578-6666</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
