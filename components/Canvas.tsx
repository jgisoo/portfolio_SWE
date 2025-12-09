import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Node } from './Node';
import { NodeData, Position } from '../types';

interface CanvasProps {
  nodes: NodeData[];
  cameraPos: Position;
  setCameraPos: (pos: Position) => void;
  scale: number;
  setScale: (s: number) => void;
}

export const Canvas: React.FC<CanvasProps> = ({ nodes, cameraPos, setCameraPos, scale, setScale }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState<Position>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setLastMousePos({ x: clientX, y: clientY });
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
    
    const dx = clientX - lastMousePos.x;
    const dy = clientY - lastMousePos.y;
    
    setCameraPos({
      x: cameraPos.x + dx,
      y: cameraPos.y + dy
    });
    
    setLastMousePos({ x: clientX, y: clientY });
  }, [isDragging, lastMousePos, cameraPos, setCameraPos]);

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'default';
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newScale = scale - e.deltaY * 0.001;
      setScale(Math.min(Math.max(newScale, 0.3), 1.8)); // Allow slightly more zoom for details
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scale, setScale]);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const renderConveyorBelts = () => {
    const centerNode = nodes.find(n => n.type === 'hero');
    if (!centerNode) return null;

    return (
      <svg className="absolute top-0 left-0 overflow-visible pointer-events-none">
        {nodes.filter(n => n.id !== 'hero').map(node => (
          <g key={node.id}>
             {/* Base Rail */}
            <path
              d={`M${centerNode.position.x},${centerNode.position.y} L${node.position.x},${node.position.y}`}
              stroke="#1f2937"
              strokeWidth="12"
              fill="none"
            />
            {/* Animated Warning Stripe / Energy Flow */}
             <path
              d={`M${centerNode.position.x},${centerNode.position.y} L${node.position.x},${node.position.y}`}
              stroke="#eab308"
              strokeWidth="2"
              strokeDasharray="10, 10"
              fill="none"
              className="animate-flow"
              opacity="0.6"
            />
          </g>
        ))}
        {/* Hub Circles */}
        <circle cx={centerNode.position.x} cy={centerNode.position.y} r="20" fill="#111827" stroke="#eab308" strokeWidth="2" />
      </svg>
    );
  };

  return (
    <div 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      className="w-screen h-screen overflow-hidden cursor-grab active:cursor-grabbing relative bg-[#0a0a0f]"
    >
      {/* Factory Floor Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
            backgroundSize: '50px 50px',
            backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)'
        }}
      ></div>

      {/* World Container */}
      <div 
        style={{ 
          transform: `translate(${window.innerWidth/2 + cameraPos.x}px, ${window.innerHeight/2 + cameraPos.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          transition: isDragging ? 'none' : 'transform 0.15s ease-out'
        }}
        className="absolute top-0 left-0 w-0 h-0"
      >
        {renderConveyorBelts()}
        {nodes.map(node => (
          <Node key={node.id} data={node} scale={scale} />
        ))}
      </div>
      
      {/* Help Overlay */}
      <div className="absolute bottom-6 left-6 pointer-events-none flex items-center gap-3">
        <div className="w-10 h-10 border border-factory-cyan/30 rounded flex items-center justify-center bg-black/50">
           <div className="w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
        </div>
        <div className="text-factory-cyan/50 text-xs font-mono">
          <p>SYSTEM STATUS: ONLINE</p>
          <p>NAVIGATE: DRAG + SCROLL</p>
        </div>
      </div>
    </div>
  );
};