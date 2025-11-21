import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface EmotionWheelScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

const primaryEmotions = [
  { 
    name: 'Joy', 
    colorLight: 'from-yellow-200 to-yellow-300', 
    colorDark: 'from-yellow-400/60 to-yellow-500/60',
    secondary: ['Happy', 'Excited', 'Proud', 'Content'] 
  },
  { 
    name: 'Love', 
    colorLight: 'from-pink-200 to-pink-300', 
    colorDark: 'from-pink-400/60 to-pink-500/60',
    secondary: ['Affectionate', 'Grateful', 'Peaceful', 'Trusting'] 
  },
  { 
    name: 'Surprise', 
    colorLight: 'from-purple-200 to-purple-300', 
    colorDark: 'from-purple-400/60 to-purple-500/60',
    secondary: ['Amazed', 'Confused', 'Startled', 'Curious'] 
  },
  { 
    name: 'Sadness', 
    colorLight: 'from-blue-200 to-blue-300', 
    colorDark: 'from-blue-400/60 to-blue-500/60',
    secondary: ['Lonely', 'Disappointed', 'Hurt', 'Vulnerable'] 
  },
  { 
    name: 'Fear', 
    colorLight: 'from-indigo-200 to-indigo-300', 
    colorDark: 'from-indigo-400/60 to-indigo-500/60',
    secondary: ['Anxious', 'Worried', 'Insecure', 'Scared'] 
  },
  { 
    name: 'Anger', 
    colorLight: 'from-red-200 to-red-300', 
    colorDark: 'from-red-400/60 to-red-500/60',
    secondary: ['Frustrated', 'Annoyed', 'Bitter', 'Mad'] 
  },
];

export function EmotionWheelScreen({ onNavigate, darkMode }: EmotionWheelScreenProps) {
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null);
  const [selectedSecondary, setSelectedSecondary] = useState<string | null>(null);
  const [reflection, setReflection] = useState('');

  const handleConfirm = () => {
    // Log the mood
    onNavigate('home');
  };

  const selectedEmotion = primaryEmotions.find(e => e.name === selectedPrimary);

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Emotion Wheel</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {!selectedPrimary ? (
          <>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Tap an emotion to explore further</p>
            
            {/* Circular Emotion Wheel */}
            <div className="relative w-full aspect-square max-w-[320px] mx-auto mb-6 mt-6">
              <div className="absolute inset-0">
                {primaryEmotions.map((emotion, index) => {
                  const angle = (index * 360) / primaryEmotions.length - 90;
                  const radius = 44;
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <button
                      key={emotion.name}
                      onClick={() => setSelectedPrimary(emotion.name)}
                      className={`absolute rounded-full transition-transform hover:scale-110 active:scale-105`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                      }}
                    >
                      <div className={`bg-gradient-to-br ${darkMode ? emotion.colorDark : emotion.colorLight} rounded-full w-20 h-20 flex items-center justify-center shadow-lg ${darkMode ? 'ring-2 ring-slate-700/50 shadow-purple-500/20' : ''}`}>
                        <span className={`text-center px-2 text-sm ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                          {emotion.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
                
                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full ${darkMode ? 'bg-slate-800/80 border-indigo-700' : 'bg-white/80 border-purple-100'} backdrop-blur-sm flex items-center justify-center shadow-lg border-4`}>
                    <span className={`text-center text-xs px-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      How do you feel?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setSelectedPrimary(null);
                setSelectedSecondary(null);
              }}
              className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-4 flex items-center gap-2`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to emotions
            </button>

            <div className={`bg-gradient-to-br ${darkMode ? selectedEmotion?.colorDark : selectedEmotion?.colorLight} rounded-3xl p-6 shadow-lg mb-6 ${darkMode ? 'ring-2 ring-slate-700/50' : ''}`}>
              <h3 className={darkMode ? 'text-white' : 'text-gray-800'}>You're feeling {selectedPrimary}</h3>
              <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Choose a more specific emotion:</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {selectedEmotion?.secondary.map((emotion) => (
                <button
                  key={emotion}
                  onClick={() => setSelectedSecondary(emotion)}
                  className={`p-4 rounded-2xl transition-all ${
                    selectedSecondary === emotion
                      ? (darkMode ? 'bg-gradient-to-br from-indigo-500/80 via-purple-500/80 to-blue-500/80 text-white shadow-lg shadow-purple-500/30' : 'bg-gradient-to-br from-purple-300 to-blue-300 text-white shadow-lg')
                      : (darkMode ? 'bg-slate-800/70 text-gray-300 hover:bg-slate-700/70' : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90')
                  }`}
                >
                  {emotion}
                </button>
              ))}
            </div>

            {selectedSecondary && (
              <>
                <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-4`}>
                  <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                    Would you like to add a reflection? (optional)
                  </label>
                  <textarea
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    placeholder="What's on your mind?"
                    className={`w-full px-4 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800 placeholder:text-gray-500' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors min-h-[100px] resize-none`}
                  />
                </div>

                <button
                  onClick={handleConfirm}
                  className={`w-full py-4 ${darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'} text-white rounded-3xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                >
                  <CheckCircle className="w-5 h-5" />
                  Confirm Mood
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}