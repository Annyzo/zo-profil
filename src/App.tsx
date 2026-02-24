import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeContext';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function AppContent() {
  const { theme, toggleTheme, language, setLanguage, t } = useTheme();
  
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const headerClass = isDark ? 'bg-gray-800 border-b border-cyan-500' : 'bg-gray-50 border-b border-cyan-300';
  const [menuOpen, setMenuOpen] = useState(false);

  // Update page title
  useEffect(() => {
    document.title = 'Anny Zo - Senior Full Stack Developer';
  }, []);

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Header / Navigation */}
      <header className={`${headerClass} sticky top-0 z-50 shadow-lg`}>
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img 
              src="/img/zo _profil.png" 
              alt="Anny Zo" 
              className="w-12 h-12 rounded-full border-2 border-cyan-500 object-cover"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              ANNY ZO
            </span>
          </Link>
          
          <ul className="hidden md:flex space-x-8 items-center text-gray-700 dark:text-gray-300">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-cyan-500 font-medium transition">{t('nav.profile')}</Link></li>
            <li><Link to="/skills" onClick={() => setMenuOpen(false)} className="hover:text-cyan-500 font-medium transition">{t('nav.skills')}</Link></li>
            <li><Link to="/experience" onClick={() => setMenuOpen(false)} className="hover:text-cyan-500 font-medium transition">{t('nav.experience')}</Link></li>
            <li><Link to="/education" onClick={() => setMenuOpen(false)} className="hover:text-cyan-500 font-medium transition">{t('nav.education')}</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-500 font-medium transition">{t('nav.contact')}</Link></li>
          </ul>

          {/* Controls */}
          <div className="flex gap-4 items-center">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="md:hidden px-3 py-2 rounded border border-cyan-500 hover:bg-cyan-500 hover:text-white transition"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
            {/* Language Toggle */}
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
              className={`px-3 py-1 rounded border border-cyan-500 cursor-pointer ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded border border-cyan-500 hover:bg-cyan-500 hover:text-white transition"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu (small screens) */}
      {menuOpen && (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} md:hidden border-b border-cyan-300`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-cyan-100 dark:hover:bg-gray-700">{t('nav.profile')}</Link></li>
              <li><Link to="/skills" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-cyan-100 dark:hover:bg-gray-700">{t('nav.skills')}</Link></li>
              <li><Link to="/experience" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-cyan-100 dark:hover:bg-gray-700">{t('nav.experience')}</Link></li>
              <li><Link to="/education" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-cyan-100 dark:hover:bg-gray-700">{t('nav.education')}</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-cyan-100 dark:hover:bg-gray-700">{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} py-8 mt-16 border-t border-cyan-500`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 Anny Zo Rabemarintsoa - {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;