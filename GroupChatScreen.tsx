import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Send } from 'lucide-react';

interface GroupChatScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

const sampleMessages = [
  { id: 1, user: 'Sarah M.', text: 'Hey everyone, welcome! 👋', time: '10:23 AM', isOwn: false },
  { id: 2, user: 'Alex K.', text: 'Thanks! Excited to be here', time: '10:25 AM', isOwn: false },
  { id: 3, user: 'Jordan T.', text: 'Don\'t forget the study session at 7 PM today!', time: '11:14 AM', isOwn: false },
  { id: 4, user: 'You', text: 'How is everyone feeling this week?', time: '2:30 PM', isOwn: true },
  { id: 5, user: 'Maya P.', text: 'A bit stressed with midterms coming up, but managing', time: '2:45 PM', isOwn: false },
  { id: 6, user: 'Chris L.', text: 'Same here! Taking a walk helped a lot today', time: '3:02 PM', isOwn: false },
  { id: 7, user: 'Taylor S.', text: 'Anyone want to study together at the library tomorrow?', time: '3:15 PM', isOwn: false },
  { id: 8, user: 'You', text: 'I\'d be down for that!', time: '3:18 PM', isOwn: true },
];

export function GroupChatScreen({ onNavigate, darkMode }: GroupChatScreenProps) {
  const [message, setMessage] = useState('');

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-md p-6 pb-4 flex items-center gap-4 border-b ${darkMode ? 'border-indigo-900' : 'border-purple-100'}`}>
        <button onClick={() => onNavigate('study-buddies')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Information Technology</h2>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>48 members</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {sampleMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${msg.isOwn ? 'items-end' : 'items-start'} flex flex-col`}>
              {!msg.isOwn && (
                <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-1 px-2`}>
                  {msg.user}
                </span>
              )}
              <div
                className={`px-4 py-3 rounded-3xl ${
                  msg.isOwn
                    ? (darkMode ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white' : 'bg-gradient-to-r from-purple-400 to-blue-400 text-white')
                    : (darkMode ? 'bg-slate-800/70 text-gray-200' : 'bg-white/70 text-gray-800')
                } backdrop-blur-sm shadow-md`}
              >
                <p className="leading-relaxed">{msg.text}</p>
              </div>
              <span className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'} mt-1 px-2`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className={`${darkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-md p-6 border-t ${darkMode ? 'border-indigo-900' : 'border-purple-100'}`}>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className={`flex-1 px-6 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white/70 border-purple-100'} backdrop-blur-sm rounded-3xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
          />
          <button className={`p-3 ${darkMode ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80' : 'bg-gradient-to-r from-purple-400 to-blue-400'} rounded-full shadow-lg hover:shadow-xl transition-all`}>
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
