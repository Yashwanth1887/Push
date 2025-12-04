import React from 'react';

interface DiagramCanvasProps {
  activeNode: string | null;
}

export const DiagramCanvas: React.FC<DiagramCanvasProps> = ({ activeNode }) => {
  // Simple Tree Structure Simulation
  const nodes = [
    { id: 'root', x: 200, y: 50, label: 'Main', type: 'circle' },
    { id: 'sub1', x: 100, y: 150, label: 'Process A', type: 'rect' },
    { id: 'sub2', x: 300, y: 150, label: 'Process B', type: 'rect' },
    { id: 'leaf1', x: 50, y: 250, label: 'Start', type: 'pill' },
    { id: 'leaf2', x: 150, y: 250, label: 'End', type: 'pill' },
    { id: 'leaf3', x: 300, y: 250, label: 'Recurse', type: 'diamond' },
  ];

  const edges = [
    { from: 'root', to: 'sub1' },
    { from: 'root', to: 'sub2' },
    { from: 'sub1', to: 'leaf1' },
    { from: 'sub1', to: 'leaf2' },
    { from: 'sub2', to: 'leaf3' },
  ];

  return (
    <div className="relative w-full h-full bg-[#080c16] flex items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)', 
               backgroundSize: '20px 20px' 
             }}>
        </div>

      <svg className="w-full h-full" viewBox="0 0 400 300">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4b5563" />
          </marker>
        </defs>

        {/* Edges */}
        {edges.map((edge, idx) => {
          const start = nodes.find(n => n.id === edge.from)!;
          const end = nodes.find(n => n.id === edge.to)!;
          return (
            <line
              key={idx}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#374151"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              className="transition-all duration-500"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g key={node.id} className="transition-all duration-500 ease-in-out cursor-pointer group">
              {node.type === 'circle' && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="25"
                  className={`${isActive ? 'fill-indigo-500/20 stroke-indigo-400' : 'fill-gray-900 stroke-gray-700'} stroke-2 transition-colors duration-300`}
                />
              )}
              {node.type === 'rect' && (
                <rect
                  x={node.x - 30}
                  y={node.y - 15}
                  width="60"
                  height="30"
                  rx="4"
                  className={`${isActive ? 'fill-pink-500/20 stroke-pink-400' : 'fill-gray-900 stroke-gray-700'} stroke-2 transition-colors duration-300`}
                />
              )}
              {node.type === 'pill' && (
                <rect
                  x={node.x - 25}
                  y={node.y - 12}
                  width="50"
                  height="24"
                  rx="12"
                  className={`${isActive ? 'fill-cyan-500/20 stroke-cyan-400' : 'fill-gray-900 stroke-gray-700'} stroke-2 transition-colors duration-300`}
                />
              )}
              {node.type === 'diamond' && (
                 <polygon
                 points={`${node.x},${node.y-20} ${node.x+30},${node.y} ${node.x},${node.y+20} ${node.x-30},${node.y}`}
                 className={`${isActive ? 'fill-yellow-500/20 stroke-yellow-400' : 'fill-gray-900 stroke-gray-700'} stroke-2 transition-colors duration-300`}
               />
              )}
              
              <text
                x={node.x}
                y={node.y}
                dy=".3em"
                textAnchor="middle"
                className={`text-[8px] font-mono pointer-events-none fill-gray-200`}
              >
                {node.label}
              </text>
              
              {/* Highlight Ring */}
              {isActive && (
                <circle cx={node.x} cy={node.y} r="35" className="fill-none stroke-white/20 stroke-1 animate-ping" />
              )}
            </g>
          );
        })}
      </svg>

       {/* Label for visualizer type */}
       <div className="absolute top-2 left-2 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-[10px] text-gray-400 font-mono">
          MODE: MERMAID_FLOWCHART
      </div>
    </div>
  );
};