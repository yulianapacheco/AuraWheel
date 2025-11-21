import { useState } from 'react';
import { Screen } from '../App';
import { GraduationCap } from 'lucide-react';

interface SchoolSelectionScreenProps {
  onNavigate: (screen: Screen) => void;
  onUpdateData: (data: { school: string }) => void;
  userName: string;
  darkMode: boolean;
}

const schools = [
  'Kennesaw State University',
  'Georgia State University',
  'University of Georgia',
  'Clayton State University',
];

export function SchoolSelectionScreen({ onNavigate, onUpdateData, userName, darkMode }: SchoolSelectionScreenProps) {
  const [name, setName] = useState(userName);
  const [school, setSchool] = useState('');

  const handleContinue = () => {
    if (school) {
      onUpdateData({ school });
      // Navigate to resident verification if KSU, otherwise skip to mood preferences
      if (school === 'Kennesaw State University') {
        onNavigate('resident-verification');
      } else {
        onNavigate('mood-preferences');
      }
    }
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col p-8 py-16`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-blue-500/40' : 'bg-gradient-to-br from-purple-200 to-blue-200'} rounded-full mb-4 shadow-lg`}>
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Tell us about you</h2>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-6">
        <div>
          <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} px-2`}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white/70 border-purple-100'} backdrop-blur-sm rounded-3xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
          />
        </div>

        <div>
          <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} px-2`}>School</label>
          <select
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white/70 border-purple-100'} backdrop-blur-sm rounded-3xl border-2 focus:border-purple-300 focus:outline-none transition-colors appearance-none`}
          >
            <option value="">Select your school</option>
            {schools.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className={`${darkMode ? 'bg-indigo-900/40 border-indigo-700' : 'bg-blue-50/60 border-blue-100'} backdrop-blur-sm rounded-3xl p-6 border-2`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            We use this to show your school's counseling resources.
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleContinue}
        className={`w-full py-4 ${darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'} text-white rounded-3xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50`}
        disabled={!school}
      >
        Continue
      </button>
    </div>
  );
}