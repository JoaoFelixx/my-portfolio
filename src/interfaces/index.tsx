import React from 'react';

interface Settings {
  theme: string;
  sideNavIsOpen: boolean;
  language: string;
  dispatch?: React.Dispatch<Partial<this>>;
}

interface Provider {
  children: React.ReactNode;
}

export type { Provider, Settings }