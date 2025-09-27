import React, { createContext, useContext, useState, useEffect } from 'react';
import { State, City, indianStates } from '../data/locations';

interface LocationContextType {
  selectedState: State | null;
  selectedCity: City | null;
  setSelectedState: (state: State | null) => void;
  setSelectedCity: (city: City | null) => void;
  states: State[];
  cities: City[];
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  useEffect(() => {
    // Load saved location from localStorage
    const savedState = localStorage.getItem('selectedState');
    const savedCity = localStorage.getItem('selectedCity');
    
    if (savedState) {
      const state = indianStates.find(s => s.id === savedState);
      if (state) {
        setSelectedState(state);
        if (savedCity) {
          const city = state.cities.find(c => c.id === savedCity);
          if (city) {
            setSelectedCity(city);
          }
        }
      }
    }
  }, []);

  const handleSetSelectedState = (state: State | null) => {
    setSelectedState(state);
    setSelectedCity(null); // Reset city when state changes
    if (state) {
      localStorage.setItem('selectedState', state.id);
    } else {
      localStorage.removeItem('selectedState');
    }
    localStorage.removeItem('selectedCity');
  };

  const handleSetSelectedCity = (city: City | null) => {
    setSelectedCity(city);
    if (city) {
      localStorage.setItem('selectedCity', city.id);
    } else {
      localStorage.removeItem('selectedCity');
    }
  };

  const cities = selectedState ? selectedState.cities : [];

  return (
    <LocationContext.Provider value={{
      selectedState,
      selectedCity,
      setSelectedState: handleSetSelectedState,
      setSelectedCity: handleSetSelectedCity,
      states: indianStates,
      cities
    }}>
      {children}
    </LocationContext.Provider>
  );
};