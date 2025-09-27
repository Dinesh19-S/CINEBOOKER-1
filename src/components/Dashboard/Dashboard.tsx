import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { mockMovies } from '../../data/mockData';
import { Movie } from '../../types';
import MovieCard from './MovieCard';
import Header from './Header';
import LanguageFilter from './LanguageFilter';

interface DashboardProps {
  onSelectMovie: (movie: Movie) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectMovie }) => {
  const { user } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const languages = ['all', 'Tamil', 'English', 'Malayalam', 'Hindi', 'Kannada', 'Telugu'];

  const filteredMovies = mockMovies.filter(movie => {
    const matchesLanguage = selectedLanguage === 'all' || movie.language === selectedLanguage;
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesLanguage && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <Header 
        user={user} 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome back, {user?.username}!
          </h2>
          <p className="text-gray-400">
            Discover and book tickets for the latest movies
          </p>
        </div>

        <LanguageFilter
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-6">
            {selectedLanguage === 'all' ? 'All Movies' : `${selectedLanguage} Movies`}
          </h3>
          
          {filteredMovies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No movies found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelect={() => onSelectMovie(movie)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;