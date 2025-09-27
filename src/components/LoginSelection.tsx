import React from 'react';
import { User, Shield, ArrowLeft } from 'lucide-react';

interface LoginSelectionProps {
  onBack: () => void;
  onSelectUserLogin: () => void;
  onSelectAdminLogin: () => void;
}

const LoginSelection: React.FC<LoginSelectionProps> = ({ 
  onBack, 
  onSelectUserLogin, 
  onSelectAdminLogin 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Choose Login Type
          </h2>

          <div className="space-y-4">
            <button
              onClick={onSelectUserLogin}
              className="w-full p-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 group"
            >
              <User className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">User Login</span>
            </button>

            <button
              onClick={onSelectAdminLogin}
              className="w-full p-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 group"
            >
              <Shield className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">Admin Login</span>
            </button>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            Select your account type to continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;