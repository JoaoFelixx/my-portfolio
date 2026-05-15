import { LucideIcon } from 'lucide-react';

export type Theme = 'dark' | 'light';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
