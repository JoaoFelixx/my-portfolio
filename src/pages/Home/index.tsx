import { motion } from 'framer-motion';
import {
  type LucideProps,

  Code2,
  Braces,
  Layout,
  Sparkles,
  Download,
  Terminal,
  Database,
  ExternalLink,
} from 'lucide-react';

import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

import { projects } from '@/constants/projects';

import * as Tooltip from '@radix-ui/react-tooltip';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};


interface SkillIcon {
  name: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  skills: string[];
}

interface Redirect {
  name: string;
  path: string;
}


export function HomePage() {

  const skillIcons: SkillIcon[] = [
    { name: 'Frontend', icon: Layout, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { name: 'Backend', icon: Terminal, skills: ['Node.js', 'NestJS', 'Express', 'Prisma'] },
    { name: 'Database', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
    { name: 'Tools', icon: Braces, skills: ['Git', 'Docker', 'Jest', 'Cypress'] }
  ];

  const redirects: Redirect[] = [
    { name: "Home", path: "home" },
    { name: "Sobre", path: "about" },
    { name: "Projetos", path: "projects" },
    { name: "Contato", path: "contact" },
  ]


  return (
    <Tooltip.Provider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth">
        {/* Background Ambient Glow */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-accent p-px">
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center font-bold text-xl group-hover:bg-transparent transition-colors">
                  J
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight hidden sm:block">JOÃO FÉLIX</span>
            </motion.div>

            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
                {redirects.map((item) => (
                  <a key={item.path} href={`#${item.path}`} className="hover:text-primary transition-colors">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          {/* Hero Section */}
          <section id="home" className="py-20 flex flex-col items-center text-center">
            <motion.div
              {...fadeIn}
              className="mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2"
            >
              <Sparkles size={14} />
              Full Stack Developer & Tech Leader
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              Building the <br />
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-300% animate-gradient-x bg-clip-text text-transparent">
                Future of Web.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              Sou o João Félix. Lidero equipes e desenvolvo aplicações escaláveis de alta performance com foco em experiência do usuário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  <Code2 size={20} />
                  Ver Projetos
                </span>
              </a>
              <a
                href="/João Félix.pdf"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 font-bold transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-32 flex flex-col items-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center md:justify-start">
                <span className="w-8 h-1 bg-primary rounded-full" />
                Sobre mim
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed text-center md:text-left">
                Atualmente lidero a equipe de front-end na My Soluções Digitais. Com mais de 6 anos de experiência,
                sou especialista em ecossistemas React e Node.js. Minha paixão é criar interfaces que não apenas funcionam,
                mas encantam o usuário final e resolvem problemas reais.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skillIcons.map((group) => (
                  <div key={group.name} className="text-center md:text-left">
                    <div className="flex items-center gap-2 mb-4 text-foreground font-bold justify-center md:justify-start">
                      <group.icon size={18} className="text-primary" />
                      {group.name}
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {group.skills.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-32">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-4 tracking-tight">Projetos em Destaque</h2>
                <p className="text-muted-foreground">Uma seleção dos meus melhores trabalhos recentes.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-video rounded-3xl overflow-hidden bg-secondary mb-6 border border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" className="hover:text-foreground text-muted-foreground"><Github size={20} /></a>
                      <a href={project.demo} target="_blank" className="hover:text-foreground text-muted-foreground"><ExternalLink size={20} /></a>
                    </div>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32">
            <div className="relative rounded-[40px] bg-white/2 p-12 md:p-24 overflow-hidden text-center border border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Vamos bater um papo?
                </h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
                  Sinta-se à vontade para entrar em contato se quiser conversar sobre tecnologia,
                  compartilhar ideias ou apenas dizer um olá!
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="mailto:felixxdeveloper@gmail.com"
                    className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                  >
                    Mandar E-mail
                  </a>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: 'https://github.com/joaofelixx' },
                      { icon: Linkedin, href: 'https://linkedin.com/in/felix-devweb' },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 hover:text-primary transition-all border border-white/5"
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="py-20 border-t border-white/5 bg-black/20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 text-muted-foreground text-sm font-medium">
            <div>© {new Date().getFullYear()} João Félix. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </Tooltip.Provider>
  );
}