import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Dynamic nav link styling
  const navLinkClass = (hoverColor) => ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${isActive ? hoverColor : 'text-gray-300 hover:text-white'
    } hover:${hoverColor}`;

    const handleSearch = () => {
      if (searchQuery.trim()) {
        navigate(`/search/${searchQuery}`);
      }
    };
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-purple-400">
            <a href="/">
            MovieHub
            </a>
          </div>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex gap-2 flexwrap">
            <NavLink to="/action" className={navLinkClass('text-yellow-400')}>
              Action
            </NavLink>
            <NavLink to="/comedy" className={navLinkClass('text-green-400')}>
              Comedy
            </NavLink>
            <NavLink to="/horror" className={navLinkClass('text-red-400')}>
              Horror
            </NavLink>
            <NavLink to="/thriller" className={navLinkClass('text-pink-400')}>
              Thriller
            </NavLink>
            <NavLink to="/sci-fi" className={navLinkClass('text-blue-400')}>
              Sci-Fi
            </NavLink>
            <NavLink to="/mystery" className={navLinkClass('text-teal-400')}>
              Mystery
            </NavLink>
            <NavLink to="/drama" className={navLinkClass('text-orange-800')}>
              Drama
            </NavLink>
            <NavLink to="/romance" className={navLinkClass('text-lime-400')}>
              Romance
            </NavLink>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block relative w-64">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full px-4 py-2 rounded-md text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-400">
              🔍
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden pb-3 space-y-1">
            <NavLink
              to="/action"
              className={navLinkClass('text-yellow-400')}
              onClick={() => setIsMenuOpen(false)}
            >
              Action
            </NavLink>
            <NavLink
              to="/comedy"
              className={navLinkClass('text-green-400')}
              onClick={() => setIsMenuOpen(false)}
            >
              Comedy
            </NavLink>
            <NavLink
              to="/horror"
              className={navLinkClass('text-red-400')}
              onClick={() => setIsMenuOpen(false)}
            >
              Horror
            </NavLink>
            <NavLink
              to="/romance"
              className={navLinkClass('text-pink-400')}
              onClick={() => setIsMenuOpen(false)}
            >
              Romance
            </NavLink>
            <NavLink
              to="/sci-fi"
              className={navLinkClass('text-blue-400')}
              onClick={() => setIsMenuOpen(false)}
            >
              Sci-Fi
            </NavLink>

            {/* Mobile Search */}
            <div className="mt-2 px-2">
              <input
                type="text"
                placeholder="Search movies..."
                className="w-full px-3 py-2 rounded-md text-purple-500 focus:outline-none"
                value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;