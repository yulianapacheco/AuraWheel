import { useState } from 'react';
import { Screen } from '../App';
import { Sparkles } from 'lucide-react';

interface SignUpScreenProps {
  onNavigate: (screen: Screen) => void;
  onUpdateData: (data: { name: string; email: string }) => void;
  darkMode: boolean;
}

export function SignUpScreen({ onNavigate, onUpdateData, darkMode }: SignUpScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (name && email && password) {
      onUpdateData({ name, email });
      onNavigate('welcome');
    }
  };

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col items-center justify-center p-8`}>
      {/* Logo */}
      <div className="mb-12 text-center">
        <div className={`inline-flex items-center justify-center w-24 h-24 ${darkMode ? 'bg-gradient-to-br from-indigo-500/40 via-purple-500/40 via-blue-500/40 to-green-500/40' : 'bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-green-200'} rounded-full mb-4 shadow-lg`}>
          <Sparkles className="w-12 h-12 text-white" />
        </div>
        <h1 className={`${darkMode ? 'bg-gradient-to-r from-pink-300 via-purple-300 via-blue-300 to-green-300' : 'bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-green-400'} bg-clip-text text-transparent`}>
          AuraWheel
        </h1>
      </div>

      {/* Form */}
      <div className="w-full space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-800/70 text-gray-200 border-indigo-800' : 'bg-white/70 border-purple-100'} backdrop-blur-sm rounded-3xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-800/70 text-gray-200 border-indigo-800' : 'bg-white/70 border-purple-100'} backdrop-blur-sm rounded-3xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-800/70 text-gray-200 border-indigo-800' : 'bg-white/70 border-purple-100'} backdrop-blur-sm rounded-3xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
          />
        </div>
        
        <button
          onClick={handleSignUp}
          className={`w-full py-4 ${darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'} text-white rounded-3xl shadow-lg hover:shadow-xl transition-all mt-6`}
        >
          Sign Up
        </button>
      </div>

      {/* Login Link */}
      <p className={`mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Already have an account?{' '}
        <button className={darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-400 hover:text-purple-500'}>
          Log in
        </button>
      </p>
    </div>
  );
}