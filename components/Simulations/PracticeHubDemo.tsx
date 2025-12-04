import React, { useState, useEffect } from 'react';
import { Terminal, Play, Cpu, PenTool } from 'lucide-react';

export const PracticeHubDemo = () => {
  const [whiteboardText, setWhiteboardText] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'THINKING' | 'SOLVED'>('IDLE');

  const FULL_TEXT = `# Invert Binary Tree
  
> Goal: Swap left and right children for every node.

**Plan:**
1. Check if node is empty (Base case).
2. Swap the left and right child.
3. Repeat for left side.
4. Repeat for right side.
`;

  useEffect(() => {
    let active = true;
    const animate = async () => {
        if (!active) return;
        setWhiteboardText('');
        setStatus('THINKING');
        
        // Typing simulation
        for (let i = 0; i <= FULL_TEXT.length; i++) {
            if (!active) break;
            setWhiteboardText(FULL_TEXT.slice(0, i));
            await new Promise(r => setTimeout(r, Math.random() * 30 + 20));
        }
        
        setStatus('SOLVED');
        await new Promise(r => setTimeout(r, 4000));
        if (active) animate();
    };
    
    animate();
    return () => { active = false; };
  }, []);

  return (
    <div className="w-full h-[450px] bg-gray-950 rounded-xl border border-gray-800 shadow-2xl flex flex-col overflow-hidden text-sm">
        {/* IDE Header */}
        <div className="h-10 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
                <span className="font-bold text-gray-200">Problem: Invert Binary Tree</span>
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs border border-green-500/20">Easy</span>
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded text-xs transition-colors">
                <Play size={12} fill="currentColor" /> Run Code
            </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
            {/* Left Pane: Description */}
            <div className="w-1/3 border-r border-gray-800 p-6 bg-gray-950/50">
                <h3 className="text-gray-400 font-bold mb-4">Task</h3>
                <div className="space-y-2 text-gray-500 text-xs leading-5">
                    <p>Invert the binary tree and return its root.</p>
                    <div className="mt-4 p-3 bg-gray-900 rounded border border-gray-800 font-mono text-gray-300">
                        Input: root = [4,2,7]<br/>
                        Output: [4,7,2]
                    </div>
                </div>
            </div>

            {/* Middle Pane: Whiteboard (AI) */}
            <div className="w-1/3 border-r border-gray-800 bg-[#080c16] relative flex flex-col">
                 <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-3 bg-gray-900/40 border-b border-gray-800/50">
                    <span className="text-xs text-pink-400 flex items-center gap-2">
                        <PenTool size={10} /> AI Whiteboard
                    </span>
                 </div>
                 <div className="p-6 mt-6 font-mono text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {whiteboardText}
                    <span className="inline-block w-2 h-4 bg-pink-500 align-middle ml-1 animate-pulse"></span>
                 </div>
            </div>

            {/* Right Pane: Code Area (Skeleton) */}
            <div className="w-1/3 bg-gray-900/30 p-4 font-mono text-xs">
                <div className="text-gray-500 mb-2">// Solution</div>
                <div className="text-indigo-400">class <span className="text-yellow-200">Solution</span>:</div>
                <div className="pl-4 text-indigo-300">def <span className="text-yellow-200">invertTree</span>(self, root):</div>
                <div className="pl-8 text-gray-500"># AI is watching...</div>
                
                {status === 'SOLVED' && (
                    <div className="mt-8 p-3 rounded bg-green-500/10 border border-green-500/30 text-green-400 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="flex items-center gap-2 mb-1 font-bold">
                            <Terminal size={12} /> Tests Passed
                        </div>
                        <div className="h-1 w-full bg-green-900 rounded overflow-hidden">
                            <div className="h-full bg-green-500 w-[100%]"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Floating status */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md ${
                status === 'THINKING' 
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' 
                : 'bg-gray-800/50 border-gray-700 text-gray-400'
            }`}>
                <Cpu size={14} className={status === 'THINKING' ? 'animate-spin' : ''} />
                <span className="text-xs font-bold tracking-wide">{status}</span>
            </div>
        </div>
    </div>
  );
};