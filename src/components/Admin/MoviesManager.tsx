import React, { useState } from 'react';
import { Plus, CreditCard as Edit, Trash2, Search } from 'lucide-react';
import { mockMovies } from '../../data/mockData';
import { Movie } from '../../types';

const MoviesManager: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(mockMovies);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);

  const languages = ['all', 'Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English'];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = selectedLanguage === 'all' || movie.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  const handleDeleteMovie = (movieId: string) => {
    if (confirm('Are you sure you want to delete this movie?')) {
      setMovies(movies.filter(movie => movie.id !== movieId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Movies</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Movie</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {languages.map(lang => (
            <option key={lang} value={lang}>
              {lang === 'all' ? 'All Languages' : lang}
            </option>
          ))}
        </select>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="bg-slate-800 rounded-xl overflow-hidden">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">{movie.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>{movie.language}</span>
                <span>⭐ {movie.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{movie.duration} min</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingMovie(movie)}
                    className="p-2 text-blue-400 hover:bg-slate-700 rounded transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteMovie(movie.id)}
                    className="p-2 text-red-400 hover:bg-slate-700 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No movies found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default MoviesManager;