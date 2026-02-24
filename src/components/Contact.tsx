import { useState } from 'react';
import { useTheme } from '../ThemeContext';

const Contact = () => {
  const { theme, t } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rannyzo94@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}\n\nName: ${formData.name}\nEmail: ${formData.email}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500 mb-4">{t('contact.title')}</h2>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Contactez-moi pour discuter de vos projets</p>
      </div>

      {/* Contact CTA Section */}
      <div className={`relative rounded-lg p-12 ${isDark ? 'bg-gradient-to-r from-cyan-600 to-teal-500' : 'bg-gradient-to-r from-cyan-400 to-teal-400'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white flex-1">
            <h3 className="text-3xl font-bold mb-2">CONTACTEZ-MOI POUR VOTRE AWESOME PROJECT</h3>
            <p className="opacity-90">Parlons de vos idées et comment je peux les concrétiser</p>
          </div>
          <a 
            href="mailto:rannyzo94@gmail.com"
            className={`px-8 py-3 rounded font-bold transition whitespace-nowrap ${isDark ? 'bg-gray-900 hover:bg-gray-800 text-cyan-500' : 'bg-white hover:bg-gray-100 text-cyan-600'}`}
          >
            EMBAUCHEZ-MOI
          </a>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h4 className="text-cyan-500 font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">📧</span> Email
            </h4>
            <a href="mailto:rannyzo94@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-semibold break-all">
              rannyzo94@gmail.com
            </a>
          </div>

          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h4 className="text-cyan-500 font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">📱</span> Téléphone
            </h4>
            <a href="tel:+261348513535" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              +261 34 85 135 35
            </a>
          </div>

          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h4 className="text-cyan-500 font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">📍</span> Localisation
            </h4>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Antananarivo, Madagascar</p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Disponible pour missions remote</p>
          </div>

          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h4 className="text-cyan-500 font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🔗</span> Réseaux
            </h4>
            <a 
              href="https://www.linkedin.com/in/anny-zo-r-324b091a0" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className={`p-8 rounded-lg space-y-5 border-2 border-cyan-500 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div>
              <label className="block text-cyan-500 font-semibold mb-2 uppercase text-sm">{t('contact.name')} *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded border-2 border-cyan-500 focus:outline-none focus:border-teal-400 ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-cyan-500 font-semibold mb-2 uppercase text-sm">{t('contact.email')} *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded border-2 border-cyan-500 focus:outline-none focus:border-teal-400 ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-cyan-500 font-semibold mb-2 uppercase text-sm">{t('contact.message')} *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded border-2 border-cyan-500 focus:outline-none focus:border-teal-400 resize-none ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900 font-bold py-3 px-4 rounded hover:from-cyan-400 hover:to-teal-300 transition-all uppercase"
            >
              {t('contact.send')} ✉️
            </button>

            {submitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 p-3 rounded text-center font-semibold">
                ✓ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;