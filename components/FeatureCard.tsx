import React from 'react';
import { FeatureCardProps } from '../types';

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/60">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-indigo-500/50">
          <div className="text-indigo-400 group-hover:text-pink-400 transition-colors">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 transition-all">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};