import React from 'react';
import { ArrowLeft, MapPin, Star } from 'lucide-react';
import { mockTheaters } from '../../data/mockData';
import { Theater } from '../../types';

interface TheaterSelectionProps {
  selectedTheater: Theater | null;
  onTheaterSelect: (theater: Theater) => void;
  onNext: () => void;
  onBack: () => void;
}

const TheaterSelection: React.FC<TheaterSelectionProps> = ({ 
  selectedTheater, 
  onTheaterSelect, 
  onNext, 
  onBack 
}) => {
  return (
    <div>
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-xl font-bold text-white">Select Theater</h1>
          <div></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Choose Your Theater</h2>
            <p className="text-gray-400">Select from premium theaters across India</p>
          </div>

          <div className="space-y-6">
            {mockTheaters.map((theater) => (
              <div
                key={theater.id}
                onClick={() => onTheaterSelect(theater)}
                className={`
                  bg-slate-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 border-2
                  ${selectedTheater?.id === theater.id 
                    ? 'border-amber-500 shadow-2xl shadow-amber-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{theater.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{theater.city}, {theater.state}</span>
                    </div>
                    <p className="text-gray-400">{theater.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">4.8</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-gray-400">
                      <span className="text-white font-semibold">{theater.screens.length}</span> Screens
                    </div>
                    <div className="text-gray-400">
                      Premium Sound System
                    </div>
                    <div className="text-gray-400">
                      Recliner Seats
                    </div>
                  </div>

                  {selectedTheater?.id === theater.id && (
                    <div className="text-amber-400 font-semibold">Selected</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {selectedTheater && (
            <div className="text-center mt-8">
              <button
                onClick={onNext}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Continue to Show Times
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheaterSelection;