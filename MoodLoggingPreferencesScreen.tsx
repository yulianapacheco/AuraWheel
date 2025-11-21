import { useState } from 'react';
import { Screen } from '../App';
import { Clock, Bell } from 'lucide-react';

interface MoodLoggingPreferencesScreenProps {
  onNavigate: (screen: Screen) => void;
  onUpdateData: (data: { loggingFrequency: string; reminderTime: string; gentleReminders: boolean }) => void;
  darkMode: boolean;
}

const frequencies = ['Once a day', 'Twice a day', 'Only on tough days'];
const reminderTimes = [
  { value: '07:00', label: '7:00 AM' },
  { value: '08:00', label: '8:00 AM' },
  { value: '09:00', label: '9:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '21:00', label: '9:00 PM' },
  { value: '22:00', label: '10:00 PM' },
];

export function MoodLoggingPreferencesScreen({ onNavigate, onUpdateData, darkMode }: MoodLoggingPreferencesScreenProps) {
  const [selectedFrequency, setSelectedFrequency] = useState('Once a day');
  const [reminderTime, setReminderTime] = useState('20:00');
  const [secondReminderTime, setSecondReminderTime] = useState('12:00');
  const [gentleReminders, setGentleReminders] = useState(true);

  const handleContinue = () => {
    onUpdateData({ loggingFrequency: selectedFrequency, reminderTime, gentleReminders });
    onNavigate('goals');
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col p-8 py-16`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-blue-500/40' : 'bg-gradient-to-br from-purple-200 to-blue-200'} rounded-full mb-4 shadow-lg`}>
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Mood logging</h2>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>How often would you like to check in?</p>
      </div>

      {/* Options */}
      <div className="flex-1 space-y-6 overflow-y-auto">
        <div className="space-y-3">
          {frequencies.map((freq) => (
            <button
              key={freq}
              onClick={() => setSelectedFrequency(freq)}
              className={`w-full px-6 py-4 rounded-3xl transition-all ${
                selectedFrequency === freq
                  ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80 text-white shadow-lg' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white shadow-lg')
                  : (darkMode ? 'bg-slate-800/70 backdrop-blur-sm text-gray-300 hover:bg-slate-800/90' : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90')
              }`}
            >
              {freq}
            </button>
          ))}
        </div>

        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6`}>
          <label className="flex items-center gap-3 mb-4">
            <Clock className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {selectedFrequency === 'Twice a day' ? 'First reminder time' : 'Reminder time'}
            </span>
          </label>
          <select
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className={`w-full px-6 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
          >
            {reminderTimes.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>

        {selectedFrequency === 'Twice a day' && (
          <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 transition-all duration-300`}>
            <label className="flex items-center gap-3 mb-4">
              <Clock className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Second reminder time</span>
            </label>
            <select
              value={secondReminderTime}
              onChange={(e) => setSecondReminderTime(e.target.value)}
              className={`w-full px-6 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
            >
              {reminderTimes.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6`}>
          <button
            onClick={() => setGentleReminders(!gentleReminders)}
            className="w-full flex items-center justify-between mb-3"
          >
            <div className="flex items-center gap-3">
              <Bell className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Gentle reminders</span>
            </div>
            <div
              className={`w-14 h-8 rounded-full transition-all ${
                gentleReminders ? (darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-300 to-blue-300') : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full m-1 transition-transform ${
                  gentleReminders ? 'translate-x-6' : ''
                }`}
              />
            </div>
          </button>
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            Gentle reminders are soft notifications sent at your preferred time to encourage regular mood logging without pressure.
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleContinue}
        className={`w-full py-4 ${darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'} text-white rounded-3xl shadow-lg hover:shadow-xl transition-all mt-6`}
      >
        Continue
      </button>
    </div>
  );
}
