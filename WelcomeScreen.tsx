import { Screen } from '../App';
import { Heart, Shield, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50 flex flex-col items-center justify-between p-8 py-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-full shadow-lg">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-purple-600">Welcome to AuraWheel</h2>
      </div>

      {/* Content */}
      <div className="space-y-8 flex-1 flex flex-col justify-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              This app helps you understand your mood patterns and gently supports your mental wellness.
            </p>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              AI quietly analyzes patterns to offer personalized insights and suggestions.
            </p>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-green-200 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Your data stays private and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => onNavigate('school-selection')}
        className="w-full py-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white rounded-3xl shadow-lg hover:shadow-xl transition-all"
      >
        Get Started
      </button>
    </div>
  );
}
