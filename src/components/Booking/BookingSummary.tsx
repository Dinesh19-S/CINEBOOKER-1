import React from 'react';
import { CheckCircle, Download, Share, QrCode } from 'lucide-react';
import { Movie } from '../../types';

interface BookingSummaryProps {
  movie: Movie;
  bookingData: {
    selectedDate: string;
    selectedTheater: any;
    selectedShowtime: any;
    selectedSeats: string[];
    totalAmount: number;
    paymentMethod: string;
    bookingId: string;
  };
  onNewBooking: () => void;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ 
  movie, 
  bookingData, 
  onNewBooking 
}) => {
  const generateQRCode = () => {
    // In a real app, this would generate an actual QR code
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="white"/>
        <rect x="20" y="20" width="20" height="20" fill="black"/>
        <rect x="60" y="20" width="20" height="20" fill="black"/>
        <rect x="100" y="20" width="20" height="20" fill="black"/>
        <rect x="140" y="20" width="20" height="20" fill="black"/>
        <text x="100" y="190" text-anchor="middle" font-size="12">${bookingData.bookingId}</text>
      </svg>
    `)}`;
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="opacity-90">Your tickets have been booked successfully</p>
          </div>

          {/* Ticket Details */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-48 h-48 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <img 
                  src={generateQRCode()} 
                  alt="QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm">Show this QR code at the theater</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Booking Details</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking ID:</span>
                    <span className="font-semibold text-gray-800">{bookingData.bookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Movie:</span>
                    <span className="font-semibold text-gray-800">{movie.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Theater:</span>
                    <span className="font-semibold text-gray-800">{bookingData.selectedTheater?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold text-gray-800">
                      {new Date(bookingData.selectedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold text-gray-800">{bookingData.selectedShowtime?.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-semibold text-gray-800">
                      {bookingData.selectedSeats.join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600">Total Paid:</span>
                    <span className="font-bold text-green-600">
                      ₹{Math.round(bookingData.totalAmount * 1.2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mt-8">
              <button className="w-full flex items-center justify-center space-x-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                <Download className="w-5 h-5" />
                <span>Download Ticket</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors">
                <Share className="w-5 h-5" />
                <span>Share Ticket</span>
              </button>

              <button 
                onClick={onNewBooking}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Another Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;