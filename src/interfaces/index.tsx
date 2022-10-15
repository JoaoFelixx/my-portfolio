import React from 'react';
import { IconType } from 'react-icons';

export interface Action {
  type: 'change-settings';
  payload: Partial<Omit<Settings, 'dispatch'>>;
}

export interface Settings {
  theme: string;
  sideNavIsOpen: boolean;
  language: string;
  dispatch?: React.Dispatch<Action>;
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