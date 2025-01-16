import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/huseyinfest', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/huseyinfest', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:eren723134@gmail.com', label: 'Email' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="font-bold text-xl text-gray-900 dark:text-white">
                Hüseyin Eren
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 border-l pl-4 ml-4">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center space-x-2">
              <ThemeToggle />
              <LanguageToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } block px-3 py-2 text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Hüseyin Eren. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;