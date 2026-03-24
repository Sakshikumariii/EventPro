import { Link, NavLink, useNavigate } from "react-router-dom";
import { navLinks } from "../../constants/constant";
import { useAuth } from "../../context/AuthContext";
import { FaUser, FaSignOutAlt, FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-primary-700/40 bg-white/90 text-gray-900 shadow-lg backdrop-blur dark:bg-gray-900/95 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-primary-700 hover:text-primary-600 dark:text-white dark:hover:text-primary-300 transition"
          >
            EventPro
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-sm font-medium transition ${
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    }`
                  }
                >
                  <Icon className="text-base" />
                  {t(label.toLowerCase())}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme + Auth + Language Switcher Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 text-xs font-medium transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <>
                  <FaSun className="text-yellow-300" />
                  <span>{t('light')}</span>
                </>
              ) : (
                <>
                  <FaMoon className="text-blue-300" />
                  <span>{t('dark')}</span>
                </>
              )}
            </button>

            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <FaUser className="text-sm" />
                  <span className="text-sm">{user?.firstName || user?.email || t('user')}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition text-sm font-medium"
                >
                  <FaSignOutAlt className="text-sm" />
                  {t('logout')}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition text-sm font-medium"
                >
                  {t('login')}
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition text-sm font-medium"
                >
                  {t('signup')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <ul className="space-y-2">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                        isActive
                          ? "bg-primary-50 text-primary-700 dark:bg-gray-800 dark:text-primary-400"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`
                    }
                  >
                    <Icon className="text-base" />
                    {t(label.toLowerCase())}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* Mobile Auth Buttons */}
            <div className="mt-4 px-4 space-y-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 text-gray-300 text-sm">
                    <FaUser className="text-sm" />
                    <span>{user?.firstName || user?.email || t('user')}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition text-sm font-medium"
                  >
                    <FaSignOutAlt className="text-sm" />
                    {t('logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 text-gray-300 hover:text-white transition text-sm font-medium rounded-lg hover:bg-gray-800"
                  >
                    {t('login')}
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition text-sm font-medium"
                  >
                    {t('signup')}
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
