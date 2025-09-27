import React, { useState, useRef, useEffect } from 'react';
import { Palette, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeSelect = (selectedTheme: any) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
        title="Change Theme"
      >
        <Palette className="w-4 h-4" />
        <span className="text-sm hidden md:inline">{theme.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-2xl border border-slate-700 z-50">
          <div className="p-3">
            <h3 className="text-white font-semibold mb-3 text-sm">Choose Theme</h3>
            <div className="space-y-2">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => handleThemeSelect(themeOption)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center space-x-3 ${
                    theme.id === themeOption.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <div 
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${themeOption.colors.primary}`}
                  ></div>
                  <span className="text-sm">{themeOption.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;