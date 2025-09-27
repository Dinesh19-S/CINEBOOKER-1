import React from 'react';

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({ 
  languages, 
  selectedLanguage, 
  onLanguageChange 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">Filter by Language</h3>
      <div className="flex flex-wrap gap-3">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => onLanguageChange(language)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedLanguage === language
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            {language === 'all' ? 'All Languages' : language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageFilter;