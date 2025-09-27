import React, { useState } from 'react';
import { Plus, CreditCard as Edit, Trash2, Search, Clock } from 'lucide-react';
import { mockShowtimes, mockMovies, mockTheaters } from '../../data/mockData';
import { Showtime } from '../../types';

const ShowtimesManager: React.FC = () => {
  const [showtimes, setShowtimes] = useState<Showtime[]>(mockShowtimes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingShowtime, setEditingShowtime] = useState<Showtime | null>(null);

  const getMovieTitle = (movieId: string) => {
    const movie = mockMovies.find(m => m.id === movieId);
    return movie?.title || 'Unknown Movie';
  };

  const getTheaterName = (theaterId: string) => {
    const theater = mockTheaters.find(t => t.id === theaterId);
    return theater?.name || 'Unknown Theater';
  };

  const filteredShowtimes = showtimes.filter(showtime => {
    const movieTitle = getMovieTitle(showtime.movieId);
    const theaterName = getTheaterName(showtime.theaterId);
    const matchesSearch = movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         theaterName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !selectedDate || showtime.date === selectedDate;
    return matchesSearch && matchesDate;
  });

  const handleDeleteShowtime = (showtimeId: string) => {
    if (confirm('Are you sure you want to delete this showtime?')) {
      setShowtimes(showtimes.filter(showtime => showtime.id !== showtimeId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Showtimes</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Showtime</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by movie or theater..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Showtimes List */}
      <div className="space-y-4">
        {filteredShowtimes.map((showtime) => (
          <div key={showtime.id} className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {getMovieTitle(showtime.movieId)}
                  </h3>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">
                    {showtime.time}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <span>{getTheaterName(showtime.theaterId)}</span>
                  <span>•</span>
                  <span>{new Date(showtime.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{showtime.availableSeats} seats available</span>
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingShowtime(showtime)}
                  className="p-2 text-blue-400 hover:bg-slate-700 rounded transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteShowtime(showtime.id)}
                  className="p-2 text-red-400 hover:bg-slate-700 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredShowtimes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No showtimes found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default ShowtimesManager;