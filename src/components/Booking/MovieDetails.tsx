import React from 'react';
import { ArrowLeft, Star, Clock, Calendar, Play } from 'lucide-react';
import { Movie } from '../../types';

interface MovieDetailsProps {
  movie: Movie;
  onNext: () => void;
  onBack: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onNext, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Movies
          </button>
          <h1 className="text-xl font-bold text-white">Movie Details</h1>
          <div></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 text-white fill-current" />
                </button>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{movie.rating}/10</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.duration} minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{new Date(movie.releaseDate).toLocaleDateString()}</span>
                </div>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {movie.language}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((genre) => (
                  <span
                    key={genre}
                    className="bg-slate-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Synopsis</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movie.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Cast</h3>
                <div className="space-y-2">
                  {movie.cast.map((actor, index) => (
                    <div key={index} className="text-gray-300">
                      {actor}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Director</h3>
                <p className="text-gray-300">{movie.director}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={onNext}
                className="px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;