import { useTheme } from '../ThemeContext';

const Skills = () => {
  const { theme, t, language } = useTheme();
  const isDark = theme === 'dark';

  const interests = [
    { icon: '⚛️', label: 'React Ecosystem' },
    { icon: '🔗', label: 'Smart Contracts' },
    { icon: '📱', label: 'Mobile Dev' },
    { icon: '🔧', label: 'DevOps' },
    { icon: '🎨', label: 'UI/UX' },
    { icon: '⚙️', label: 'System Design' },
  ];

  const skillsByCategory = {
    'Frontend': [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'React Native', level: 85 },
      { name: 'Ionic', level: 80 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
    'Backend': [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'Symfony', level: 88 },
      { name: 'PHP', level: 85 },
      { name: 'Ruby on Rails', level: 85 },
      { name: 'Python/Django', level: 85 },
      { name: 'Laravel', level: 82 },
      { name: 'NestJS', level: 80 },
    ],
    [t('skills.categories.databases')]: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: language === 'fr' ? 'SQL Avancé' : 'Advanced SQL', level: 88 },
    ],
    [t('skills.categories.devops')]: [
      { name: 'Docker', level: 85 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'CI/CD', level: 82 },
      { name: 'Linux/Bash', level: 85 },
      { name: language === 'fr' ? 'API REST' : 'REST API', level: 92 },
      { name: 'GraphQL', level: 75 },
    ],
    [t('skills.categories.blockchain')]: [
      { name: 'Solidity', level: 80 },
      { name: 'Web3.js', level: 75 },
      { name: 'Ethers.js', level: 78 },
    ],
  };

  const technologies = [
    'React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'JavaScript',
    'Node.js', 'Express', 'Symfony', 'Laravel', 'Ruby on Rails', 'Django',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes',
    'Git', 'GitHub', 'GitLab', 'CI/CD', 'AWS', 'Linux', 'GraphQL',
    'REST API', 'Solidity', 'Web3', 'React Native', 'Ionic', 'Electron'
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500 mb-2">{t('skills.title')}</h2>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {t('skills.subtitle')}
        </p>
      </div>

      {/* Interests/Specialties */}
      <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
        <h3 className="text-2xl font-bold text-cyan-500 mb-6 text-center">{t('skills.interests')}</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest) => (
            <div
              key={interest.label}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg ${isDark ? 'bg-gray-700 border border-cyan-500/50 hover:bg-cyan-500/20' : 'bg-white border border-cyan-400 hover:bg-cyan-50'} cursor-pointer transition text-center`}
            >
              <span className="text-3xl">{interest.icon}</span>
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {interest.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills by Category */}
      <div className="space-y-8">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className={`p-8 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
            <h3 className="text-2xl font-bold text-cyan-500 mb-6">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                    <span className="text-cyan-500 font-bold">{skill.level}%</span>
                  </div>
                  <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <div className={`p-8 rounded-lg border-2 border-cyan-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <h3 className="text-2xl font-bold text-cyan-500 mb-6">{t('skills.stack')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`px-4 py-2 rounded border-2 border-cyan-500 text-center font-semibold transition cursor-pointer ${isDark
                ? 'bg-gray-800 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900'
                : 'bg-white text-cyan-600 hover:bg-cyan-500 hover:text-white'
                }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">15+</p>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('skills.languages')}</p>
        </div>
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">30+</p>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('skills.technologies')}</p>
        </div>
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">8+</p>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('skills.yearsExperience')}</p>
        </div>
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 border border-cyan-500/50' : 'bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200'}`}>
          <p className="text-3xl font-bold text-cyan-500">100%</p>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('skills.passion')}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;