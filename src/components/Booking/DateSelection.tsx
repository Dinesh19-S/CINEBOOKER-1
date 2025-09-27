import React, { useState } from 'react';
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface DateSelectionProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({ 
  selectedDate, 
  onDateSelect, 
  onNext, 
  onBack 
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30); // Allow booking for next 30 days

  const generateCalendarDays = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const isDateAvailable = (date: Date) => {
    return date >= today && date <= maxDate;
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const days = generateCalendarDays();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
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
          <h1 className="text-xl font-bold text-white">Select Date</h1>
          <div></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Calendar className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Choose Your Preferred Date</h2>
            <p className="text-gray-400">Select a date to view available shows</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevMonth}
                className="p-2 text-gray-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-white">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 text-gray-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-gray-400 font-semibold py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2 mb-8">
              {days.map((date, index) => {
                const dateStr = formatDate(date);
                const isSelected = selectedDate === dateStr;
                const isAvailable = isDateAvailable(date);
                const isCurrentMonthDate = isCurrentMonth(date);
                
                return (
                  <button
                    key={index}
                    onClick={() => isAvailable && onDateSelect(dateStr)}
                    disabled={!isAvailable}
                    className={`
                      aspect-square p-2 rounded-lg text-center font-medium transition-all duration-300
                      ${!isCurrentMonthDate ? 'text-gray-600' : ''}
                      ${isSelected 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105' 
                        : isAvailable 
                          ? 'text-white hover:bg-slate-700 hover:transform hover:scale-105' 
                          : 'text-gray-500 cursor-not-allowed'
                      }
                    `}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-gray-400 mb-2">Selected Date:</p>
                  <p className="text-2xl font-bold text-white">
                    {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                <button
                  onClick={onNext}
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Continue to Theater Selection
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelection;