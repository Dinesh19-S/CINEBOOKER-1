import React from 'react';
import { Star, Clock, Calendar } from 'lucide-react';
import { Movie } from '../../types';

interface MovieCardProps {
  movie: Movie;
  onSelect: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onSelect }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
      <div className="relative overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">{movie.rating}</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {movie.language}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{movie.duration} min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(movie.releaseDate).getFullYear()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {movie.genre.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs"
            >
              {genre}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {movie.description}
        </p>

        <button
          onClick={onSelect}
          className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;