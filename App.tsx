import React, { useState, useEffect } from 'react';
import { Canvas } from './components/Canvas.tsx';
import { ChatWidget } from './components/ChatWidget.tsx';
import { Minimap } from './components/Minimap.tsx';
import { PORTFOLIO_NODES } from './constants';
import { Position } from './types';
import { Settings } from 'lucide-react';

function App() {
  const [cameraPos, setCameraPos] = useState<Position>({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate system boot
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (targetPos: Position) => {
    setCameraPos(targetPos);
    setScale(1);
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen bg-[#050505] flex flex-col items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hazard-stripes"></div>
        <div className="z-10 flex flex-col items-center">
            <Settings size={64} className="text-factory-cyan animate-spin mb-8" />
            <div className="flex gap-2 mb-2 font-mono text-sm text-factory-cyan">
                <span>LOADING_ASSETS...</span>
                <span className="animate-pulse">_</span>
            </div>
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-factory-cyan animate-[slide_1.5s_ease-in-out_infinite]"></div>
            </div>
            <h1 className="mt-6 text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-factory-cyan to-white uppercase">
              Booting Factory OS
            </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#050505] text-white font-sans overflow-hidden">
       {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

      <Canvas 
        nodes={PORTFOLIO_NODES} 
        cameraPos={cameraPos} 
        setCameraPos={setCameraPos}
        scale={scale}
        setScale={setScale}
      />
      
      <Minimap 
        nodes={PORTFOLIO_NODES} 
        currentPos={cameraPos} 
        onNavigate={handleNavigate} 
      />
      
      <ChatWidget />
      
      {/* Top Left Branding */}
      <div className="fixed top-6 left-6 z-40 pointer-events-none border-l-2 border-factory-cyan pl-4">
        <h2 className="text-xl font-bold tracking-tight uppercase">Gisoo Jafari</h2>
        <p className="text-xs text-white/50 font-mono"> <span className="text-factory-cyan">OPERATIONAL</span></p>
      </div>
    </div>
  );
}

export default App;