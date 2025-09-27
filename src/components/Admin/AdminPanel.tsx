import React, { useState } from 'react';
import { ArrowLeft, Film, Building, Monitor, Clock, Users, Settings } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import MoviesManager from './MoviesManager';
import TheatersManager from './TheatersManager';
import ShowtimesManager from './ShowtimesManager';

interface AdminPanelProps {
  onBack: () => void;
}

type AdminSection = 'overview' | 'movies' | 'theaters' | 'screens' | 'showtimes' | 'users' | 'settings';

const AdminPanel: React.FC<AdminPanelProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const { t } = useLanguage();

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Settings },
    { id: 'movies', label: t('manageMovies'), icon: Film },
    { id: 'theaters', label: t('manageTheaters'), icon: Building },
    { id: 'screens', label: t('manageScreens'), icon: Monitor },
    { id: 'showtimes', label: t('manageShowtimes'), icon: Clock },
    { id: 'users', label: 'Manage Users', icon: Users },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'movies':
        return <MoviesManager />;
      case 'theaters':
        return <TheatersManager />;
      case 'showtimes':
        return <ShowtimesManager />;
      case 'overview':
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Admin Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Movies</p>
                    <p className="text-2xl font-bold text-white">30</p>
                  </div>
                  <Film className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Theaters</p>
                    <p className="text-2xl font-bold text-white">10</p>
                  </div>
                  <Building className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Screens</p>
                    <p className="text-2xl font-bold text-white">45</p>
                  </div>
                  <Monitor className="w-8 h-8 text-green-400" />
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Users</p>
                    <p className="text-2xl font-bold text-white">1,234</p>
                  </div>
                  <Users className="w-8 h-8 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-300">New movie "Vikram" added</span>
                  <span className="text-gray-400 text-sm">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-300">Theater "PVR Cinemas" updated</span>
                  <span className="text-gray-400 text-sm">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300">New showtime added for "RRR"</span>
                  <span className="text-gray-400 text-sm">6 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

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
            {t('back')}
          </button>
          <h1 className="text-xl font-bold text-white">{t('admin')} Panel</h1>
          <div></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-slate-800 rounded-xl p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id as AdminSection)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;