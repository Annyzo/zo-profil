import { useTheme } from '../ThemeContext';

const Education = () => {
  const { theme, t } = useTheme();
  const isDark = theme === 'dark';

  const formations = (t('education.items') as unknown) as Array<{
    level: string;
    school: string;
    program: string;
    year: string;
    description: string;
  }>;

  const formationMeta = [
    { icon: '🎓', skills: ['JavaScript', 'Java', 'C/C++', 'Python', 'PHP', 'MySQL', 'Algorithmique', 'Algèbre', 'Mathématiques'] },
    { icon: '💻', skills: ['HTML5', 'CSS3', 'JavaScript', 'Ruby on Rails', 'Django', 'Python', 'Git', 'Bootstrap', 'Full Stack'] },
    { icon: '📚', skills: ['Linux', 'Java', 'POO', 'Gestion BD', 'Réseaux', 'Administration Système', 'Git', 'Bootstrap'] },
    { icon: '👥', skills: ['Leadership', "Gestion d'équipe", 'Supervision', 'Anthropométrie', 'Coordination', 'Enquête'] },
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500">{t('education.title')}</h2>
        <p className={isDark ? 'text-gray-400 mt-2' : 'text-gray-600 mt-2'}>
          {t('education.subtitle')}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line (desktop) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-teal-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {formations.map((formation, index) => (
            <div key={formation.school}>
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  {/* small-screen dot */}
                  <div className="flex md:hidden justify-center mb-3">
                    <div className={`w-5 h-5 rounded-full border-4 border-cyan-500 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}></div>
                  </div>

                  <div className={`p-6 rounded-lg border-2 border-cyan-500/50 ${isDark ? 'bg-gray-800 hover:bg-gray-700/80' : 'bg-gray-50 hover:bg-white'} transition`}>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">{formationMeta[index].icon}</span>
                      <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                        <h3 className="text-xl font-bold text-cyan-500">{formation.level}</h3>
                        <p className={`font-semibold text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{formation.school}</p>
                      </div>
                    </div>

                    {/* Program and Year */}
                    <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {formation.program}
                    </p>
                    <p className="text-cyan-500 font-semibold text-sm mb-4">📅 {formation.year}</p>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {formation.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {formationMeta[index].skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs px-3 py-1 rounded-full font-semibold ${isDark ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border border-cyan-300'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Dot (desktop) */}
                <div className="hidden md:flex justify-center items-center">
                  <div className={`w-5 h-5 rounded-full border-4 border-cyan-500 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}></div>
                </div>

                {/* Empty Side (desktop) */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bottom-0 bg-cyan-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default Education;