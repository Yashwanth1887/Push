import React from 'react';

export interface SimulationStep {
  text?: string;
  activeLine?: number;
  activeNode?: string;
  cursorPos?: { x: number; y: number };
  audioLevel?: number;
  action?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}