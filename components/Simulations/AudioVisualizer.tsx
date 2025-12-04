import React, { useEffect, useState } from 'react';

export const AudioVisualizer = ({ isActive }: { isActive: boolean }) => {
  const [bars, setBars] = useState<number[]>(new Array(12).fill(10));

  useEffect(() => {
    if (!isActive) {
      setBars(new Array(12).fill(5));
      return;
    }

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 40) + 10));
    }, 100);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="flex items-center gap-1 h-12 px-4 bg-gray-900/80 rounded-full border border-gray-800">
      <div className={`w-2 h-2 rounded-full mr-2 ${isActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
      <span className="text-xs text-gray-500 mr-2 font-mono">VAK_LIVE_API</span>
      <div className="flex items-center gap-[2px] h-8">
        {bars.map((height, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-full transition-all duration-100 ease-in-out"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
};