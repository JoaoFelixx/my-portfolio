import React from 'react';
import { IconType } from 'react-icons';

export interface Settings {
  theme: string;
  sideNavIsOpen: boolean;
  language: string;
  dispatch?: React.Dispatch<Partial<Omit<this, 'dispatch'>>>;
}

export interface Provider {
  children: React.ReactNode;
}

export type SkillsCategory = 'front-end' | 'back-end' | 'DBs' | 'testing' | 'tools';

export interface Skills {
  skills: {
    name: string;
    color: string;
    Icon: IconType;
    category: SkillsCategory;
    description: string;
  }[];
}