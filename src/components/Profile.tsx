import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';

const Profile = () => {
  const { theme, t, language } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const strengths = [
    { icon: '🏗️', title: language === 'fr' ? 'Architecture' : 'Architecture', desc: language === 'fr' ? 'Conception scalable et maintenable' : 'Scalable and maintainable design' },
    { icon: '⚛️', title: language === 'fr' ? 'Frontend' : 'Frontend', desc: language === 'fr' ? 'React/TypeScript/Modern Web' : 'React/TypeScript/Modern Web' },
    { icon: '🔧', title: language === 'fr' ? 'Backend' : 'Backend', desc: language === 'fr' ? 'Node.js/Symfony/Laravel/Django' : 'Node.js/Symfony/Laravel/Django' },
    { icon: '🔗', title: language === 'fr' ? 'Smart Contracts' : 'Smart Contracts', desc: language === 'fr' ? 'Blockchain & Web3 Solutions' : 'Blockchain & Web3 Solutions' },
    { icon: '📱', title: language === 'fr' ? 'Mobile' : 'Mobile', desc: language === 'fr' ? 'React Native & Ionic' : 'React Native & Ionic' },
    { icon: '👥', title: language === 'fr' ? 'Leadership' : 'Leadership', desc: language === 'fr' ? 'Gestion d\'équipes & Mentorat' : 'Team Management & Mentoring' },
  ];

  return (
    <section className="space-y-12">
      {/* Hero Section with Gradient */}
      <div className={`relative rounded-lg overflow-hidden p-12 ${isDark ? 'bg-gradient-to-r from-cyan-600 to-teal-500' : 'bg-gradient-to-r from-cyan-400 to-teal-400'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-4">
            <p className="text-lg font-semibold opacity-90">{t('profile.greeting')}</p>
            <h1 className="text-5xl md:text-6xl font-bold">
              Anny Zo<br />Rabemarintsoa
            </h1>
            <p className="text-2xl font-bold opacity-100">
              {language === 'fr' ? 'Développeur Full Stack Senior' : 'Senior Full Stack Developer'}
            </p>
            <p className="text-lg opacity-95">
              {language === 'fr' 
                ? '8+ années d\'expérience | React • Node.js • Symfony • Smart Contracts | Leadership & Architecture'
                : '8+ years experience | React • Node.js • Symfony • Smart Contracts | Leadership & Architecture'
              }
            </p>
            <p className="text-base opacity-90">{t('profile.description')}</p>
            <button 
              onClick={() => navigate('/contact')}
              className={`px-8 py-3 rounded font-semibold transition text-lg ${isDark ? 'bg-teal-400 hover:bg-teal-300 text-gray-900' : 'bg-white hover:bg-gray-100 text-teal-600'}`}
            >
              {t('profile.contact')}
            </button>
          </div>

          {/* Photo */}
          <div className="flex justify-center">
            <div className={`relative w-80 h-96 rounded-[15px] border-4 border-white overflow-hidden shadow-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img 
                src="/img/zo _profil.png" 
                alt="Anny Zo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Strengths */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-cyan-500">
          {language === 'fr' ? 'Domaines d\'Expertise' : 'Areas of Expertise'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength) => (
            <div 
              key={strength.title}
              className={`p-6 rounded-lg border-2 border-cyan-500/50 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white'} transition cursor-pointer`}
            >
              <div className="text-3xl mb-3">{strength.icon}</div>
              <h3 className="text-lg font-bold text-cyan-500 mb-2">{strength.title}</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{strength.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">8+</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'fr' ? 'Années d\'Expérience' : 'Years Experience'}
          </p>
        </div>
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">15+</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'fr' ? 'Technologies Maîtrisées' : 'Technologies Mastered'}
          </p>
        </div>
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">7+</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'fr' ? 'Projets Majeurs' : 'Major Projects'}
          </p>
        </div>
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">100%</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'fr' ? 'Dédication' : 'Dedication'}
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
        <h2 className="text-2xl font-bold text-cyan-500 mb-6">
          {language === 'fr' ? 'À Propos' : 'About Me'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {language === 'fr'
                ? 'Développeur passionné avec 8+ années d\'expérience en développement full stack. Spécialisé en React, Node.js et technologies blockchain, j\'ai mené des projets complexes du concept à la production.'
                : 'Passionate developer with 8+ years of experience in full stack development. Specialized in React, Node.js and blockchain technologies, I have led complex projects from concept to production.'
              }
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {language === 'fr'
                ? 'En tant que Senior Full Stack Developer, j\'ai évolué vers des rôles d\'architecture et de leadership, guidant des équipes et assurant la scalabilité et la maintenabilité des applications.'
                : 'As a Senior Full Stack Developer, I have evolved towards architecture and leadership roles, guiding teams and ensuring scalability and maintainability of applications.'
              }
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {language === 'fr'
                ? 'Mon expertise couvre l\'intégralité de la stack: architectures microservices, APIs RESTful, applications React modernes, Smart Contracts et solutions blockchain.'
                : 'My expertise covers the entire stack: microservices architectures, RESTful APIs, modern React applications, Smart Contracts and blockchain solutions.'
              }
            </p>
          </div>
          <div className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <p><span className="text-cyan-500 font-bold block mb-1">
              {language === 'fr' ? 'INFORMATIONS PERSONNELLES' : 'PERSONAL INFORMATION'}
            </span></p>
            <p><span className="text-cyan-500 font-semibold">{language === 'fr' ? 'NOM:' : 'NAME:'}</span> Anny Zo Rabemarintsoa</p>
            <p><span className="text-cyan-500 font-semibold">{language === 'fr' ? 'LIEU:' : 'LOCATION:'}</span> Antananarivo, Madagascar</p>
            <p><span className="text-cyan-500 font-semibold">{language === 'fr' ? 'TÉLÉPHONE:' : 'PHONE:'}</span> +261 348 513 535</p>
            <p><span className="text-cyan-500 font-semibold">EMAIL:</span> rannyzo94@gmail.com</p>
            <p className="pt-2"><span className="text-cyan-500 font-bold block mb-1">
              {language === 'fr' ? 'STATUT' : 'STATUS'}
            </span> {language === 'fr' ? 'Disponible pour CDI ou projets freelance' : 'Available for full-time or freelance projects'}</p>
          </div>
        </div>
      </div>

      {/* GitHub & GitLab Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-cyan-500">
          {language === 'fr' ? 'Contributions & Profils' : 'Contributions & Profiles'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub */}
          <a 
            href="https://github.com/Annyzo" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-6 rounded-lg border-2 border-cyan-500/50 ${isDark ? 'bg-gray-800 hover:bg-gray-700/80' : 'bg-gray-50 hover:bg-white'} transition cursor-pointer`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🐙</span>
              <div>
                <h3 className="text-2xl font-bold text-cyan-500">GitHub</h3>
                <p className="text-sm text-gray-500">@Annyzo</p>
              </div>
            </div>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'fr' 
                ? 'Explorez mes projets, contributions et repositories sur GitHub.'
                : 'Explore my projects, contributions and repositories on GitHub.'
              }
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                Open Source
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                Code Portfolio
              </span>
            </div>
          </a>

          {/* GitLab */}
          <a 
            href="https://gitlab.com/A.Zo" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-6 rounded-lg border-2 border-cyan-500/50 ${isDark ? 'bg-gray-800 hover:bg-gray-700/80' : 'bg-gray-50 hover:bg-white'} transition cursor-pointer`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🦊</span>
              <div>
                <h3 className="text-2xl font-bold text-cyan-500">GitLab</h3>
                <p className="text-sm text-gray-500">@A.Zo</p>
              </div>
            </div>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'fr' 
                ? 'Découvrez mes projets et collaborations sur GitLab.'
                : 'Discover my projects and collaborations on GitLab.'
              }
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                Projects
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                Contributions
              </span>
            </div>
          </a>
        </div>

        {/* GitHub Stats Badge */}
        <div className={`p-6 rounded-lg border-2 border-cyan-500/50 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h3 className="text-lg font-bold text-cyan-500 mb-4">
            {language === 'fr' ? 'Calendrier de Contributions GitHub' : 'GitHub Contributions Calendar'}
          </h3>
          <div className="flex justify-center overflow-auto pb-4">
            <GitHubCalendar 
              username="Annyzo" 
              colorScheme={isDark ? 'dark' : 'light'}
            />
          </div>
          <p className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'fr'
              ? 'Contributions des 12 derniers mois - Cliquez pour plus de détails'
              : 'Contributions from the last 12 months - Click for more details'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;