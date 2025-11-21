import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Shuffle } from 'lucide-react';

interface FocusSortScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

const initialItems = [
  { id: 1, text: 'Breathe deeply', color: 'from-pink-300 to-pink-400', darkColor: 'from-pink-500/60 to-pink-600/60', order: 1 },
  { id: 2, text: 'Stay present', color: 'from-purple-300 to-purple-400', darkColor: 'from-purple-500/60 to-purple-600/60', order: 2 },
  { id: 3, text: 'Let it flow', color: 'from-blue-300 to-blue-400', darkColor: 'from-blue-500/60 to-blue-600/60', order: 3 },
  { id: 4, text: 'Stay calm', color: 'from-green-300 to-green-400', darkColor: 'from-green-500/60 to-green-600/60', order: 4 },
  { id: 5, text: 'Find peace', color: 'from-yellow-300 to-yellow-400', darkColor: 'from-yellow-500/60 to-yellow-600/60', order: 5 },
];

export function FocusSortScreen({ onNavigate, darkMode }: FocusSortScreenProps) {
  const [items, setItems] = useState(initialItems);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const shuffleItems = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  const handleDragStart = (id: number) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetId: number) => {
    if (draggedItem === null) return;

    const draggedIndex = items.findIndex(item => item.id === draggedItem);
    const targetIndex = items.findIndex(item => item.id === targetId);

    if (draggedIndex === targetIndex) return;

    const newItems = [...items];
    const [draggedElement] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedElement);

    setItems(newItems);
    setDraggedItem(null);
  };

  const isSorted = items.every((item, index) => item.order === index + 1);

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('unwind')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Focus Sort</h2>
        </div>
        <button
          onClick={shuffleItems}
          className={`p-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
        >
          <Shuffle className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        {/* Instructions */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-center`}>
            Drag the affirmations to sort them from top to bottom. This gentle sorting activity helps calm anxiety through focused attention.
          </p>
        </div>

        {/* Sortable Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item.id)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(item.id)}
              className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/70'} backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden cursor-move hover:shadow-xl transition-all ${
                draggedItem === item.id ? 'opacity-50' : ''
              }`}
            >
              <div className={`h-32 bg-gradient-to-br ${darkMode ? item.darkColor : item.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-white/10" />
                <p className={`text-2xl text-white text-center px-6 relative z-10`}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Message */}
        {isSorted && (
          <div className={`${darkMode ? 'bg-gradient-to-br from-green-900/40 to-blue-900/40' : 'bg-gradient-to-br from-green-100/60 to-blue-100/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 ${darkMode ? 'border-green-700' : 'border-green-200'} animate-pulse`}>
            <p className={`${darkMode ? 'text-green-300' : 'text-green-700'} text-center`}>
              ✨ Perfect! You've sorted all affirmations. Take a moment to breathe and feel the calm.
            </p>
          </div>
        )}

        {/* Info */}
        <div className={`${darkMode ? 'bg-indigo-900/40' : 'bg-purple-100/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm`}>
            Organizing tasks can help reduce overwhelming feelings. This simple sorting game provides a gentle way to practice focus and mindfulness.
          </p>
        </div>
      </div>
    </div>
  );
}
