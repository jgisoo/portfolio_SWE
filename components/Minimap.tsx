import React from 'react';
import { NodeData, Position } from '../types';

interface MinimapProps {
  nodes: NodeData[];
  currentPos: Position;
  onNavigate: (pos: Position) => void;
}

export const Minimap: React.FC<MinimapProps> = ({ nodes, currentPos, onNavigate }) => {
  return (
    <div className="fixed top-6 right-6 z-40 glass-panel p-2 rounded-lg hidden md:block border-2 border-white/5">
      <div className="flex justify-between items-center px-2 mb-2">
        <div className="text-[10px] font-mono text-factory-cyan uppercase tracking-wider">Floor Scanner</div>
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
      </div>
      <div className="relative w-40 h-40 bg-[#050505] rounded border border-white/10 overflow-hidden">
        {/* Radar Grid */}
        <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-factory-cyan/20"></div>
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-factory-cyan/20"></div>
        
        {/* Scanning Line Animation */}
        <div className="absolute inset-0 border-b border-factory-cyan/30 animate-[scan_2s_linear_infinite] origin-top bg-gradient-to-b from-transparent to-factory-cyan/5"></div>

        <style>{`
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>

        {/* Nodes */}
        {nodes.map(node => {
            const xPct = 50 + (node.position.x / 2500) * 100;
            const yPct = 50 + (node.position.y / 2500) * 100;
            
            let color = "bg-gray-500";
            if (node.type === 'hero') color = "bg-white shadow-[0_0_10px_white]";
            if (node.type === 'research') color = "bg-purple-500";
            if (node.type === 'projects') color = "bg-green-500";
            if (node.type === 'experience') color = "bg-orange-500";
            if (node.type === 'about') color = "bg-blue-500";

            return (
                <button
                    key={node.id}
                    onClick={() => onNavigate({ x: -node.position.x, y: -node.position.y })}
                    style={{ left: `${xPct}%`, top: `${yPct}%` }}
                    className={`absolute w-1.5 h-1.5 rounded-sm ${color} transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer z-10`}
                    title={node.title}
                />
            );
        })}

        {/* Viewport Indicator */}
        <div 
            style={{ 
                left: `${50 + (-currentPos.x / 2500) * 100}%`, 
                top: `${50 + (-currentPos.y / 2500) * 100}%` 
            }}
            className="absolute w-10 h-8 border border-factory-yellow rounded-sm transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-100 z-20 shadow-[0_0_5px_rgba(250,204,21,0.5)]"
        ></div>
      </div>
      <div className="mt-2 text-[9px] text-gray-500 font-mono text-center flex justify-between px-1">
        <span>X: {Math.round(-currentPos.x)}</span>
        <span>Y: {Math.round(-currentPos.y)}</span>
      </div>
    </div>
  );
};