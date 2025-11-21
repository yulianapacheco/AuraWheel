import { Screen } from '../App';
import { BottomNav } from './BottomNav';
import { TrendingUp, Calendar, Brain, AlertTriangle, Heart, Users, Sparkles } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface InsightsScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
  classSchedule?: Array<{
    id: string;
    name: string;
    days: string[];
    startTime: string;
    endTime: string;
  }>;
}

const moodData = [
  { day: 'Mon', mood: 4 },
  { day: 'Tue', mood: 2 },
  { day: 'Wed', mood: 4 },
  { day: 'Thu', mood: 3 },
  { day: 'Fri', mood: 5 },
  { day: 'Sat', mood: 5 },
  { day: 'Sun', mood: 4 },
];

export function InsightsScreen({ onNavigate, darkMode, classSchedule }: InsightsScreenProps) {
  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
          <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Insights</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-4">
        {/* Weekly Summary */}
        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
            <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>This Week</h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <div className={`text-2xl mb-1 ${darkMode ? 'bg-gradient-to-r from-pink-300 to-purple-300' : 'bg-gradient-to-r from-pink-400 to-purple-400'} bg-clip-text text-transparent`}>
                7
              </div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Check-ins</p>
            </div>
            
            <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50/70'} rounded-2xl p-4`}>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Most Common Emotion This Week</p>
              <p className={`${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Joyful</p>
            </div>
            
            <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-blue-50/70'} rounded-2xl p-4`}>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Most Common Emotion Last Week</p>
              <p className={`${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Anxious</p>
            </div>
          </div>
        </div>

        {/* Mood Trend Graph */}
        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
          <h3 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-4`}>Mood Trend</h3>
          <div className="h-56 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#4c1d95' : '#e0d4f7'} />
                <XAxis 
                  dataKey="day" 
                  stroke={darkMode ? '#a78bfa' : '#9333ea'} 
                  style={{ fontSize: '12px' }} 
                />
                <YAxis 
                  domain={[1, 5]}
                  ticks={[1, 2, 3, 4, 5]}
                  tickFormatter={(value) => {
                    const labels = ['😞', '😕', '😐', '🙂', '😄'];
                    return labels[value - 1] || '';
                  }}
                  stroke={darkMode ? '#a78bfa' : '#9333ea'} 
                  style={{ fontSize: '16px' }} 
                />
                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="url(#colorGradient)"
                  strokeWidth={3}
                  dot={{ 
                    fill: darkMode ? '#c084fc' : '#a855f7', 
                    r: 5,
                    strokeWidth: 2,
                    stroke: darkMode ? '#1e293b' : '#ffffff'
                  }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f9a8d4" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend */}
          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50/70'} rounded-2xl p-3`}>
            <div className="grid grid-cols-5 gap-1 text-center text-xs">
              <div>
                <div className="text-base mb-1">😞</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Very Negative</p>
              </div>
              <div>
                <div className="text-base mb-1">😕</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Negative</p>
              </div>
              <div>
                <div className="text-base mb-1">😐</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Neutral</p>
              </div>
              <div>
                <div className="text-base mb-1">🙂</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Positive</p>
              </div>
              <div>
                <div className="text-base mb-1">😄</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Very Positive</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Academic Stress Detector - NEW! */}
        <div className={`${darkMode ? 'bg-gradient-to-br from-red-900/40 via-orange-900/40 to-yellow-900/40' : 'bg-gradient-to-br from-red-100/60 via-orange-100/60 to-yellow-100/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className={`w-6 h-6 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
            <div>
              <h3 className={darkMode ? 'text-red-300' : 'text-red-600'}>AI Academic Stress Detector</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-0.5`}>Pattern analysis from class schedule</p>
            </div>
          </div>
          
          {classSchedule && classSchedule.length > 0 ? (
            <>
              <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} rounded-2xl p-4 mb-3`}>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-2`}>
                  <Sparkles className="w-4 h-4 inline mr-1 text-yellow-500" />
                  <strong>Key insight:</strong> Your emotional dips often happen before your {classSchedule[0].name}.
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  This pattern appears in 78% of your weekly logs, suggesting anticipatory stress related to this specific class.
                </p>
              </div>

              <div className="space-y-2">
                {classSchedule.slice(0, 3).map((classItem, index) => {
                  const stressLevel = index === 0 ? 'High stress' : index === 1 ? 'Moderate' : 'Low stress';
                  const stressColor = index === 0 
                    ? (darkMode ? 'text-red-400' : 'text-red-600')
                    : index === 1 
                    ? (darkMode ? 'text-yellow-400' : 'text-yellow-600')
                    : (darkMode ? 'text-green-400' : 'text-green-600');
                  
                  const daysShort = classItem.days.map(day => {
                    const dayMap: { [key: string]: string } = {
                      'Monday': 'Mon',
                      'Tuesday': 'Tue',
                      'Wednesday': 'Wed',
                      'Thursday': 'Thu',
                      'Friday': 'Fri'
                    };
                    return dayMap[day] || day;
                  }).join(', ');

                  return (
                    <div key={classItem.id} className={`${darkMode ? 'bg-slate-800/40' : 'bg-white/50'} rounded-2xl p-3`}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {classItem.name}
                          </span>
                          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-0.5`}>
                            {daysShort} • {classItem.startTime}
                          </p>
                        </div>
                        <span className={`text-sm ${stressColor} ml-2`}>{stressLevel}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} rounded-2xl p-4`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3`}>
                <Sparkles className="w-4 h-4 inline mr-1 text-yellow-500" />
                <strong>Get started:</strong> Add your class schedule to unlock AI-powered academic stress detection.
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                We'll analyze patterns between your classes and mood logs to help you identify stress triggers and plan better study schedules.
              </p>
            </div>
          )}
        </div>

        {/* AI Social Wellness Engine - NEW! */}
        <div className={`${darkMode ? 'bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40' : 'bg-gradient-to-br from-indigo-100/60 via-purple-100/60 to-pink-100/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-indigo-200'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Heart className={`w-6 h-6 ${darkMode ? 'text-pink-400' : 'text-pink-500'}`} />
            <div>
              <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>AI Social Wellness Engine</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-0.5`}>Detecting isolation patterns</p>
            </div>
          </div>
          
          <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} rounded-2xl p-4 mb-4`}>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3`}>
              <Sparkles className="w-4 h-4 inline mr-1 text-yellow-500" />
              We noticed you haven't logged social-related emotions in 4 days. Here are some gentle suggestions:
            </p>

            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('resources')}
                className={`w-full text-left ${darkMode ? 'bg-gradient-to-r from-purple-800/40 to-pink-800/40' : 'bg-gradient-to-r from-purple-50 to-pink-50'} rounded-2xl p-4 hover:opacity-80 transition-opacity`}
              >
                <div className="flex items-center gap-3">
                  <Users className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
                  <div className="flex-1">
                    <h4 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm`}>Join a Campus Event</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-0.5`}>Weekly game night at Student Center • Fridays 7pm</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => onNavigate('study-buddies')}
                className={`w-full text-left ${darkMode ? 'bg-gradient-to-r from-blue-800/40 to-purple-800/40' : 'bg-gradient-to-r from-blue-50 to-purple-50'} rounded-2xl p-4 hover:opacity-80 transition-opacity`}
              >
                <div className="flex items-center gap-3">
                  <Users className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div className="flex-1">
                    <h4 className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} text-sm`}>Find a Study Buddy</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-0.5`}>Match with someone in your major for low-pressure connection</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => onNavigate('unwind')}
                className={`w-full text-left ${darkMode ? 'bg-gradient-to-r from-green-800/40 to-blue-800/40' : 'bg-gradient-to-r from-green-50 to-blue-50'} rounded-2xl p-4 hover:opacity-80 transition-opacity`}
              >
                <div className="flex items-center gap-3">
                  <Heart className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                  <div className="flex-1">
                    <h4 className={`${darkMode ? 'text-green-300' : 'text-green-600'} text-sm`}>Low-Energy Activity</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-0.5`}>Try a mindful solo activity • No pressure to socialize</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/40' : 'bg-white/50'} rounded-2xl p-3`}>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              💡 Remember: Social wellness looks different for everyone. These are gentle nudges, not requirements.
            </p>
          </div>
        </div>
      </div>

      <BottomNav currentScreen="insights" onNavigate={onNavigate} darkMode={darkMode} />
    </div>
  );
}