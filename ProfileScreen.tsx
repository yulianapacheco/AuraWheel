import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, User, GraduationCap, Settings, Shield, Moon, Sun, LogOut } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void;
  userData: {
    name: string;
    email: string;
    school: string;
  };
  onUpdateData: (data: any) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function ProfileScreen({ onNavigate, userData, darkMode, toggleDarkMode }: ProfileScreenProps) {
  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Profile</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        {/* User Info Card */}
        <div className={`${darkMode ? 'bg-gradient-to-br from-indigo-800/40 via-purple-800/40 to-blue-800/40' : 'bg-gradient-to-br from-pink-200/60 via-purple-200/60 to-blue-200/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-20 h-20 ${darkMode ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500' : 'bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300'} rounded-full flex items-center justify-center`}>
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className={darkMode ? 'text-purple-200' : 'text-purple-700'}>{userData.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{userData.email}</p>
            </div>
          </div>
          
          <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3`}>
            <GraduationCap className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{userData.school}</span>
          </div>
        </div>

        {/* Settings Section */}
        <div className="space-y-3">
          <h3 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} px-2`}>Settings</h3>
          
          <button className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-purple-600/40' : 'bg-gradient-to-br from-purple-200 to-purple-300'} rounded-2xl flex items-center justify-center`}>
                <User className={`w-6 h-6 ${darkMode ? 'text-purple-300' : 'text-white'}`} />
              </div>
              <div className="flex-1 text-left">
                <h4 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Edit Profile</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Update your personal information</p>
              </div>
            </div>
          </button>

          <button className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-blue-500/40 to-blue-600/40' : 'bg-gradient-to-br from-blue-200 to-blue-300'} rounded-2xl flex items-center justify-center`}>
                <Settings className={`w-6 h-6 ${darkMode ? 'text-blue-300' : 'text-white'}`} />
              </div>
              <div className="flex-1 text-left">
                <h4 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Mood Logging Settings</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Adjust reminders and frequency</p>
              </div>
            </div>
          </button>

          <button className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-green-500/40 to-green-600/40' : 'bg-gradient-to-br from-green-200 to-green-300'} rounded-2xl flex items-center justify-center`}>
                <Shield className={`w-6 h-6 ${darkMode ? 'text-green-300' : 'text-white'}`} />
              </div>
              <div className="flex-1 text-left">
                <h4 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Privacy & Data</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Control your data and AI settings</p>
              </div>
            </div>
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-5 shadow-lg`}>
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-indigo-500/40 to-indigo-600/40' : 'bg-gradient-to-br from-indigo-200 to-indigo-300'} rounded-2xl flex items-center justify-center`}>
                {darkMode ? <Moon className={`w-6 h-6 ${darkMode ? 'text-indigo-300' : 'text-white'}`} /> : <Sun className="w-6 h-6 text-white" />}
              </div>
              <div className="text-left">
                <h4 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Dark Mode</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Easy on the eyes at night</p>
              </div>
            </div>
            <div
              className={`w-14 h-8 rounded-full transition-all ${
                darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full m-1 transition-transform ${
                  darkMode ? 'translate-x-6' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Stats Section */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
          <h3 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Your Journey</h3>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className={`${darkMode ? 'bg-gradient-to-br from-pink-500/20 to-pink-600/20' : 'bg-gradient-to-br from-pink-50 to-pink-100'} rounded-2xl p-4 text-center`}>
              <div className={`text-2xl mb-1 ${darkMode ? 'bg-gradient-to-r from-pink-300 to-purple-300' : 'bg-gradient-to-r from-pink-400 to-purple-400'} bg-clip-text text-transparent`}>
                47
              </div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Check-ins</p>
            </div>
            
            <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/20' : 'bg-gradient-to-br from-purple-50 to-purple-100'} rounded-2xl p-4 text-center`}>
              <div className={`text-2xl mb-1 ${darkMode ? 'bg-gradient-to-r from-purple-300 to-blue-300' : 'bg-gradient-to-r from-purple-400 to-blue-400'} bg-clip-text text-transparent`}>
                14
              </div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Day Streak</p>
            </div>
            
            <div className={`${darkMode ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20' : 'bg-gradient-to-br from-blue-50 to-blue-100'} rounded-2xl p-4 text-center`}>
              <div className={`text-2xl mb-1 ${darkMode ? 'bg-gradient-to-r from-blue-300 to-green-300' : 'bg-gradient-to-r from-blue-400 to-green-400'} bg-clip-text text-transparent`}>
                12
              </div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Unwind Sessions</p>
            </div>
            
            <div className={`${darkMode ? 'bg-gradient-to-br from-green-500/20 to-green-600/20' : 'bg-gradient-to-br from-green-50 to-green-100'} rounded-2xl p-4 text-center`}>
              <div className={`text-2xl mb-1 ${darkMode ? 'bg-gradient-to-r from-green-300 to-yellow-300' : 'bg-gradient-to-r from-green-400 to-yellow-400'} bg-clip-text text-transparent`}>
                23
              </div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Days Active</p>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="space-y-3">
          <button className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-2xl p-4 shadow-lg ${darkMode ? 'text-purple-400' : 'text-purple-600'} hover:bg-white transition-colors`}>
            Export My Data
          </button>
          
          <button className={`w-full ${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-2xl p-4 shadow-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:bg-white transition-colors`}>
            Help & Support
          </button>
        </div>

        {/* Logout */}
        <button 
          onClick={() => onNavigate('signup')}
          className={`w-full ${darkMode ? 'bg-red-900/40' : 'bg-red-50/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all border-2 ${darkMode ? 'border-red-800' : 'border-red-200'}`}
        >
          <div className="flex items-center justify-center gap-3">
            <LogOut className="w-5 h-5 text-red-500" />
            <span className={darkMode ? 'text-red-400' : 'text-red-600'}>Log Out</span>
          </div>
        </button>

        {/* Version Info */}
        <div className="text-center pt-4 pb-8">
          <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>AuraWheel v1.0.0</p>
          <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'} mt-1`}>Made with 💜 for student wellness</p>
        </div>
      </div>
    </div>
  );
}