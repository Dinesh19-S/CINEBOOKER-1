import React from 'react';
import { Film, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Film className="w-24 h-24 text-amber-400 animate-bounce" />
            <Sparkles className="w-8 h-8 text-amber-300 absolute -top-2 -right-2 animate-spin" />
          </div>
        </div>

        <h1 
          onClick={onNavigate}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6 cursor-pointer hover:scale-105 transition-transform duration-300 tracking-tight"
        >
          CineMax
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Book Your Movie Experience
        </p>

        <div className="space-y-4 text-gray-400">
          <p className="text-lg">Welcome to India's Premier Movie Booking Platform</p>
          <p className="text-sm">Click on CineMax to get started</p>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-amber-400 rounded-full animate-ping"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;