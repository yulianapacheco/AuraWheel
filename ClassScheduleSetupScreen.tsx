import { useState } from 'react';
import { Screen } from '../App';
import { Calendar, Clock, Plus, Trash2, BookOpen } from 'lucide-react';

interface ClassScheduleSetupScreenProps {
  onNavigate: (screen: Screen) => void;
  onUpdateData: (data: any) => void;
  darkMode: boolean;
}

interface ClassItem {
  id: string;
  name: string;
  days: string[];
  startTime: string;
  endTime: string;
}

const daysOfWeek = [
  { label: 'M', value: 'Monday' },
  { label: 'T', value: 'Tuesday' },
  { label: 'W', value: 'Wednesday' },
  { label: 'R', value: 'Thursday' },
  { label: 'F', value: 'Friday' },
];

const timeOptions = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

export function ClassScheduleSetupScreen({ onNavigate, onUpdateData, darkMode }: ClassScheduleSetupScreenProps) {
  const [classes, setClasses] = useState<ClassItem[]>([
    { id: '1', name: '', days: [], startTime: '', endTime: '' }
  ]);

  const addNewClass = () => {
    const newClass: ClassItem = {
      id: Date.now().toString(),
      name: '',
      days: [],
      startTime: '',
      endTime: '',
    };
    setClasses([...classes, newClass]);
  };

  const removeClass = (id: string) => {
    setClasses(classes.filter(cls => cls.id !== id));
  };

  const updateClass = (id: string, field: keyof ClassItem, value: any) => {
    setClasses(classes.map(cls => 
      cls.id === id ? { ...cls, [field]: value } : cls
    ));
  };

  const toggleDay = (classId: string, day: string) => {
    setClasses(classes.map(cls => {
      if (cls.id === classId) {
        const days = cls.days.includes(day)
          ? cls.days.filter(d => d !== day)
          : [...cls.days, day];
        return { ...cls, days };
      }
      return cls;
    }));
  };

  const handleContinue = () => {
    // Filter out empty classes
    const validClasses = classes.filter(cls => 
      cls.name && cls.days.length > 0 && cls.startTime && cls.endTime
    );
    onUpdateData({ classSchedule: validClasses });
    onNavigate('home');
  };

  const handleSkip = () => {
    onNavigate('home');
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col p-8 py-16`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-blue-500/40' : 'bg-gradient-to-br from-purple-200 to-blue-200'} rounded-full mb-4 shadow-lg`}>
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Add Your Class Schedule</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
          This helps AuraWheel detect academic stress patterns.
        </p>
      </div>

      {/* Classes List */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {classes.map((classItem, index) => (
          <div 
            key={classItem.id} 
            className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-5`}
          >
            {/* Class Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Class {index + 1}
                </span>
              </div>
              {classes.length > 1 && (
                <button
                  onClick={() => removeClass(classItem.id)}
                  className={`p-2 ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-red-50'} rounded-xl transition-colors`}
                >
                  <Trash2 className={`w-4 h-4 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
                </button>
              )}
            </div>

            {/* Class Name */}
            <div className="mb-4">
              <label className={`block text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 px-2`}>
                Class Name
              </label>
              <input
                type="text"
                value={classItem.name}
                onChange={(e) => updateClass(classItem.id, 'name', e.target.value)}
                placeholder="e.g., Introduction to Psychology"
                className={`w-full px-4 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors text-sm`}
              />
            </div>

            {/* Days of Week */}
            <div className="mb-4">
              <label className={`block text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 px-2`}>
                Days of the Week
              </label>
              <div className="flex gap-2">
                {daysOfWeek.map((day) => (
                  <button
                    key={day.value}
                    onClick={() => toggleDay(classItem.id, day.value)}
                    className={`flex-1 py-3 rounded-2xl transition-all text-sm ${
                      classItem.days.includes(day.value)
                        ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80 text-white shadow-lg' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white shadow-lg')
                        : (darkMode ? 'bg-slate-700 text-gray-400 hover:bg-slate-600' : 'bg-white border-2 border-purple-100 text-gray-700 hover:bg-gray-50')
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={`flex items-center gap-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 px-2`}>
                  <Clock className="w-4 h-4" />
                  Start Time
                </label>
                <select
                  value={classItem.startTime}
                  onChange={(e) => updateClass(classItem.id, 'startTime', e.target.value)}
                  className={`w-full px-3 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors text-sm`}
                >
                  <option value="">Select</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`flex items-center gap-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 px-2`}>
                  <Clock className="w-4 h-4" />
                  End Time
                </label>
                <select
                  value={classItem.endTime}
                  onChange={(e) => updateClass(classItem.id, 'endTime', e.target.value)}
                  className={`w-full px-3 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors text-sm`}
                >
                  <option value="">Select</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        {/* Add Another Class Button */}
        <button
          onClick={addNewClass}
          className={`w-full py-4 ${darkMode ? 'bg-slate-800/60 border-indigo-700/50' : 'bg-white/60 border-purple-200'} backdrop-blur-sm rounded-3xl border-2 border-dashed hover:border-solid transition-all flex items-center justify-center gap-2`}
        >
          <Plus className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
          <span className={darkMode ? 'text-purple-400' : 'text-purple-500'}>
            Add Another Class
          </span>
        </button>
      </div>

      {/* Info Note */}
      <div className={`${darkMode ? 'bg-indigo-900/40 border-indigo-700' : 'bg-blue-50/60 border-blue-100'} backdrop-blur-sm rounded-3xl p-4 border-2 mb-4`}>
        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
          You can add or edit your schedule anytime in Settings.
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleContinue}
          className={`w-full py-4 ${darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'} text-white rounded-3xl shadow-lg hover:shadow-xl transition-all`}
        >
          Continue
        </button>
        
        <button
          onClick={handleSkip}
          className={`w-full py-4 ${darkMode ? 'bg-slate-800/60 text-gray-400' : 'bg-white/60 text-gray-600'} backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all`}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
