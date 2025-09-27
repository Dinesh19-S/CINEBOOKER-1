import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { User as UserIcon, LogOut, Search, Settings } from 'lucide-react';
import { User } from '../../types';
import LocationSelector from '../common/LocationSelector';
import LanguageSelector from '../common/LanguageSelector';
import ThemeSelector from '../common/ThemeSelector';

interface HeaderProps {
  user: User | null;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, searchTerm, onSearchChange, onProfileClick }) => {
  const { logout } = useAuth();
  const { t } = useLanguage();

  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            CineMax
          </h1>
          
          <LocationSelector />
          
          <div className="relative hidden md:block">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 w-80 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <ThemeSelector />

          <div className="flex items-center space-x-3">
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-2 hover:bg-slate-700 rounded-lg p-2 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-white font-medium">{user?.username}</p>
                <p className="text-gray-400 text-sm">{user?.role}</p>
              </div>
            </button>

            <button
              onClick={logout}
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title={t('logout')}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder={t('search')}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;