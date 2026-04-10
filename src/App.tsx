/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  Code2, 
  Layout, 
  ShieldCheck, 
  Database, 
  Smartphone, 
  ChevronRight, 
  Menu, 
  X,
  Moon,
  Sun,
  ArrowUp,
  GraduationCap,
  Briefcase,
  Layers,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

// --- Types ---
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'Programming' | 'Web' | 'Mobile' | 'Backend' | 'Tools';
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 'musify',
    title: 'Musify',
    description: 'A responsive web-based music streaming application with reusable React components and Firebase integration.',
    tech: ['HTML', 'CSS', 'React JS', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 'smartqcare',
    title: 'SMARTQCARE',
    description: 'Real-time healthcare queue management system with an integrated chatbot for patient updates and improved waiting-time handling.',
    tech: ['React JS', 'JavaScript', 'MySQL', 'Chatbot'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 'sliding-puzzle',
    title: 'Sliding Puzzle',
    description: 'A Flutter-based brain game featuring multiple difficulty levels, move tracking, and smooth offline gameplay.',
    tech: ['Flutter', 'Dart'],
    image: 'https://i.postimg.cc/G2YxJ43T/sliding.jpg',
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 'exp3',
    role: 'Web Development Intern',
    company: 'ApexPlanet Software Pvt. Ltd.',
    period: 'Feb 11, 2026 – Mar 27, 2026',
    description: [
      'Completed a virtual internship focusing on Web Development with HTML, CSS, and JavaScript.',
      'Gained hands-on experience in building responsive and interactive web components.',
      'Applied core web technologies to develop practical software solutions.'
    ]
  },
  {
    id: 'exp1',
    role: 'Web Application Development Intern',
    company: 'Robowaves (Unit of Test Yantra Software Solutions)',
    period: 'Feb 2025 – Apr 2025',
    description: [
      'Developed responsive web applications using HTML, CSS, JavaScript, and React JS.',
      'Integrated Firebase for backend services and data handling.',
      'Built Musify, a web-based music application.'
    ]
  },
  {
    id: 'exp2',
    role: 'Cybersecurity Intern (Online)',
    company: 'Retech Solutions',
    period: 'Jun 16, 2025 – Jun 30, 2025',
    description: [
      'Learned core cybersecurity concepts and threat awareness.',
      'Studied system security and data protection practices.'
    ]
  }
];

const SKILLS: Skill[] = [
  { name: 'Java', icon: <Code2 size={20} />, category: 'Programming' },
  { name: 'JavaScript', icon: <Code2 size={20} />, category: 'Programming' },
  { name: 'HTML5', icon: <Layout size={20} />, category: 'Web' },
  { name: 'CSS3', icon: <Layout size={20} />, category: 'Web' },
  { name: 'React JS', icon: <Layers size={20} />, category: 'Web' },
  { name: 'Flutter', icon: <Smartphone size={20} />, category: 'Mobile' },
  { name: 'Firebase', icon: <Database size={20} />, category: 'Backend' },
  { name: 'SQL', icon: <Database size={20} />, category: 'Backend' },
  { name: 'MySQL', icon: <Database size={20} />, category: 'Backend' },
  { name: 'VS Code', icon: <Code2 size={20} />, category: 'Tools' },
];

// --- Components ---

