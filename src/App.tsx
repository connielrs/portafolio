import React, { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, User, Mail, Send, Menu, X, Linkedin, Github, Code, Eye, ExternalLink, Download, Loader2 } from 'lucide-react'; // Added Loader2 icon

// Objeto con todas las traducciones
const content = {
  es: {
    // Navbar
    navTitle: "Mi Portfolio",
    navHome: "Inicio",
    navAbout: "Sobre Mí",
    navProjects: "Proyectos",
    navContact: "Contacto",
    toggleDarkModeAria: "Cambiar tema oscuro/claro",
    toggleLanguage: "EN", 
    openMenuAria: "Abrir menú",
    closeMenuAria: "Cerrar menú",

    // Home Section
    homeWelcome: "Bienvenid@ a",
    homeTitle: "mi Portfolio Digital",
    homeSubtitle: "Soy Analista Programadora con una profunda pasión por la tecnología y el diseño creativo. Me especializo en la creación de aplicaciones web modernas y eficientes.",
    homeViewProjectsBtn: "Ver Proyectos",
    homeContactBtn: "Contáctame",
    homeDownloadCVBtn: "Ver CV", 

    // About Section
    aboutTitle: "Sobre Mí",
    aboutPara1: "Soy Constanza, Analista Programadora de 27 años, de Chile. Siempre me ha gustado crear y encontrar soluciones prácticas a los problemas, buscando simplificar las cosas y hacerlas más eficientes. Soy organizada, pero también me adapto con facilidad a cualquier situación. Me gusta entender el por qué detrás de las cosas y encontrar formas de hacer que funcionen.Los diseños limpios y funcionales me atraen, y el análisis me permite tomar decisiones claras y bien fundamentadas. Siempre estoy aprendiendo y buscando formas de mejorar en todo lo que hago.",
    aboutPara2: "", 
    aboutPara3: "", 
    aboutImageAlt: "Foto de perfil de Constanza Rivera",
    aboutImagePlaceholder: "Tu Foto Aquí",
    aboutDownloadCVBtn: "Ver mi CV", 

    // Projects Section
    projectsTitle: "Mis Proyectos",
    projectsIntro: "Aquí hay una selección de algunos proyectos en los que he trabajado. Cada uno representa un desafío único y una oportunidad de aprendizaje.",
    projectCardViewDemo: "Ver Demo",
    projectCardViewCode: "Ver Código",
    projectsViewMoreGithub: "Ver más en GitHub",
    projectImageError: "Error Cargando Imagen",


    // Contact Section
    contactTitle: "Contáctame",
    contactIntro: "¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? No dudes en enviarme un mensaje.",
    contactFormNameLabel: "Nombre",
    contactFormNamePlaceholder: "Tu Nombre",
    contactFormEmailLabel: "Email",
    contactFormEmailPlaceholder: "tu@email.com",
    contactFormMessageLabel: "Mensaje",
    contactFormMessagePlaceholder: "Escribe tu mensaje aquí...",
    contactFormSendBtn: "Enviar Mensaje",
    contactFormSendingBtn: "Enviando...", 
    contactFormErrorAllFields: "Por favor, completa todos los campos.",
    contactFormErrorInvalidEmail: "Por favor, introduce un email válido.",
    contactFormErrorApi: "Error al enviar el mensaje. Inténtalo de nuevo más tarde.", 
    contactFormSuccessTitle: "¡Gracias!",
    contactFormSuccessMessage: "Tu mensaje ha sido enviado. Me pondré en contacto contigo pronto.",

    // Footer
    footerRightsName: "Constanza Rivera",
    footerRightsReserved: "Todos los derechos reservados.",
    footerMadeWith: "Hecho con",


    // General
    imageUnavailable: "Imagen No Disponible",
  },
  en: {
    // Navbar
    navTitle: "My Portfolio",
    navHome: "Home",
    navAbout: "About Me",
    navProjects: "Projects",
    navContact: "Contact",
    toggleDarkModeAria: "Toggle dark/light mode",
    toggleLanguage: "ES", 
    openMenuAria: "Open menu",
    closeMenuAria: "Close menu",

    // Home Section
    homeWelcome: "Welcome to",
    homeTitle: "my Digital Portfolio",
    homeSubtitle: "I am a Programmer Analyst with a deep passion for technology and creative design. I specialize in creating modern and efficient web applications.",
    homeViewProjectsBtn: "View Projects",
    homeContactBtn: "Contact Me",
    homeDownloadCVBtn: "View CV", 

    // About Section
    aboutTitle: "About Me",
    aboutPara1: "I’m Constanza, a 27-year-old Analyst Programmer from Chile. I’ve always enjoyed creating and finding practical solutions to problems, aiming to simplify things and make them more efficient. I’m organized, but I also adapt easily to any situation. I like understanding the why behind things and finding ways to make them work. I’m drawn to clean and functional designs, and analysis allows me to make clear, well-informed decisions. I’m always learning and looking for ways to improve in everything I do.",
    aboutPara2: "", 
    aboutPara3: "", 
    aboutImageAlt: "Constanza Rivera's profile picture",
    aboutImagePlaceholder: "Your Photo Here",
    aboutDownloadCVBtn: "View My CV", 

    // Projects Section
    projectsTitle: "My Projects",
    projectsIntro: "Here is a selection of some projects I have worked on. Each represents a unique challenge and a learning opportunity.",
    projectCardViewDemo: "View Demo",
    projectCardViewCode: "View Code",
    projectsViewMoreGithub: "View more on GitHub",
    projectImageError: "Error Loading Image",

    // Contact Section
    contactTitle: "Contact Me",
    contactIntro: "Have a question, proposal, or just want to say hi? Feel free to send me a message.",
    contactFormNameLabel: "Name",
    contactFormNamePlaceholder: "Your Name",
    contactFormEmailLabel: "Email",
    contactFormEmailPlaceholder: "you@email.com",
    contactFormMessageLabel: "Message",
    contactFormMessagePlaceholder: "Write your message here...",
    contactFormSendBtn: "Send Message",
    contactFormSendingBtn: "Sending...", 
    contactFormErrorAllFields: "Please fill in all fields.",
    contactFormErrorInvalidEmail: "Please enter a valid email.",
    contactFormErrorApi: "Error sending message. Please try again later.", 
    contactFormSuccessTitle: "Thank You!",
    contactFormSuccessMessage: "Your message has been sent. I will get in touch with you soon.",

    // Footer
    footerRightsName: "Constanza Rivera",
    footerRightsReserved: "All rights reserved.",
    footerMadeWith: "Made with",
    
    // General
    imageUnavailable: "Image Not Available",
  }
};

