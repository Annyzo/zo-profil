import { useTheme } from '../ThemeContext';

const Experience = () => {
  const { theme, t } = useTheme();
  const isDark = theme === 'dark';

  const experiences = (t('experience.items') as unknown) as Array<{
    title: string;
    company: string;
    period: string;
    duration: string;
    location: string;
    type: string;
    description: string;
    tasks: string[];
  }>;

  const experienceMeta = [
    { icon: "💼", skills: ["React.js", "Node.js", "Symfony", "Smart Contracts", "TypeScript", "PostgreSQL"] },
    { icon: "🔧", skills: ["Symfony", "PHP", "API REST", "PostgreSQL"] },
    { icon: "🏗️", skills: ["Laravel", "React.js", "PHP", "MySQL", "API REST"] },
    { icon: "📱", skills: ["Symfony", "React.js", "React Native", "Ionic", "PHP", "JavaScript"] },
    { icon: "🎓", skills: ["Ruby on Rails", "Node.js", "React.js", "HTML", "CSS"] },
    { icon: "🐍", skills: ["Django", "Python", "HTML", "CSS", "PostgreSQL"] },
    { icon: "🏛️", skills: ["PHP", "HTML", "CSS", "MySQL"] },
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500">{t('experience.title')}</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line (desktop) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-teal-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company + exp.period}>
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  {/* small-screen dot */}
                  <div className="flex md:hidden justify-center mb-3">
                    <div className={`w-5 h-5 rounded-full border-4 border-cyan-500 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}></div>
                  </div>

                  <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
                    <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                      <span className="text-4xl">{experienceMeta[index].icon}</span>
                      <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                        <h3 className="text-2xl font-bold text-cyan-500">{exp.title}</h3>
                        <p className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className={`space-y-2 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} text-base`}>
                      <p>
                        <span className="text-cyan-500 font-semibold">📅</span> {exp.period}
                      </p>
                      <p>
                        <span className="text-cyan-500 font-semibold">⏱️</span> {exp.duration}
                      </p>
                      <p>
                        <span className="text-cyan-500 font-semibold">📍</span> {exp.location}
                      </p>
                      <span className="inline-block bg-cyan-500/20 text-cyan-500 text-sm px-3 py-1 rounded border border-cyan-500/50 font-semibold">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-base mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                      {exp.description}
                    </p>

                    {/* Tasks */}
                    <ul className={`text-base space-y-2 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <span className="text-cyan-500 font-bold flex-shrink-0">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experienceMeta[index].skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-sm px-3 py-1 rounded font-semibold ${isDark ? 'bg-gray-700 text-cyan-400' : 'bg-blue-100 text-blue-700'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Dot (desktop) */}
                <div className="hidden md:flex justify-center items-center flex-shrink-0">
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

export default Experience;