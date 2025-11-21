import { useState } from 'react';
import { Screen } from '../App';
import { Shield, AlertCircle } from 'lucide-react';

interface PrivacyDataControlScreenProps {
  onNavigate: (screen: Screen) => void;
  onUpdateData: (data: { aiInsights: boolean; anonymizedAnalysis: boolean }) => void;
  darkMode: boolean;
}

export function PrivacyDataControlScreen({ onNavigate, onUpdateData, darkMode }: PrivacyDataControlScreenProps) {
  const [aiInsights, setAiInsights] = useState(true);
  const [anonymizedAnalysis, setAnonymizedAnalysis] = useState(true);

  const handleFinish = () => {
    onUpdateData({ aiInsights, anonymizedAnalysis });
    onNavigate('class-schedule-setup');
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col p-8 py-16`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-blue-500/40' : 'bg-gradient-to-br from-purple-200 to-blue-200'} rounded-full mb-4 shadow-lg`}>
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Privacy & Data Control</h2>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>You're always in control</p>
      </div>

      {/* Toggles */}
      <div className="flex-1 space-y-4">
        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6`}>
          <button
            onClick={() => setAiInsights(!aiInsights)}
            className="w-full flex items-center justify-between"
          >
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Allow AI to use my logs for insights</span>
            <div
              className={`w-14 h-8 rounded-full transition-all flex-shrink-0 ml-3 ${
                aiInsights ? (darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-300 to-blue-300') : (darkMode ? 'bg-gray-700' : 'bg-gray-300')
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full m-1 transition-transform ${
                  aiInsights ? 'translate-x-6' : ''
                }`}
              />
            </div>
          </button>
        </div>

        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6`}>
          <button
            onClick={() => setAnonymizedAnalysis(!anonymizedAnalysis)}
            className="w-full flex items-center justify-between"
          >
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Allow anonymized analysis</span>
            <div
              className={`w-14 h-8 rounded-full transition-all flex-shrink-0 ml-3 ${
                anonymizedAnalysis ? (darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-300 to-blue-300') : (darkMode ? 'bg-gray-700' : 'bg-gray-300')
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full m-1 transition-transform ${
                  anonymizedAnalysis ? 'translate-x-6' : ''
                }`}
              />
            </div>
          </button>
        </div>

        <div className={`${darkMode ? 'bg-yellow-900/40 border-yellow-700' : 'bg-yellow-50/60 border-yellow-100'} backdrop-blur-sm rounded-3xl p-6 border-2`}>
          <div className="flex items-start gap-3">
            <AlertCircle className={`w-5 h-5 ${darkMode ? 'text-yellow-500' : 'text-yellow-600'} flex-shrink-0 mt-0.5`} />
            <div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                AI suggestions are not diagnostic. Always contact a professional for mental-health concerns.
              </p>
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-indigo-900/40 border-indigo-700' : 'bg-blue-50/60 border-blue-100'} backdrop-blur-sm rounded-3xl p-6 border-2`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            Your data is encrypted and stored securely. You can export or delete your data at any time from your profile settings.
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleFinish}
        className={`w-full py-4 ${darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'} text-white rounded-3xl shadow-lg hover:shadow-xl transition-all`}
      >
        Finish & Open AuraWheel
      </button>
    </div>
  );
}