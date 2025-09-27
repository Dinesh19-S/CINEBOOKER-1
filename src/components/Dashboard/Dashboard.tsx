import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLocation } from '../../contexts/LocationContext';
import { mockMovies } from '../../data/mockData';
import { Movie } from '../../types';
import MovieCard from './MovieCard';
import Header from './Header';
import LanguageFilter from './LanguageFilter';
import Footer from '../common/Footer';

interface DashboardProps {
  onSelectMovie: (movie: Movie) => void;
  onShowProfile: () => void;
  onShowAdmin: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectMovie, onShowProfile, onShowAdmin }) => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const { selectedCity } = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const languages = ['all', 'Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English'];

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
        onProfileClick={onShowProfile}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('home')}, {user?.username}!
          </h2>
          <p className="text-gray-400">
            {selectedCity ? `${t('movies')} in ${selectedCity.name}` : 'Discover and book tickets for the latest movies'}
          </p>
          
          {user?.role === 'admin' && (
            <button
              onClick={onShowAdmin}
              className="mt-4 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
            >
              {t('admin')} Panel
            </button>
          )}
        </div>

        <LanguageFilter
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-6">
            {selectedLanguage === 'all' ? `${t('movies')}` : `${selectedLanguage} ${t('movies')}`}
          </h3>
          
          {filteredMovies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No {t('movies').toLowerCase()} found matching your criteria</p>
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
      
      <Footer />
    </div>
  );
};

export default Dashboard;