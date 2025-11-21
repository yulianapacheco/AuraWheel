import { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface SoothingColorsScreenProps {
  onNavigate: (screen: Screen) => void;
  darkMode: boolean;
}

const colorPalettes = [
  {
    name: 'Sunset Calm',
    colors: ['#FFB6C1', '#FFD4E5', '#E6C9FF', '#B8D4FF', '#C8E6FF'],
    gradient: 'from-pink-200 via-purple-200 to-blue-200',
  },
  {
    name: 'Ocean Breeze',
    colors: ['#A8E6CF', '#DCEDC1', '#FFD3B6', '#FFAAA5', '#FF8B94'],
    gradient: 'from-green-200 via-yellow-200 to-pink-200',
  },
  {
    name: 'Lavender Dreams',
    colors: ['#E0BBE4', '#D4A5D4', '#C48EC4', '#B377B3', '#A260A3'],
    gradient: 'from-purple-200 via-purple-300 to-purple-400',
  },
  {
    name: 'Peach Serenity',
    colors: ['#FFDAB9', '#FFE4C4', '#FFF0E0', '#FFE5B4', '#FFEFD5'],
    gradient: 'from-orange-100 via-yellow-100 to-orange-50',
  },
];

export function SoothingColorsScreen({ onNavigate, darkMode }: SoothingColorsScreenProps) {
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [blendedColors, setBlendedColors] = useState<string[]>([]);

  const handleColorTap = (color: string) => {
    setActiveColor(color);
    // Add to blended colors
    if (!blendedColors.includes(color)) {
      setBlendedColors([...blendedColors, color]);
    }
  };

  const resetColors = () => {
    setBlendedColors([]);
    setActiveColor(null);
  };

  const currentPalette = colorPalettes[selectedPalette];

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col`}>
      {/* Header */}
      <div className="p-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('unwind')} className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Soothing Colors</h2>
        </div>
        <button
          onClick={resetColors}
          className={`p-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        {/* Active Color Display */}
        <div
          className="w-full h-48 rounded-3xl shadow-lg transition-all duration-500 ease-in-out"
          style={{
            background: blendedColors.length > 1
              ? `linear-gradient(135deg, ${blendedColors.join(', ')})`
              : activeColor || currentPalette.colors[0],
          }}
        >
          <div className="h-full flex items-center justify-center">
            <div className={`${darkMode ? 'bg-slate-900/60' : 'bg-white/60'} backdrop-blur-sm rounded-2xl px-6 py-3`}>
              <p className={`${darkMode ? 'text-white' : 'text-gray-800'} text-center`}>
                {blendedColors.length > 1 ? 'Blended Colors' : activeColor ? 'Current Color' : 'Tap colors to blend'}
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-center`}>
            Tap on colors below to blend them together. Watch as they create new calming combinations.
          </p>
        </div>

        {/* Current Palette Colors */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
          <h3 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-4`}>
            {currentPalette.name}
          </h3>
          <div className="grid grid-cols-5 gap-3">
            {currentPalette.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorTap(color)}
                className={`aspect-square rounded-2xl transition-all duration-300 hover:scale-110 ${
                  blendedColors.includes(color) ? 'ring-4 ring-white shadow-xl' : 'shadow-md'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Palette Selector */}
        <div className={`${darkMode ? 'bg-slate-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-3xl p-6 shadow-lg`}>
          <h3 className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-4`}>
            Choose a Palette
          </h3>
          <div className="space-y-3">
            {colorPalettes.map((palette, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedPalette(index);
                  resetColors();
                }}
                className={`w-full p-4 rounded-2xl transition-all ${
                  selectedPalette === index
                    ? 'ring-4 ring-purple-400 shadow-lg'
                    : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-1 h-8 rounded-xl bg-gradient-to-r ${palette.gradient}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {palette.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className={`${darkMode ? 'bg-indigo-900/40' : 'bg-purple-100/60'} backdrop-blur-sm rounded-3xl p-5 shadow-lg border-2 ${darkMode ? 'border-indigo-700' : 'border-purple-200'}`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm`}>
            Color therapy can help reduce stress and anxiety. Take your time exploring different combinations that feel calming to you.
          </p>
        </div>
      </div>
    </div>
  );
}
