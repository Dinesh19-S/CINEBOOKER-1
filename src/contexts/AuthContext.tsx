import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'user' | 'admin') => Promise<void>;
  register: (userData: any, role: 'user' | 'admin') => Promise<void>;
  logout: () => void;
  socialLogin: (provider: 'google' | 'facebook' | 'twitter') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: 'user' | 'admin') => {
    // Mock login - in real app, this would call Supabase
    const mockUser: User = {
      id: '1',
      email,
      username: email.split('@')[0],
      role,
      createdAt: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (userData: any, role: 'user' | 'admin') => {
    // Mock registration - in real app, this would call Supabase
    const mockUser: User = {
      id: Date.now().toString(),
      ...userData,
      role,
      createdAt: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const socialLogin = async (provider: 'google' | 'facebook' | 'twitter') => {
    // Mock social login - in real app, this would use Supabase auth
    const mockUser: User = {
      id: Date.now().toString(),
      email: `user@${provider}.com`,
      username: `${provider}User`,
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, socialLogin }}>
      {children}
    </AuthContext.Provider>
  );
};