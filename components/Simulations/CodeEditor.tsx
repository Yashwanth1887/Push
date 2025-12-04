import React, { useEffect, useState } from 'react';

interface CodeEditorProps {
  code: string;
  activeLine: number;
  language?: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, activeLine, language = 'javascript' }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  
  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= code.length) {
        setDisplayedCode(code.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Typing speed
    
    return () => clearInterval(interval);
  }, [code]);

  const lines = displayedCode.split('\n');

  return (
    <div className="font-mono text-sm leading-6">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-gray-900/50 text-xs text-gray-400">
        <span>script.{language === 'javascript' ? 'js' : 'py'}</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          Running
        </span>
      </div>
      <div className="p-4 overflow-hidden relative">
        {lines.map((line, i) => (
          <div key={i} className={`relative flex ${i + 1 === activeLine ? 'bg-indigo-900/30' : ''}`}>
            <span className="select-none w-8 text-gray-600 text-right mr-4">{i + 1}</span>
            <span 
              className={`
                ${line.includes('function') || line.includes('const') || line.includes('def') ? 'text-pink-400' : ''}
                ${line.includes('return') || line.includes('if') ? 'text-indigo-400' : ''}
                ${line.includes('(') || line.includes(')') ? 'text-yellow-200' : 'text-gray-300'}
              `}
            >
              {line}
            </span>
            {i + 1 === activeLine && (
              <div className="absolute right-0 top-0 bottom-0 flex items-center pr-2">
                <span className="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-2 py-0.5 rounded animate-pulse">
                  ← AI IS HERE
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};