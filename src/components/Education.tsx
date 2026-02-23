import { useTheme } from '../ThemeContext';

const Education = () => {
  const { theme, t, language } = useTheme();
  const isDark = theme === 'dark';

  const formations = [
    {
      level: 'Master 2',
      school: 'Université d\'Antananarivo',
      program: 'Mathématiques Informatique',
      year: '2019 – 2021',
      icon: '🎓',
      description: 'Au cours de mon parcours en Master 2 Mathématiques Informatique à l\'Université d\'Antananarivo, j\'ai acquis des connaissances approfondies en mathématiques fondamentales, en logique avec l\'Algèbre, ainsi qu\'en algorithmique pratique avec les langages C/C++, Python et Java. J\'ai également étudié les bases de données en utilisant le langage PHP et la base de données MySQL. Cette formation m\'a permis de développer une solide compréhension des concepts mathématiques appliqués à l\'informatique, ainsi que des compétences pratiques en programmation et en manipulation de données statistiques.',
      skills: ['JavaScript', 'Java', 'C/C++', 'Python', 'PHP', 'MySQL', 'Algorithmique', 'Algèbre', 'Mathématiques'],
    },
    {
      level: 'Formation Bootcamp & Web Development',
      school: 'SAYNA',
      program: 'Full Stack Development',
      year: '2020',
      icon: '💻',
      description: 'Au sein de SAYNA, j\'ai suivi une formation intensive en développement web, axée sur les fondamentaux du web tels que HTML, CSS et JavaScript. J\'ai également acquis une expérience pratique en utilisant le framework Ruby on Rails pour la création et la maintenance de sites web. J\'ai suivi également une formation specialisée en Django/Python pour créer une plateforme d\'orientation pour les bacheliers, intégrant scanning de relevés et recommandations basées sur les résultats. Cette formation comprenait aussi les soft skills et le leadership dispensés lors de la Career Week.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Ruby on Rails', 'Django', 'Python', 'Git', 'Bootstrap', 'Full Stack'],
    },
    {
      level: 'Licence Professionnelle',
      school: 'CNTEMAD',
      program: 'Informatique - Réseaux Systèmes',
      year: '2016 – 2017',
      icon: '📚',
      description: 'Au CNTEMAD, j\'ai obtenu une licence professionnelle en informatique spécialisée en Réseaux et Systèmes. Mon étude s\'est concentrée sur l\'administration de systèmes basés sur Linux, la gestion de bases de données, et la programmation orientée objet avec Java. J\'ai développé une solide compréhension des concepts liés aux réseaux, aux systèmes et à la programmation, ainsi que des compétences pratiques en administration de systèmes et en développement logiciel.',
      skills: ['Linux', 'Java', 'POO', 'Gestion BD', 'Réseaux', 'Administration Système', 'Git', 'Bootstrap'],
    },
    {
      level: 'Formation Superviseur & Enquêteur',
      school: 'ATW/MSI',
      program: 'Anthropométrie et Leadership',
      year: '2020 – Présent',
      icon: '👥',
      description: 'J\'ai suivi une formation en tant qu\'enquêteur et superviseur avec deux volets importants: (1) Mesure Anthropométrique par PAM - Acquis compétences en mesures anthropométriques pour études nutritionnelles avec protocoles et outils standardisés. (2) Supervision, Enquête et Leadership - Formation axée sur la gestion d\'équipe, planification et coordination d\'enquêtes, et leadership sur le terrain. Cette formation a renforcé mes compétences en enquête, supervision et gestion d\'équipe pour des missions dynamiques.',
      skills: ['Leadership', 'Gestion d\'équipe', 'Supervision', 'Anthropométrie', 'Coordination', 'Enquête'],
    },
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500">{t('education.title')}</h2>
        <p className={isDark ? 'text-gray-400 mt-2' : 'text-gray-600 mt-2'}>
          {language === 'fr' ? 'Parcours académique et formations professionnelles' : 'Academic background and professional training'}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-teal-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {formations.map((formation, index) => (
            <div key={formation.school} className={index % 2 === 0 ? '' : 'flex-row-reverse'}>
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className={`p-6 rounded-lg border-2 border-cyan-500/50 ${isDark ? 'bg-gray-800 hover:bg-gray-700/80' : 'bg-gray-50 hover:bg-white'} transition`}>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">{formation.icon}</span>
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
                      {formation.skills.map((skill) => (
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

                {/* Center Dot */}
                <div className="w-0 flex justify-center items-center">
                  <div className={`w-5 h-5 rounded-full border-4 border-cyan-500 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}></div>
                </div>

                {/* Empty Side */}
                <div className="w-1/2"></div>
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