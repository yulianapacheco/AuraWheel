import { Screen } from '../App';
import { ArrowLeft, Users, Clock, MapPin } from 'lucide-react';

interface StudyBuddiesScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

const studyGroups = [
  {
    id: 1,
    major: 'Information Technology',
    members: 48,
    nextMeeting: 'Wed, 7:00 PM',
    location: 'Library, Room 204',
    gradient: 'from-pink-200 to-pink-300',
    darkGradient: 'from-pink-500/40 to-pink-600/40',
  },
  {
    id: 2,
    major: 'Nursing',
    members: 67,
    nextMeeting: 'Thu, 6:30 PM',
    location: 'Health Sciences Building',
    gradient: 'from-purple-200 to-purple-300',
    darkGradient: 'from-purple-500/40 to-purple-600/40',
  },
  {
    id: 3,
    major: 'Criminal Justice',
    members: 52,
    nextMeeting: 'Tue, 5:00 PM',
    location: 'Student Center, Room 301',
    gradient: 'from-blue-200 to-blue-300',
    darkGradient: 'from-blue-500/40 to-blue-600/40',
  },
  {
    id: 4,
    major: 'Business Administration',
    members: 91,
    nextMeeting: 'Mon, 7:30 PM',
    location: 'Coles College Building',
    gradient: 'from-green-200 to-green-300',
    darkGradient: 'from-green-500/40 to-green-600/40',
  },
  {
    id: 5,
    major: 'Psychology',
    members: 73,
    nextMeeting: 'Fri, 4:00 PM',
    location: 'Social Sciences Building',
    gradient: 'from-yellow-200 to-yellow-300',
    darkGradient: 'from-yellow-500/40 to-yellow-600/40',
  },
  {
    id: 6,
    major: 'Engineering',
    members: 58,
    nextMeeting: 'Wed, 6:00 PM',
    location: 'Engineering Lab',
    gradient: 'from-indigo-200 to-indigo-300',
    darkGradient: 'from-indigo-500/40 to-indigo-600/40',
  },
];

export function StudyBuddiesScreen({ onNavigate, darkMode }: StudyBuddiesScreenProps) {
  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4">
        <button onClick={() => onNavigate('resources')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Study Buddies</h2>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Find your major group</p>
        </div>
      </div>

      {/* Groups List */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-center`}>
            Connect with students in your major for study sessions, project collaboration, and academic support.
          </p>
        </div>

        {studyGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => onNavigate('group-chat')}
            className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden`}
          >
            <div className={`h-24 bg-gradient-to-r ${darkMode ? group.darkGradient : group.gradient} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-white/10" />
              <Users className={`w-12 h-12 ${darkMode ? 'text-white/90' : 'text-white'} relative z-10`} />
            </div>
            <div className="p-5 text-left">
              <h3 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-2`}>
                {group.major}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {group.members} members
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Next meeting: {group.nextMeeting}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {group.location}
                  </span>
                </div>
              </div>
              <div className={`mt-4 py-2 px-4 ${darkMode ? 'bg-indigo-600/40' : 'bg-purple-100'} ${darkMode ? 'text-purple-300' : 'text-purple-600'} rounded-2xl text-center`}>
                Join Group
              </div>
            </div>
          </button>
        ))}

        {/* Add More Groups Placeholder */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center border-2 border-dashed ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
          <Users className={`w-12 h-12 ${darkMode ? 'text-purple-400' : 'text-purple-300'} mx-auto mb-3`} />
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Don't see your major? Request a new group
          </p>
          <button 
            onClick={() => onNavigate('request-group')}
            className={`mt-3 px-6 py-2 ${darkMode ? 'bg-indigo-600/40 text-purple-300' : 'bg-purple-200 text-purple-600'} rounded-full`}
          >
            Request Group
          </button>
        </div>
      </div>
    </div>
  );
}