// --- Datos de proyectos (sin cambios) ---
const projectsContent = {
  es: [
    {
      id: 1,
      title: 'Brainy – Plataforma de aprendizaje personalizada',
      description: 'Formé parte del equipo de desarrollo de una plataforma educativa que utiliza IA para personalizar el contenido según el estilo de aprendizaje del usuario. Me encargué de la planificación y ejecución del proyecto, implementando características como tarjetas visuales, cuestionarios y mapas mentales. Este proyecto me permitió explorar el uso de la IA en la educación, aprender sobre la personalización de experiencias de usuario y mejorar mis habilidades de desarrollo front-end y back-end.',
      imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=Brainy',
      tags: ['React', 'Node.js', 'Supabase', 'API OpenAI'],
      liveUrl: '#', 
      codeUrl: '#', 
    },
    {
      id: 2,
      title: 'App de Gestión de Tareas',
      description: 'Aplicación para organizar tareas diarias, establecer prioridades y colaborar con equipos.',
      imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=Task+Manager',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 3,
      title: 'Blog Personal con CMS',
      description: 'Un blog dinámico con un sistema de gestión de contenidos (CMS) para publicar y administrar artículos fácilmente.',
      imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Blog+CMS',
      tags: ['Next.js', 'GraphQL', 'Strapi'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ],
  en: [
    {
      id: 1,
      title: 'Brainy – Personalized Learning Platform',
      description: 'I was part of the development team for an educational platform that uses AI to personalize content based on the users learning style. I was in charge of planning and executing the project, implementing features such as visual flashcards, quizzes, and mind maps. This project allowed me to explore the use of AI in education, learn about user experience personalization, and strengthen my front-end and back-end development skills.',
      imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=Brainy',
      tags: ['React', 'Node.js', 'Supabase', 'OpenAI API'],
      liveUrl: '#', 
      codeUrl: '#', 
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Application to organize daily tasks, set priorities, and collaborate with teams.',
      imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=Task+Manager',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 3,
      title: 'Personal Blog with CMS',
      description: 'A dynamic blog with a content management system (CMS) to easily publish and manage articles.',
      imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Blog+CMS',
      tags: ['Next.js', 'GraphQL', 'Strapi'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ]
};


// --- Componente Section (sin cambios) ---
interface SectionProps {
  id: string;
  title: string; 
  children: React.ReactNode;
  className?: string;
  language: 'es' | 'en';
}
const Section: React.FC<SectionProps> = ({ id, title, children, className, language }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-10 min-h-screen flex flex-col justify-center ${className || ''}`}>
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 md:mb-12 text-center flex items-center justify-center">
        {id === 'about' && <User size={40} className="mr-3 text-sky-500" />}
        {id === 'projects' && <Briefcase size={40} className="mr-3 text-sky-500" />}
        {id === 'contact' && <Mail size={40} className="mr-3 text-sky-500" />}
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// --- Componente Navbar (sin cambios) ---
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (id: string) => void;
  language: 'es' | 'en';
  toggleLanguage: () => void;
  texts: typeof content.es; 
}
const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, scrollToSection, language, toggleLanguage, texts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', text: texts.navHome },
    { id: 'about', text: texts.navAbout },
    { id: 'projects', text: texts.navProjects },
    { id: 'contact', text: texts.navContact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? (darkMode ? 'bg-slate-800/90 shadow-lg backdrop-blur-md' : 'bg-white/90 shadow-lg backdrop-blur-md') : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold cursor-pointer hover:text-sky-500 transition-colors"
            >
              {texts.navTitle}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="px-3 py-2 rounded-md text-md font-medium hover:text-sky-500 transition-colors"
              >
                {link.text}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label={texts.toggleDarkModeAria}
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-md border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors text-sm font-medium"
              aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
            >
              {texts.toggleLanguage}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors mr-2"
              aria-label={texts.toggleDarkModeAria}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
             <button
              onClick={toggleLanguage}
              className="p-2 mr-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors text-xs"
              aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
            >
              {texts.toggleLanguage}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-label={isOpen ? texts.closeMenuAria : texts.openMenuAria}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden transition-all duration-300 ease-in-out ${darkMode ? 'bg-slate-800/95' : 'bg-white/95'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { 
                  e.preventDefault(); 
                  scrollToSection(link.id);
                  setIsOpen(false); 
                }}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-sky-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Componente ContactForm (Modificado para usar fetch) ---
interface ContactFormProps {
  darkMode: boolean;
  language: 'es' | 'en';
  texts: typeof content.es;
}
const ContactForm: React.FC<ContactFormProps> = ({ darkMode, language, texts }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle'); 
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') {
        setError('');
        setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); 

    if (!formData.name || !formData.email || !formData.message) {
      setError(texts.contactFormErrorAllFields);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError(texts.contactFormErrorInvalidEmail);
      return;
    }

    setStatus('loading'); 

    // Endpoint de ejemplo - ¡REEMPLAZA ESTO CON TU ENDPOINT REAL!
    // Puede ser de Formspree, tu API de Vercel (/api/send-email), etc.
    const FORM_ENDPOINT = "/api/send-email"; // O tu URL de Formspree, etc.

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
        setTimeout(() => setStatus('idle'), 5000); 
      } else {
        console.error("Error en la respuesta del servidor:", response);
        const errorData = await response.json().catch(() => ({})); // Intenta obtener datos del error
        setError(errorData.message || texts.contactFormErrorApi); // Usa mensaje del servidor si existe
        setStatus('error');
      }
    } catch (fetchError) {
      console.error("Error en fetch:", fetchError);
      setError(texts.contactFormErrorApi);
      setStatus('error');
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none ${
    darkMode ? 'bg-slate-700 border-slate-600 placeholder-slate-400 text-white' : 'bg-gray-100 border-gray-300 placeholder-gray-500 text-gray-900'
  }`;

  if (status === 'success') {
    return (
      <div className="text-center p-6 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
        <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">{texts.contactFormSuccessTitle}</h3>
        <p className="mt-2 text-green-600 dark:text-green-400">{texts.contactFormSuccessMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">{texts.contactFormNameLabel}</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder={texts.contactFormNamePlaceholder} className={inputClasses} disabled={status === 'loading'} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">{texts.contactFormEmailLabel}</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder={texts.contactFormEmailPlaceholder} className={inputClasses} disabled={status === 'loading'} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">{texts.contactFormMessageLabel}</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} placeholder={texts.contactFormMessagePlaceholder} className={`${inputClasses} resize-none`} disabled={status === 'loading'}></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'} 
        className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white transition-all duration-300 group ${
          status === 'loading' 
            ? 'bg-sky-400 cursor-not-allowed' 
            : 'bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
        }`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="mr-2 animate-spin" /> 
            {texts.contactFormSendingBtn}
          </>
        ) : (
          <>
            {texts.contactFormSendBtn}
            <Send size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

// --- Componente App (sin cambios significativos) ---
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [language, setLanguage] = useState<'es' | 'en'>(() => {
    const savedLang = localStorage.getItem('language') as 'es' | 'en';
    if (savedLang) return savedLang;
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language; 
  }, [language]);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);
  const toggleLanguage = () => setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const currentTexts = content[language];
  const currentProjects = projectsContent[language];
  
  const cvUrl = "https://drive.google.com/file/d/1GB0Dteiam8NYeVxglXOHpS3CcQjiDvnO/view?usp=sharing";

  // Estilos globales movidos a una etiqueta <style> normal
  const GlobalStyles = () => (
    <style>{`
      .animate-fade-in-down {
        animation: fadeInDown 0.8s ease-out forwards;
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      /* Scrollbar styles (limited browser support) */
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: ${darkMode ? '#1e293b' : '#f1f5f9'}; }
      ::-webkit-scrollbar-thumb { background: ${darkMode ? '#38bdf8' : '#0ea5e9'}; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: ${darkMode ? '#0ea5e9' : '#0284c7'};}
      html { scrollbar-width: thin; scrollbar-color: ${darkMode ? '#38bdf8 #1e293b' : '#0ea5e9 #f1f5f9'}; }
      
      /* Nota: Los estilos de .dark .prose-invert son manejados por Tailwind */
    `}</style>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${darkMode ? 'bg-slate-900 text-slate-200' : 'bg-gray-50 text-slate-800'} font-sans antialiased`}>
      <GlobalStyles /> {/* Renderizar los estilos globales */}
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        scrollToSection={scrollToSection} 
        language={language}
        toggleLanguage={toggleLanguage}
        texts={currentTexts}
      />

      <header id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
        <div className={`absolute inset-0 opacity-10 ${darkMode ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-700 via-transparent to-transparent' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 via-transparent to-transparent'}`}></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block animate-fade-in-down delay-100">{currentTexts.homeWelcome}</span>
            <span className={`block text-sky-500 dark:text-sky-400 animate-fade-in-down delay-300`}>{currentTexts.homeTitle}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-slate-600 dark:text-slate-400 animate-fade-in-up delay-500">
            {currentTexts.homeSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-700">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg hover:shadow-sky-500/50"
            >
              {currentTexts.homeViewProjectsBtn}
            </button>
            <a
              href={cvUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center justify-center px-8 py-3 border text-base font-medium rounded-lg transition-transform transform hover:scale-105 shadow-lg group ${darkMode ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 hover:shadow-teal-400/50' : 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white hover:shadow-teal-600/50'}`}
            >
              <Eye size={20} className="mr-2 transition-transform group-hover:animate-bounce" /> 
              {currentTexts.homeDownloadCVBtn}
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border text-base font-medium rounded-lg transition-transform transform hover:scale-105 shadow-lg ${darkMode ? 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 hover:shadow-sky-400/50' : 'border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white hover:shadow-sky-600/50'}`}
            >
              {currentTexts.homeContactBtn}
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-6 animate-fade-in-up delay-900">
            <a href="https://www.linkedin.com/in/constanza-rivera-6b9095364/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn Profile">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/connielrs" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors" aria-label="GitHub Profile">
              <Github size={28} />
            </a>
          </div>
        </div>
      </header>

      <Section id="about" title={currentTexts.aboutTitle} language={language}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"> 
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>{currentTexts.aboutPara1}</p>
            <div className="mt-8 text-center md:text-left">
                <a
                href={cvUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-colors shadow-md group ${darkMode ? 'border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white' : 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'}`}
                >
                <Eye size={20} className="mr-2 transition-transform group-hover:animate-bounce" /> 
                {currentTexts.aboutDownloadCVBtn}
                </a>
            </div>
          </div>
          <div className="flex justify-center items-center"> 
            <div 
              className={`relative group w-64 h-64 md:w-72 md:h-72 rounded-full p-1.5 overflow-hidden shadow-xl ${darkMode ? 'bg-gradient-to-br from-sky-500 to-teal-500' : 'bg-gradient-to-br from-sky-400 to-teal-400'}`}
            >
              <img 
                src={`https://placehold.co/500x500/ffffff/333333?text=${encodeURIComponent(currentTexts.aboutImagePlaceholder)}&font=roboto`} 
                alt={currentTexts.aboutImageAlt} 
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                onError={(e) => (e.currentTarget.src = `https://placehold.co/500x500/9ca3af/ffffff?text=${encodeURIComponent(currentTexts.imageUnavailable)}`)}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" title={currentTexts.projectsTitle} className={darkMode ? 'bg-slate-800' : 'bg-gray-100'} language={language}>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          {currentTexts.projectsIntro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group min-h-[500px] ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'}`} 
            >
              <div className="relative overflow-hidden h-56 flex-shrink-0"> 
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/9ca3af/ffffff?text=${encodeURIComponent(currentTexts.projectImageError)}`)}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow"> 
                <h3 className={`text-2xl font-semibold mb-3 ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow min-h-[60px]"> 
                    {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 ${darkMode ? 'bg-sky-700 text-sky-200' : 'bg-sky-100 text-sky-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${darkMode ? 'bg-sky-600 hover:bg-sky-500 text-white' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}
                    >
                      <Eye size={16} className="mr-2" /> {currentTexts.projectCardViewDemo}
                    </a>
                  )}
                  {project.codeUrl && project.codeUrl !== '#' && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${darkMode ? 'border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white' : 'border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white'}`}
                    >
                      <Code size={16} className="mr-2" /> {currentTexts.projectCardViewCode}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
            <a 
                href="https://github.com/connielrs?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg transition-colors shadow-md group ${darkMode ? 'text-sky-300 border-sky-700 hover:bg-sky-700 hover:text-white' : 'text-sky-700 border-sky-200 hover:bg-sky-100'}`}
            >
                {currentTexts.projectsViewMoreGithub} <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </Section>

      <Section id="contact" title={currentTexts.contactTitle} language={language}>
        <p className="text-center text-lg mb-10 max-w-xl mx-auto text-slate-600 dark:text-slate-400">
          {currentTexts.contactIntro}
        </p>
        <div className={`max-w-xl mx-auto p-6 sm:p-8 rounded-xl shadow-xl ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <ContactForm darkMode={darkMode} language={language} texts={currentTexts} />
        </div>
      </Section>

      <footer className={`py-8 text-center ${darkMode ? 'bg-slate-950 text-slate-400' : 'bg-gray-100 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} {currentTexts.footerRightsName}. {currentTexts.footerRightsReserved}</p>
            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/in/constanza-rivera-6b9095364/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn Profile"><Linkedin size={22} /></a>
              <a href="https://github.com/connielrs" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors" aria-label="GitHub Profile"><Github size={22} /></a>
            </div>
          </div>
           <p className="text-xs mt-4">
            {currentTexts.footerMadeWith} <span className="text-red-500">&hearts;</span> React + Tailwind CSS.
          </p>
        </div>
      </footer>
      
    </div>
  );
};

export default App;
