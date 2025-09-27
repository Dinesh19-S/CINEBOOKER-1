import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Theater, Seat } from '../../types';

interface SeatSelectionProps {
  theater: Theater;
  selectedSeats: string[];
  onSeatsSelect: (seats: string[], total: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const SeatSelection: React.FC<SeatSelectionProps> = ({ 
  theater, 
  selectedSeats, 
  onSeatsSelect, 
  onNext, 
  onBack 
}) => {
  const [localSelectedSeats, setLocalSelectedSeats] = useState<string[]>(selectedSeats);
  
  // Use the first screen for demo
  const screen = theater.screens[0];
  const seatLayout = screen.seatLayout;

  const handleSeatClick = (seat: Seat) => {
    if (!seat.isAvailable) return;

    const seatId = seat.id;
    let newSelectedSeats: string[];

    if (localSelectedSeats.includes(seatId)) {
      newSelectedSeats = localSelectedSeats.filter(id => id !== seatId);
    } else {
      if (localSelectedSeats.length >= 10) {
        alert('Maximum 10 seats can be selected');
        return;
      }
      newSelectedSeats = [...localSelectedSeats, seatId];
    }

    setLocalSelectedSeats(newSelectedSeats);
    
    // Calculate total price
    const totalPrice = newSelectedSeats.reduce((total, seatId) => {
      const seat = seatLayout.rows
        .flatMap(row => row.seats)
        .find(s => s.id === seatId);
      return total + (seat?.price || 0);
    }, 0);

    onSeatsSelect(newSelectedSeats, totalPrice);
  };

  const getSeatTypeColor = (seat: Seat) => {
    if (!seat.isAvailable) {
      return 'bg-red-500 cursor-not-allowed';
    }
    if (localSelectedSeats.includes(seat.id)) {
      return 'bg-amber-500 shadow-lg';
    }
    switch (seat.type) {
      case 'regular': return 'bg-slate-600 hover:bg-slate-500';
      case 'premium': return 'bg-purple-600 hover:bg-purple-500';
      case 'vip': return 'bg-gold-600 hover:bg-gold-500';
      default: return 'bg-slate-600 hover:bg-slate-500';
    }
  };

  const getTotalAmount = () => {
    return localSelectedSeats.reduce((total, seatId) => {
      const seat = seatLayout.rows
        .flatMap(row => row.seats)
        .find(s => s.id === seatId);
      return total + (seat?.price || 0);
    }, 0);
  };

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
          <h1 className="text-xl font-bold text-white">Select Seats</h1>
          <div></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Screen */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-t-full h-4 w-80 mx-auto mb-4 shadow-lg"></div>
            <p className="text-white font-semibold">SCREEN</p>
          </div>

          {/* Seat Map */}
          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="space-y-4">
              {seatLayout.rows.map((row) => (
                <div key={row.rowName} className="flex items-center justify-center space-x-2">
                  <div className="w-8 text-center text-white font-bold">
                    {row.rowName}
                  </div>
                  <div className="flex space-x-2">
                    {row.seats.map((seat, index) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatClick(seat)}
                        className={`
                          w-8 h-8 rounded-md text-white text-xs font-semibold transition-all duration-200 transform hover:scale-110
                          ${getSeatTypeColor(seat)}
                        `}
                        disabled={!seat.isAvailable}
                        title={`${seat.seatNumber} - ₹${seat.price} (${seat.type})`}
                      >
                        {seat.seatNumber.replace(row.rowName, '')}
                      </button>
                    ))}
                  </div>
                  <div className="w-8"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-slate-600 rounded"></div>
              <span className="text-gray-400">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-600 rounded"></div>
              <span className="text-gray-400">Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-amber-500 rounded"></div>
              <span className="text-gray-400">Selected</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-400">Occupied</span>
            </div>
          </div>

          {/* Selected Seats Summary */}
          {localSelectedSeats.length > 0 && (
            <div className="bg-slate-800 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Selected Seats</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {localSelectedSeats.map((seatId) => {
                  const seat = seatLayout.rows
                    .flatMap(row => row.seats)
                    .find(s => s.id === seatId);
                  return (
                    <span
                      key={seatId}
                      className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {seat?.seatNumber} - ₹{seat?.price}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-400">Total Amount: </span>
                  <span className="text-2xl font-bold text-white">₹{getTotalAmount()}</span>
                </div>
                <button
                  onClick={onNext}
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}

          {localSelectedSeats.length === 0 && (
            <div className="text-center">
              <p className="text-gray-400 text-lg">Please select seats to continue</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;