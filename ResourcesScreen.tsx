import { useState } from 'react';
import { Screen } from '../App';
import { BottomNav } from './BottomNav';
import { Music, BookOpen, MapPin, Users, ExternalLink, Play, Pause, Phone, Clock } from 'lucide-react';

interface ResourcesScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

type Tab = 'sounds' | 'articles' | 'campus' | 'community';

const campusResources = [
  {
    id: 1,
    name: 'Counseling Center',
    location: 'Student Center, 2nd Floor, Room 280',
    phone: '(470) 578-6600',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
  {
    id: 2,
    name: 'Campus Food Pantry',
    location: 'Carmichael Student Center, Room 277',
    phone: '(470) 578-2347',
    hours: 'Mon, Wed, Thu: 10:00 AM - 6:00 PM',
  },
  {
    id: 3,
    name: 'KSU Library',
    location: 'Sturgis Library Building',
    phone: '(470) 578-6050',
    hours: 'Mon-Thu: 7:30 AM - 1:00 AM',
  },
  {
    id: 4,
    name: 'Student Recreation Center',
    location: '590 Cobb Avenue NW',
    phone: '(470) 578-6850',
    hours: 'Mon-Fri: 6:00 AM - 11:00 PM',
  },
  {
    id: 5,
    name: 'Multicultural Center',
    location: 'Carmichael Student Center, Suite 267',
    phone: '(470) 578-2046',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
];

export function ResourcesScreen({ onNavigate, darkMode }: ResourcesScreenProps) {
  const [activeTab, setActiveTab] = useState<Tab>('sounds');
  const [isRainPlaying, setIsRainPlaying] = useState(false);

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4">
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Resources</h2>
        
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mt-4">
          <button
            onClick={() => setActiveTab('sounds')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'sounds'
                ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white shadow-md' : 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-md')
                : (darkMode ? 'bg-slate-800/60 text-gray-400' : 'bg-white/70 text-gray-600')
            }`}
          >
            Sounds
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'articles'
                ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white shadow-md' : 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-md')
                : (darkMode ? 'bg-slate-800/60 text-gray-400' : 'bg-white/70 text-gray-600')
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab('campus')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'campus'
                ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white shadow-md' : 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-md')
                : (darkMode ? 'bg-slate-800/60 text-gray-400' : 'bg-white/70 text-gray-600')
            }`}
          >
            Campus Resources
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'community'
                ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white shadow-md' : 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-md')
                : (darkMode ? 'bg-slate-800/60 text-gray-400' : 'bg-white/70 text-gray-600')
            }`}
          >
            Community
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-4">
        {activeTab === 'sounds' && (
          <>
            {/* Rain Sounds with Play/Pause */}
            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-pink-500/40 to-purple-500/40' : 'bg-gradient-to-br from-pink-200 to-purple-200'} rounded-2xl flex items-center justify-center`}>
                  <Music className={`w-8 h-8 ${darkMode ? 'text-pink-300' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Rain Sounds</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Gentle rainfall for focus</p>
                  <button
                    onClick={() => setIsRainPlaying(!isRainPlaying)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                      isRainPlaying
                        ? (darkMode ? 'bg-purple-600/40 text-purple-300' : 'bg-purple-200 text-purple-600')
                        : (darkMode ? 'bg-indigo-600/40 text-purple-300' : 'bg-purple-100 text-purple-500')
                    } transition-colors`}
                  >
                    {isRainPlaying ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span className="text-sm">Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span className="text-sm">Play</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-blue-500/40' : 'bg-gradient-to-br from-purple-200 to-blue-200'} rounded-2xl flex items-center justify-center`}>
                  <Music className={`w-8 h-8 ${darkMode ? 'text-purple-300' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Ocean Waves</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Calming beach sounds</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-blue-500/40 to-green-500/40' : 'bg-gradient-to-br from-blue-200 to-green-200'} rounded-2xl flex items-center justify-center`}>
                  <Music className={`w-8 h-8 ${darkMode ? 'text-blue-300' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Forest Ambience</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Birds and nature sounds</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-green-500/40 to-yellow-500/40' : 'bg-gradient-to-br from-green-200 to-yellow-200'} rounded-2xl flex items-center justify-center`}>
                  <Music className={`w-8 h-8 ${darkMode ? 'text-green-300' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>White Noise</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Block distractions</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'articles' && (
          <>
            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-start gap-4">
                <BookOpen className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-400'} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Managing Academic Stress</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 mt-2`}>Tips for balancing coursework and mental health during busy semesters.</p>
                  <button className={`${darkMode ? 'text-purple-400' : 'text-purple-500'} text-sm flex items-center gap-1`}>
                    Read more <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-start gap-4">
                <BookOpen className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-400'} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Understanding Your Emotions</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 mt-2`}>Learn about emotional intelligence and self-awareness.</p>
                  <button className={`${darkMode ? 'text-purple-400' : 'text-purple-500'} text-sm flex items-center gap-1`}>
                    Read more <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-start gap-4">
                <BookOpen className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-400'} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Sleep Hygiene for Students</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 mt-2`}>Simple strategies to improve your sleep quality.</p>
                  <button className={`${darkMode ? 'text-purple-400' : 'text-purple-500'} text-sm flex items-center gap-1`}>
                    Read more <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'campus' && (
          <>
            <button
              onClick={() => onNavigate('campus-map')}
              className={`w-full ${darkMode ? 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40' : 'bg-gradient-to-br from-purple-100/60 to-blue-100/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'} hover:border-purple-300 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <MapPin className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
                <div className="flex-1 text-left">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>View Campus Map</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Find counseling center and wellness spaces</p>
                </div>
              </div>
            </button>

            {campusResources.map((resource) => (
              <div key={resource.id} className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
                <h3 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-3`}>{resource.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'} flex-shrink-0 mt-0.5`} />
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{resource.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                    <p className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>{resource.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{resource.hours}</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('campus-map')}
                  className={`mt-4 w-full py-2 px-4 ${darkMode ? 'bg-indigo-600/40 text-purple-300' : 'bg-purple-100 text-purple-600'} rounded-2xl text-center hover:bg-opacity-80 transition-colors`}
                >
                  View on Map
                </button>
              </div>
            ))}

            <div className={`${darkMode ? 'bg-red-900/40' : 'bg-red-50/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
              <h3 className={`${darkMode ? 'text-red-400' : 'text-red-600'} mb-2`}>Emergency Support</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                24/7 crisis support available
              </p>
              <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-500'}`}>🚨 Crisis Line: (470) 578-6600</p>
              <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-500'} mt-1`}>📞 National Lifeline: 988</p>
            </div>
          </>
        )}

        {activeTab === 'community' && (
          <>
            <button
              onClick={() => onNavigate('group-chat')}
              className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-pink-500/40 to-purple-500/40' : 'bg-gradient-to-br from-pink-200 to-purple-200'} rounded-full flex items-center justify-center`}>
                  <Users className={`w-6 h-6 ${darkMode ? 'text-pink-300' : 'text-white'}`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Mental Health Support Group</h3>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>247 members</p>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 text-left`}>Weekly meetings for students to share experiences and support each other.</p>
              <div className={`w-full py-2 ${darkMode ? 'bg-indigo-600/40 text-purple-300' : 'bg-purple-100 text-purple-600'} rounded-2xl text-center`}>
                Join Group
              </div>
            </button>

            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-blue-500/40' : 'bg-gradient-to-br from-purple-200 to-blue-200'} rounded-full flex items-center justify-center`}>
                  <Users className={`w-6 h-6 ${darkMode ? 'text-purple-300' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Meditation & Mindfulness</h3>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>189 members</p>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Learn and practice mindfulness techniques together.</p>
              <button className={`w-full py-2 ${darkMode ? 'bg-indigo-600/40 text-purple-300' : 'bg-purple-100 text-purple-600'} rounded-2xl hover:bg-opacity-80 transition-colors`}>
                Join Group
              </button>
            </div>

            <button
              onClick={() => onNavigate('study-buddies')}
              className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-blue-500/40 to-green-500/40' : 'bg-gradient-to-br from-blue-200 to-green-200'} rounded-full flex items-center justify-center`}>
                  <Users className={`w-6 h-6 ${darkMode ? 'text-blue-300' : 'text-white'}`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Study Buddies</h3>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>412 members</p>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 text-left`}>Find study partners and share academic support by major.</p>
              <div className={`w-full py-2 ${darkMode ? 'bg-indigo-600/40 text-purple-300' : 'bg-purple-100 text-purple-600'} rounded-2xl`}>
                View Groups by Major
              </div>
            </button>
          </>
        )}
      </div>

      <BottomNav currentScreen="resources" onNavigate={onNavigate} darkMode={darkMode} />
    </div>
  );
}