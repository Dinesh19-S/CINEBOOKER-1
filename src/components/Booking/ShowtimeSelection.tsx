import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { mockShowtimes } from '../../data/mockData';
import { Movie, Theater, Showtime } from '../../types';

interface ShowtimeSelectionProps {
  movie: Movie;
  theater: Theater;
  date: string;
  selectedShowtime: Showtime | null;
  onShowtimeSelect: (showtime: Showtime) => void;
  onNext: () => void;
  onBack: () => void;
}

const ShowtimeSelection: React.FC<ShowtimeSelectionProps> = ({ 
  movie,
  theater,
  date,
  selectedShowtime, 
  onShowtimeSelect, 
  onNext, 
  onBack 
}) => {
  // Filter showtimes for the selected movie, theater, and date
  const availableShowtimes = mockShowtimes.filter(
    showtime => 
      showtime.movieId === movie.id && 
      showtime.theaterId === theater.id &&
      showtime.date === date
  );

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
          <h1 className="text-xl font-bold text-white">Select Show Time</h1>
          <div></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Clock className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Choose Show Time</h2>
            <p className="text-gray-400">Select your preferred show timing</p>
          </div>

          {/* Booking Summary */}
          <div className="bg-slate-800 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <span className="text-gray-400">Movie:</span>
                <p className="text-white font-semibold">{movie.title}</p>
              </div>
              <div>
                <span className="text-gray-400">Theater:</span>
                <p className="text-white font-semibold">{theater.name}</p>
              </div>
              <div>
                <span className="text-gray-400">Date:</span>
                <p className="text-white font-semibold">
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Available Showtimes */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Available Show Times</h3>
            
            {availableShowtimes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No shows available for this date</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {availableShowtimes.map((showtime) => (
                  <button
                    key={showtime.id}
                    onClick={() => onShowtimeSelect(showtime)}
                    className={`
                      p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 border-2
                      ${selectedShowtime?.id === showtime.id
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 border-amber-500 text-white shadow-xl'
                        : 'bg-slate-700 border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    <div className="text-2xl font-bold mb-2">
                      {showtime.time}
                    </div>
                    <div className="text-sm opacity-80">
                      {showtime.availableSeats} seats left
                    </div>
                  </button>
                ))}
              </div>
            )}

            {selectedShowtime && (
              <div className="text-center">
                <div className="mb-6 p-4 bg-slate-700 rounded-lg inline-block">
                  <p className="text-gray-400 mb-1">Selected Show Time:</p>
                  <p className="text-2xl font-bold text-white">{selectedShowtime.time}</p>
                  <p className="text-gray-400">{selectedShowtime.availableSeats} seats available</p>
                </div>
                <div>
                  <button
                    onClick={onNext}
                    className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Continue to Seat Selection
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowtimeSelection;