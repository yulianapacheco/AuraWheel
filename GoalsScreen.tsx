import { useState } from 'react';
import { Screen } from '../App';
import { Target } from 'lucide-react';

interface GoalsScreenProps {
  onNavigate: (screen: Screen) => void;
  onUpdateData: (data: { goals: string[] }) => void;
}

const goalOptions = [
  'Understand mood patterns',
  'Reduce stress',
  'Improve sleep',
  'Balance school and life',
  'Build healthier habits',
  'Feel less alone',
];

export function GoalsScreen({ onNavigate, onUpdateData }: GoalsScreenProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleContinue = () => {
    onUpdateData({ goals: selectedGoals });
    onNavigate('privacy');
  };

  return (
    <div className="h-full bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50 flex flex-col p-8 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full mb-4 shadow-lg">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-purple-600 mb-2">What are your goals?</h2>
        <p className="text-gray-600">Select all that apply</p>
      </div>

      {/* Goals Grid */}
      <div className="flex-1 space-y-3 overflow-y-auto">
        {goalOptions.map((goal) => (
          <button
            key={goal}
            onClick={() => toggleGoal(goal)}
            className={`w-full px-6 py-4 rounded-3xl transition-all ${
              selectedGoals.includes(goal)
                ? 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white shadow-lg'
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90'
            }`}
          >
            {goal}
          </button>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleContinue}
        className="w-full py-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white rounded-3xl shadow-lg hover:shadow-xl transition-all mt-6"
      >
        Continue
      </button>
    </div>
  );
}
