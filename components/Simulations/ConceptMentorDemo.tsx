import React, { useState, useEffect } from 'react';
import { CodeEditor } from './CodeEditor';
import { DiagramCanvas } from './DiagramCanvas';
import { AudioVisualizer } from './AudioVisualizer';
import { MousePointer2 } from 'lucide-react';

const DEMO_CODE = `function processNode(node) {
  if (!node) return;
  
  // Show logic
  visualize(node);
  
  if (node.hasChildren) {
    processNode(node.left);
    processNode(node.right);
  }
}`;

export const ConceptMentorDemo = () => {
  const [activeLine, setActiveLine] = useState(0);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [aiSpeaking, setAiSpeaking] = useState(false);

  useEffect(() => {
    // Simulation Loop
    const sequence = async () => {
      // Step 1: Start
      setAiSpeaking(true);
      setCursorPos({ x: 80, y: 20 });
      await new Promise(r => setTimeout(r, 1000));

      // Step 2: Code execution line 4 (Visualize)
      setActiveLine(4);
      setCursorPos({ x: 30, y: 40 }); // Move to code
      await new Promise(r => setTimeout(r, 1500));
      
      // Step 3: Highlight Diagram Root
      setActiveLine(5);
      setCursorPos({ x: 70, y: 30 }); // Move to diagram
      setActiveNode('root');
      await new Promise(r => setTimeout(r, 2000));
      
      // Step 4: Traverse Left
      setActiveLine(7);
      setCursorPos({ x: 30, y: 60 }); // Back to code
      await new Promise(r => setTimeout(r, 1000));
      
      setCursorPos({ x: 55, y: 50 }); // Diagram Left
      setActiveNode('sub1');
      await new Promise(r => setTimeout(r, 2000));
      
      // Step 5: Traverse Right
      setActiveLine(8);
      setCursorPos({ x: 30, y: 70 });
      await new Promise(r => setTimeout(r, 1000));

      setCursorPos({ x: 85, y: 50 }); // Diagram Right
      setActiveNode('sub2');
      await new Promise(r => setTimeout(r, 2000));

      // Reset
      setAiSpeaking(false);
      setActiveLine(0);
      setActiveNode(null);
    };

    const interval = setInterval(sequence, 12000);
    sequence();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[450px] bg-gray-950 rounded-xl border border-gray-800 shadow-2xl flex flex-col overflow-hidden relative group">
      {/* Window Header */}
      <div className="h-8 bg-gray-900 flex items-center px-4 gap-2 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        <div className="ml-4 text-xs text-gray-500 font-mono flex items-center gap-2">
            <span className="text-indigo-400">vak_live</span> / <span>concept_mentor</span>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="flex-1 flex relative">
        {/* Left: Diagram */}
        <div className="w-1/2 border-r border-gray-800 relative">
          <DiagramCanvas activeNode={activeNode} />
          
          {/* AI Cursor Layer */}
          <div 
            className="absolute z-50 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ 
                left: `${cursorPos.x}%`, 
                top: `${cursorPos.y}%`,
                opacity: 0.8
            }}
          >
             <div className="relative">
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-50"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <div className="absolute top-3 left-3 bg-gray-900/90 text-red-400 text-[10px] px-2 py-0.5 rounded border border-red-500/30 whitespace-nowrap">
                    AI Cursor
                </div>
             </div>
          </div>
        </div>

        {/* Right: Code */}
        <div className="w-1/2 bg-[#0d1117]">
          <CodeEditor code={DEMO_CODE} activeLine={activeLine} />
        </div>
      </div>

      {/* Floating Control Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass-panel px-6 py-2 rounded-2xl flex items-center gap-6 shadow-2xl z-40">
        <AudioVisualizer isActive={aiSpeaking} />
        <div className="h-6 w-px bg-gray-700"></div>
        <div className="flex gap-4 text-gray-400">
            <button className="hover:text-white transition-colors"><MousePointer2 size={16} /></button>
            <div className="text-xs font-mono text-indigo-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                LIVE_SESSION
            </div>
        </div>
      </div>
    </div>
  );
};