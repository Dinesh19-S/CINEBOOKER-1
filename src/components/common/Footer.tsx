import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
              CineMax
            </h3>
            <p className="text-gray-400 mb-4">
              India's premier movie booking platform. Book tickets for the latest movies across all major theaters in India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@cinemax.in</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 1800-123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('movies')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('theaters')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('bookings')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Offers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('aboutUs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('contactUs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('termsConditions')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('privacyPolicy')}</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected for the latest movie updates and exclusive offers.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CineMax. All rights reserved. | Made with ❤️ for movie lovers across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;