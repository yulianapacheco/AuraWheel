import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Users } from 'lucide-react';

interface RequestGroupScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

export function RequestGroupScreen({ onNavigate, darkMode }: RequestGroupScreenProps) {
  const [majorOrTopic, setMajorOrTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (majorOrTopic.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        onNavigate('study-buddies');
      }, 2000);
    }
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4">
        <button onClick={() => onNavigate('study-buddies')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Request a Group</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {!submitted ? (
          <div className="space-y-6">
            {/* Info Card */}
            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center`}>
              <Users className={`w-16 h-16 ${darkMode ? 'text-purple-400' : 'text-purple-400'} mx-auto mb-4`} />
              <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Create a New Study Group</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 leading-relaxed`}>
                Don't see a group for your major or topic? Let us know and we'll help connect you with other students.
              </p>
            </div>

            {/* Form */}
            <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
              <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                What major or topic would you like to request a group for?
              </label>
              <input
                type="text"
                value={majorOrTopic}
                onChange={(e) => setMajorOrTopic(e.target.value)}
                placeholder="e.g., Computer Science, Biology, Art History..."
                className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-3xl border-2 focus:border-purple-300 focus:outline-none transition-colors mb-4`}
              />
              <button
                onClick={handleSubmit}
                disabled={!majorOrTopic.trim()}
                className={`w-full py-4 ${
                  majorOrTopic.trim()
                    ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300')
                    : (darkMode ? 'bg-slate-700' : 'bg-gray-300')
                } text-white rounded-3xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Submit Request
              </button>
            </div>

            {/* Examples */}
            <div className={`${darkMode ? 'bg-indigo-900/40' : 'bg-purple-100/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
              <h4 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-3`}>Popular Requests</h4>
              <div className="space-y-2">
                {['Computer Science', 'Biology', 'Marketing', 'Chemistry', 'Political Science'].map((example) => (
                  <button
                    key={example}
                    onClick={() => setMajorOrTopic(example)}
                    className={`block w-full text-left px-4 py-2 ${darkMode ? 'bg-slate-800/60 text-gray-300' : 'bg-white/60 text-gray-700'} rounded-2xl hover:bg-opacity-80 transition-colors`}
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 flex flex-col items-center justify-center h-full">
            <div className={`${darkMode ? 'bg-gradient-to-br from-green-900/40 to-blue-900/40' : 'bg-gradient-to-br from-green-100/60 to-blue-100/60'} backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 ${darkMode ? 'border-green-700' : 'border-green-200'} text-center animate-pulse`}>
              <div className={`w-20 h-20 ${darkMode ? 'bg-gradient-to-br from-green-500/60 to-green-600/60' : 'bg-gradient-to-br from-green-300 to-green-400'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className={darkMode ? 'text-green-300' : 'text-green-700'}>Request Submitted!</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-3 leading-relaxed`}>
                We'll notify you when a {majorOrTopic} group is created. Thank you for helping build our community!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