const Navbar = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white"
        >
          TANSHIKA J S<span className="text-teal-500">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <button 
            onClick={() => setIsDark(prev => !prev)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsDark(prev => !prev)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-teal-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 rounded-full">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-teal-500">Tanshika J S</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8">
            B.Tech IT Student | Web Developer | React Enthusiast | Cybersecurity Learner
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mb-10 max-w-lg leading-relaxed">
            Motivated Information Technology student seeking an entry-level IT role to apply skills in web development, React, and cybersecurity, while continuously learning and contributing to organizational growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/20">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 group"
          >
            {/* Subtle Outer Glow */}
            <div className="absolute inset-0 bg-teal-500/5 rounded-[2rem] blur-2xl group-hover:bg-teal-500/10 transition-colors duration-500"></div>
            
            {/* Main Image Container */}
            <div className="relative h-full w-full bg-white dark:bg-slate-900 rounded-[2rem] p-3 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:border-teal-500/30 group-hover:shadow-teal-500/10">
              <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50">
                <img 
                  src="https://i.postimg.cc/HWMNpzXG/Gemini-Generated-Image-p5gp37p5gp37p5gp.png" 
                  alt="Tanshika J S" 
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Minimalist Accents */}
            <div className="absolute top-0 right-0 -mr-2 -mt-2 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </motion.div>
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-100 dark:bg-teal-900/50 rounded-lg text-teal-600 dark:text-teal-400">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Specializing in</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">React & Web</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-500 mb-4">About Me</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Designing Solutions, Not Just Visuals</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a passionate B.Tech Information Technology student at Panimalar Engineering College, graduating in 2027. My journey in tech is driven by a deep interest in building intuitive web applications and exploring the critical field of cybersecurity.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I believe in the power of clean code and user-centered design. Whether it's developing a real-time queue system or a music app, my goal is always to create seamless digital experiences that solve real-world problems.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">B.Tech in Information Technology</h4>
                  <p className="text-sm text-slate-500">Panimalar Engineering College (2023 - 2027)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Cybersecurity Enthusiast</h4>
                  <p className="text-sm text-slate-500">Focusing on system security and data protection.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Quick Learner', desc: 'Adapting to new tech fast' },
              { label: 'Problem Solver', desc: 'Analytical mindset' },
              { label: 'UI/UX Focused', desc: 'Clean & usable designs' },
              { label: 'Team Player', desc: 'Collaborative spirit' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.label}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = ['Programming', 'Web', 'Mobile', 'Backend', 'Tools'];
  
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-teal-500 mb-4">My Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Technical Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                {cat}
              </h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 transition-colors"
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-teal-500 mb-4">Journey</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Internship Experience</h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-teal-500/30"
            >
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="text-sm font-semibold text-teal-500 mb-2 block">{exp.period}</span>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h4>
                <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-500 dark:text-slate-500">
                      <ChevronRight size={18} className="text-teal-500 mt-1 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-teal-500 mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h4>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Building responsive, high-performance websites and React-based applications with Firebase integration.',
      icon: <Code2 size={32} />
    },
    {
      title: 'UI/UX Design',
      desc: 'Creating clean, modern, and user-centered interfaces with a focus on minimalism and usability.',
      icon: <Layout size={32} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-400 mb-4">Services</h2>
            <h3 className="text-4xl font-bold mb-6">Expertise Service! Let's check it out</h3>
            <p className="text-slate-400 text-lg mb-8">
              I provide specialized services in modern web technologies and design principles to help businesses grow their digital presence.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-teal-400 font-bold hover:gap-4 transition-all">
              Get in touch <ChevronRight size={20} />
            </a>
          </div>
          <div className="grid gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-slate-800 rounded-3xl border border-slate-700 hover:border-teal-500/50 transition-colors group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
                <p className="text-slate-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_1af4bzh',
        'template_vasciy8',
        formRef.current,
        '210IbNC6Em2RBxpn_'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-500 mb-4">Contact</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Got A Project? Let's Talk</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Email Me</p>
                  <a href="mailto:jstanshika1402@gmail.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-teal-500 transition-colors">
                    jstanshika1402@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Call Me</p>
                  <a href="tel:7305274747" className="text-lg font-bold text-slate-900 dark:text-white hover:text-teal-500 transition-colors">
                    +91 73052 74747
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/tanshika225" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-teal-500 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tanshika-j-s-241a85296/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-teal-500 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                  <input name="from_name" type="text" required className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                  <input name="from_email" type="email" required className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                <input name="subject" type="text" required className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea name="message" rows={4} required className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="Your message here..."></textarea>
              </div>
              
              {status === 'success' && (
                <p className="text-teal-500 font-bold text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-bold text-sm">Failed to send message. Please try again.</p>
              )}

              <button 
                disabled={isSending}
                className={`w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSending ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
          TANSHIKA J S<span className="text-teal-500">.</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Tanshika J S. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#home" className="text-sm font-medium text-slate-500 hover:text-teal-500 transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-slate-500 hover:text-teal-500 transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-teal-500 transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-teal-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-teal-500 text-white rounded-full shadow-2xl z-50 hover:bg-teal-600 transition-all"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 font-sans selection:bg-teal-500 selection:text-white">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
