import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { useLocation } from '../../contexts/LocationContext';
import { useLanguage } from '../../contexts/LanguageContext';

const LocationSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { selectedState, selectedCity, setSelectedState, setSelectedCity, states, cities } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowCities(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStateSelect = (state: any) => {
    setSelectedState(state);
    setShowCities(true);
  };

  const handleCitySelect = (city: any) => {
    setSelectedCity(city);
    setIsOpen(false);
    setShowCities(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
      >
        <MapPin className="w-4 h-4" />
        <span className="text-sm">
          {selectedCity ? `${selectedCity.name}, ${selectedState?.name}` : t('selectLocation')}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-2xl border border-slate-700 z-50">
          {!showCities ? (
            // States List
            <div className="p-4">
              <h3 className="text-white font-semibold mb-3">Select State</h3>
              <div className="max-h-60 overflow-y-auto space-y-1">
                {states.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => handleStateSelect(state)}
                    className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                  >
                    {state.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Cities List
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">Select City in {selectedState?.name}</h3>
                <button
                  onClick={() => setShowCities(false)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Back
                </button>
              </div>
              <div className="max-h-60 overflow-y-auto space-y-1">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCitySelect(city)}
                    className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;