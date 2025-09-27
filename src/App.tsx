import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { LocationProvider } from './contexts/LocationContext';
import { useAuth } from './contexts/AuthContext';
import Home from './components/Home';
import LoginSelection from './components/LoginSelection';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Dashboard from './components/Dashboard/Dashboard';
import BookingFlow from './components/Booking/BookingFlow';
import ProfilePage from './components/Profile/ProfilePage';
import AdminPanel from './components/Admin/AdminPanel';
import { Movie } from './types';

type AppState = 
  | 'home' 
  | 'login-selection' 
  | 'user-login' 
  | 'user-register' 
  | 'admin-login' 
  | 'admin-register'
  | 'dashboard'
  | 'booking'
  | 'profile'
  | 'admin';

const AppContent: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const { user } = useAuth();

  // Redirect to dashboard if user is logged in
  React.useEffect(() => {
    if (user && currentState !== 'booking') {
      setCurrentState('dashboard');
    }
  }, [user, currentState]);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    setCurrentState('booking');
  };

  const renderCurrentScreen = () => {
    switch (currentState) {
      case 'home':
        return <Home onNavigate={() => setCurrentState('login-selection')} />;
      
      case 'login-selection':
        return (
          <LoginSelection
            onBack={() => setCurrentState('home')}
            onSelectUserLogin={() => setCurrentState('user-login')}
            onSelectAdminLogin={() => setCurrentState('admin-login')}
          />
        );
      
      case 'user-login':
        return (
          <LoginForm
            role="user"
            onBack={() => setCurrentState('login-selection')}
            onSwitchToRegister={() => setCurrentState('user-register')}
          />
        );
      
      case 'user-register':
        return (
          <RegisterForm
            role="user"
            onBack={() => setCurrentState('login-selection')}
            onSwitchToLogin={() => setCurrentState('user-login')}
          />
        );
      
      case 'admin-login':
        return (
          <LoginForm
            role="admin"
            onBack={() => setCurrentState('login-selection')}
            onSwitchToRegister={() => setCurrentState('admin-register')}
          />
        );
      
      case 'admin-register':
        return (
          <RegisterForm
            role="admin"
            onBack={() => setCurrentState('login-selection')}
            onSwitchToLogin={() => setCurrentState('admin-login')}
          />
        );
      
      case 'dashboard':
        return (
          <Dashboard 
            onSelectMovie={handleMovieSelect} 
            onShowProfile={() => setCurrentState('profile')}
            onShowAdmin={() => setCurrentState('admin')}
          />
        );
      
      case 'booking':
        return selectedMovie ? (
          <BookingFlow 
            movie={selectedMovie} 
            onBack={() => setCurrentState('dashboard')} 
          />
        ) : (
          <Dashboard 
            onSelectMovie={handleMovieSelect} 
            onShowProfile={() => setCurrentState('profile')}
            onShowAdmin={() => setCurrentState('admin')}
          />
        );
      
      case 'profile':
        return <ProfilePage onBack={() => setCurrentState('dashboard')} />;
      
      case 'admin':
        return <AdminPanel onBack={() => setCurrentState('dashboard')} />;
      
      default:
        return <Home onNavigate={() => setCurrentState('login-selection')} />;
    }
  };

  return (
    <div className="app">
      {renderCurrentScreen()}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LocationProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </LocationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;