import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Send, Mic, Sparkles } from 'lucide-react';

interface AIAssistantChatScreenProps {
  onNavigate: (screen: Screen) => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  buttons?: { label: string; action: Screen }[];
}

export function AIAssistantChatScreen({ onNavigate }: AIAssistantChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AuraWheel AI assistant. I'm here to help you understand your emotions and support your wellness journey. How are you feeling today?",
      sender: 'ai',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I hear you. It sounds like you're going through a challenging time. Would you like to try one of these activities?",
        sender: 'ai',
        buttons: [
          { label: 'Open Grounding Exercise', action: 'unwind' },
          { label: 'View Counseling Center', action: 'campus-map' },
          { label: 'Try an Unwind Activity', action: 'unwind' },
        ],
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInputText('');
  };

  return (
    <div className="h-full bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50 flex flex-col">
      {/* Header */}
      <div className="p-6 pb-4 flex items-center gap-4 bg-white/60 backdrop-blur-sm border-b border-purple-100">
        <button onClick={() => onNavigate('home')} className="text-purple-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-purple-600">AI Assistant</h3>
            <p className="text-xs text-gray-500">Here to help</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-3xl p-4 shadow-md ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-purple-300 to-blue-300 text-white rounded-br-md'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 rounded-bl-md'
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
              </div>
              
              {message.buttons && (
                <div className="mt-3 space-y-2">
                  {message.buttons.map((button, index) => (
                    <button
                      key={index}
                      onClick={() => onNavigate(button.action)}
                      className="block w-full text-left px-4 py-3 bg-white/80 backdrop-blur-sm text-purple-600 rounded-2xl shadow-md hover:shadow-lg transition-all border-2 border-purple-200"
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white/60 backdrop-blur-sm border-t border-purple-100">
        <div className="flex items-center gap-2">
          <button className="p-3 text-purple-400 hover:text-purple-600 transition-colors">
            <Mic className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-5 py-3 bg-white rounded-full border-2 border-purple-100 focus:border-purple-300 focus:outline-none transition-colors"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-gradient-to-br from-purple-300 to-blue-300 text-white rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
