import React, { useState } from 'react';
import { Plus, CreditCard as Edit, Trash2, Search, MapPin } from 'lucide-react';
import { mockTheaters } from '../../data/mockData';
import { Theater } from '../../types';

const TheatersManager: React.FC = () => {
  const [theaters, setTheaters] = useState<Theater[]>(mockTheaters);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTheater, setEditingTheater] = useState<Theater | null>(null);

  const cities = ['all', 'mumbai', 'new-delhi', 'chennai', 'bangalore', 'hyderabad'];

  const filteredTheaters = theaters.filter(theater => {
    const matchesSearch = theater.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || theater.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  const handleDeleteTheater = (theaterId: string) => {
    if (confirm('Are you sure you want to delete this theater?')) {
      setTheaters(theaters.filter(theater => theater.id !== theaterId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Theaters</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Theater</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search theaters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {cities.map(city => (
            <option key={city} value={city}>
              {city === 'all' ? 'All Cities' : city.charAt(0).toUpperCase() + city.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Theaters List */}
      <div className="space-y-4">
        {filteredTheaters.map((theater) => (
          <div key={theater.id} className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{theater.name}</h3>
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{theater.city}, {theater.state}</span>
                </div>
                <p className="text-gray-400 mb-3">{theater.address}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-purple-400">{theater.screens.length} Screens</span>
                  <span className="text-green-400">Active</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingTheater(theater)}
                  className="p-2 text-blue-400 hover:bg-slate-700 rounded transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteTheater(theater.id)}
                  className="p-2 text-red-400 hover:bg-slate-700 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTheaters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No theaters found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default TheatersManager;