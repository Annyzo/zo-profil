import { useTheme } from '../ThemeContext';

const Experience = () => {
  const { theme, t } = useTheme();
  const isDark = theme === 'dark';

  const experiences = [
    {
      title: "Développeur Full Stack Senior",
      company: "ATSCOM",
      period: "Juillet 2022 - Décembre 2025",
      duration: "3 ans 6 mois",
      location: "Antananarivo, Madagascar",
      type: "CDI",
      icon: "💼",
      description: "Débutant en 2022 en tant que développeur web confirmé spécialisé en Smart Contracts et React, j'ai évolué à travers divers projets intégrant React, Node.js et Symfony. Avec l'expérience, j'ai assumé des responsabilités croissantes, tant sur le plan technique que dans l'accompagnement des équipes et la collaboration avec les clients pour concevoir des solutions optimales. En tant que Développeur Full Stack Senior, j'interviens sur l'architecture, le développement et l'optimisation des applications.",
      skills: ["React.js", "Node.js", "Symfony", "Smart Contracts", "TypeScript", "PostgreSQL"],
      tasks: [
        "Conception et développement d'applications web full stack",
        "Gestion d'équipes et accompagnement technique",
        "Architecture applicative et optimisation des performances",
        "Collaboration avec les clients pour des solutions optimales",
      ],
    },
    {
      title: "Développeur Symfony",
      company: "TWEN IT",
      period: "Mars 2022 - Septembre 2022",
      duration: "7 mois",
      location: "Paris, France",
      type: "Freelance",
      icon: "🔧",
      description: "Participation au développement d'une plateforme de gestion de transport en Symfony.",
      skills: ["Symfony", "PHP", "API REST", "PostgreSQL"],
      tasks: [
        "Conception et amélioration des fonctionnalités de gestion des trajets, conducteurs et véhicules",
        "Optimisation des performances et intégration d'API tierces",
        "Collaboration avec l'équipe pour assurer la scalabilité et la maintenabilité",
      ],
    },
    {
      title: "Développeur Laravel/React.js",
      company: "Freelance",
      period: "Janvier 2022 - Mai 2022",
      duration: "5 mois",
      location: "Remote",
      type: "Freelance",
      icon: "🏗️",
      description: "Développement d'une plateforme de gestion immobilière en Laravel et React.js",
      skills: ["Laravel", "React.js", "PHP", "MySQL", "API REST"],
      tasks: [
        "Mise en place d'un système de gestion des biens, des locataires et des transactions",
        "Développement du back-end avec Laravel pour gérer les fonctionnalités métier et l'API",
        "Création d'une interface utilisateur dynamique et réactive avec React.js",
        "Optimisation des performances et sécurisation des accès",
      ],
    },
    {
      title: "Développeur Symfony/React.js/React Native/Ionic",
      company: "Freelance",
      period: "Août 2021 - Mars 2022",
      duration: "8 mois",
      location: "Remote",
      type: "Freelance",
      icon: "📱",
      description: "Développement d'une solution complète de gestion de véhicules pour le web et le mobile",
      skills: ["Symfony", "React.js", "React Native", "Ionic", "PHP", "JavaScript"],
      tasks: [
        "Conception et développement des fonctionnalités de gestion des véhicules, utilisateurs et réservations",
        "Développement de l'application web avec Symfony et React.js",
        "Création des applications mobiles en React Native et Ionic pour multi-plateforme",
        "Optimisation des performances et intégration d'API tierces",
      ],
    },
    {
      title: "Développeur Ruby on Rails/Node.js/React.js",
      company: "SAYNA",
      period: "Novembre 2020 - Août 2021",
      duration: "10 mois",
      location: "Antananarivo, Madagascar",
      type: "Alternance",
      icon: "🎓",
      description: "Projet: Gestion de location de véhicules",
      skills: ["Ruby on Rails", "Node.js", "React.js", "HTML", "CSS"],
      tasks: [
        "Développement du système de gestion de location de véhicules",
        "Implémentation des APIs backend",
        "Création d'interfaces utilisateur avec React.js",
      ],
    },
    {
      title: "Développeur Django",
      company: "SAYNA",
      period: "Septembre 2020 - Octobre 2020",
      duration: "2 mois",
      location: "Antananarivo, Madagascar",
      type: "Formation",
      icon: "🐍",
      description: "Développement d'une plateforme d'orientation pour les bacheliers",
      skills: ["Django", "Python", "HTML", "CSS", "PostgreSQL"],
      tasks: [
        "Conception et développement de la plateforme d'orientation",
        "Implémentation de la logique métier avec Django",
        "Création des interfaces utilisateur",
      ],
    },
    {
      title: "Développeur Web PHP",
      company: "Ministère des Mines et des Ressources Stratégiques",
      period: "Mars 2017 - Mai 2017",
      duration: "3 mois",
      location: "Antananarivo, Madagascar",
      type: "Stage",
      icon: "🏛️",
      description: "Développement d'un système de gestion de garage en PHP pour compléter mon diplôme de licence",
      skills: ["PHP", "HTML", "CSS", "MySQL"],
      tasks: [
        "Conception et développement d'un système de gestion de garage",
        "Application des connaissances en développement web",
        "Travail sur un projet concret au sein d'un organisme gouvernemental",
      ],
    },
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500">{t('experience.title')}</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-teal-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company + exp.period} className={index % 2 === 0 ? '' : 'flex-row-reverse'}>
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-4xl">{exp.icon}</span>
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

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
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

                {/* Center Dot */}
                <div className="w-0 flex justify-center items-center flex-shrink-0">
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

export default Experience;