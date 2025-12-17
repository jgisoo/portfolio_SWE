import React from 'react';
import { NodeData } from '../types';
import { FileText, Code, Briefcase, User, ExternalLink, Github, Terminal, Bot, Settings, Cpu, Factory, Wrench } from 'lucide-react';

interface NodeProps {
  data: NodeData;
  scale: number;
}

export const Node: React.FC<NodeProps> = ({ data, scale }) => {
  const contentOpacity = scale < 0.4 ? 0 : 1;
  const isVisible = scale > 0.1;

  if (!isVisible) return null;

  const renderContent = () => {
    switch (data.type) {
      case 'hero':
        return (
          <div className="relative text-center w-[600px] p-8">
            {/* Rotating Gear Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-factory-cyan/20 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-factory-cyan/10 rounded-full animate-[spin_12s_linear_infinite_reverse] pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-sm border border-factory-cyan/30 bg-factory-cyan/5 text-factory-cyan font-mono text-sm uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Main Control Unit
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              {data.content.name}
            </h1>
            
            <div className="glass-panel p-4 rounded-lg inline-block border-l-4 border-l-factory-cyan">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-mono">
                {data.content.tagline}
                </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
                    <Settings className="animate-spin-slow" size={14}/> SYSTEM OPTIMAL
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-xs justify-end">
                    LATENCY: 12ms <div className="w-1 h-3 bg-green-500"></div><div className="w-1 h-3 bg-green-500"></div>
                </div>
            </div>
          </div>
        );

      case 'research':
        return (
          <div className="glass-panel w-[450px] rounded-lg overflow-hidden group">
            {/* Industrial Header */}
            <div className="bg-factory-panel p-4 border-b border-white/10 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 hazard-stripes opacity-50"></div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded border border-purple-500/30">
                        <FileText className="text-purple-400" size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider">Publications</h2>
                        <div className="text-[10px] text-purple-400 font-mono">IN THE WORKS</div>
                    </div>
                </div>
                <div className="text-purple-500/20">
                    <Factory size={40} />
                </div>
            </div>

            <div className="p-6 space-y-4">
              {data.content.map((paper: any, idx: number) => (
                <div key={idx} className="group/paper relative p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-purple-900/10 hover:border-purple-500/40 transition-all duration-500 overflow-hidden cursor-pointer">
                  {/* Glow Effect Background */}
                  <div className="absolute inset-0 bg-purple-500/0 group-hover/paper:bg-purple-500/5 transition-colors duration-500"></div>
                  
                  {/* Left Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover/paper:bg-purple-500 transition-all duration-300"></div>

                  <div className="relative z-10 pl-2">
                      <h3 className="text-lg font-bold text-gray-100 font-mono group-hover/paper:text-purple-300 transition-colors duration-300 flex items-center justify-between">
                        {paper.title}
                        <ExternalLink size={16} className="text-purple-500 opacity-0 -translate-x-2 group-hover/paper:opacity-100 group-hover/paper:translate-x-0 transition-all duration-300" />
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mt-2 mb-3">
                         <span className="px-2 py-0.5 bg-black/40 border border-purple-500/30 text-purple-300 text-[10px] rounded uppercase font-mono shadow-[0_0_0_rgba(168,85,247,0)] group-hover/paper:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-500">
                            {paper.venue}
                         </span>
                         <span className="px-2 py-0.5 bg-white/5 text-gray-400 text-[10px] rounded font-mono">
                            {paper.year}
                         </span>
                      </div>
                      
                      <p className="text-sm text-gray-400 leading-relaxed font-sans group-hover/paper:text-gray-200 transition-colors duration-300">
                        {paper.abstract}
                      </p>
                  </div>
                  
                  {/* Shimmer Overlay */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover/paper:animate-shimmer pointer-events-none"></div>
                </div>
              ))}
            </div>
            
            {/* Footer Decoration */}
            <div className="h-2 bg-black/40 flex items-center gap-1 px-2">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white/10 rounded-full"></div>
                ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="glass-panel w-[550px] rounded-lg overflow-hidden border border-white/10">
             <div className="bg-factory-panel p-4 border-b border-white/10 flex justify-between items-center relative">
                 <div className="absolute top-0 right-0 w-32 h-1 hazard-stripes"></div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded border border-green-500/30">
                        <Wrench className="text-green-400" size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider">Projects</h2>
                        <div className="text-[10px] text-green-400 font-mono">PRODUCTION LINE</div>
                    </div>
                </div>
                <Settings className="text-green-500/20 animate-spin-slow" size={32} />
            </div>

            <div className="grid grid-cols-1 bg-black/20">
              {data.content.map((proj: any, idx: number) => (
                <div key={idx} className="p-6 border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                        <span className="text-green-500 opacity-50">0{idx+1}.</span> {proj.title}
                    </h3>
                    <Github size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors"/>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 border-l-2 border-green-500/20 pl-3">
                    {proj.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tags.map((tag: string, tIdx: number) => (
                      <span key={tIdx} className="px-2 py-1 bg-green-900/20 border border-green-500/20 text-green-400 text-[10px] font-mono rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'experience':
        return (
           <div className="glass-panel w-[450px] rounded-lg overflow-hidden border-r-4 border-r-orange-500">
            <div className="bg-factory-panel p-4 border-b border-white/10 flex items-center gap-3 relative">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-orange-500 to-transparent"></div>
                 <div className="p-2 bg-orange-500/10 rounded border border-orange-500/30">
                    <Briefcase className="text-orange-400" size={20} />
                </div>
                <div>
                     <h2 className="text-xl font-bold text-white uppercase tracking-wider">Experiences</h2>
                     <div className="text-[10px] text-orange-400 font-mono">HISTORY</div>
                </div>
            </div>
            
            <div className="p-6 space-y-8 relative">
               {/* Timeline Line */}
               <div className="absolute left-9 top-8 bottom-8 w-[2px] bg-white/10"></div>
               
               {data.content.map((job: any, idx: number) => (
                 <div key={idx} className="relative pl-10">
                    <div className="absolute left-[-5px] top-1 w-3 h-3 bg-orange-500 border-4 border-[#13131f] rounded-full z-10"></div>
                    <div className="flex flex-col">
                        <span className="text-xs font-mono text-orange-400 mb-1 px-2 py-0.5 bg-orange-500/10 self-start rounded-sm border border-orange-500/20">{job.duration}</span>
                        <h3 className="text-lg font-bold text-white mt-2">{job.role}</h3>
                        <span className="text-sm text-gray-400 mb-3 font-mono">@ {job.company}</span>
                        <p className="text-sm text-gray-500 leading-relaxed bg-black/20 p-3 rounded border border-white/5">{job.description}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'about':
        return (
            <div className="glass-panel w-[400px] rounded-lg overflow-hidden relative">
             <div className="absolute top-0 w-full h-1 hazard-stripes"></div>
             
             <div className="p-6 pt-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded bg-blue-500/20 border border-blue-400 flex items-center justify-center">
                        <User className="text-blue-400" size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">About Me</h2>
                        <div className="text-xs text-blue-400 font-mono">ID: Gisoo Jafari</div>
                    </div>
                </div>

                <div className="space-y-4">
                     <p className="text-gray-300 leading-relaxed text-sm p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg">
                        <span className="text-blue-400 font-mono block mb-2 text-xs opacity-70">{">>"} BIO_SUMMARY.TXT</span>
                        {data.content.bio}
                     </p>

                     <div>
                        <h4 className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                            <Cpu size={12}/> Installed Modules
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {data.content.skills.map((skill: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded hover:bg-white/10 transition-colors">
                                    <div className={`w-1.5 h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-blue-400' : 'bg-green-400'}`}></div>
                                    <span className="text-xs font-mono text-gray-300">{skill}</span>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>
             </div>
           </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      style={{
        transform: `translate(${data.position.x}px, ${data.position.y}px)`,
        opacity: contentOpacity,
        transition: 'opacity 0.3s ease-out'
      }}
      className="absolute top-0 left-0 transition-shadow duration-500"
    >
      {renderContent()}
    </div>
  );
};