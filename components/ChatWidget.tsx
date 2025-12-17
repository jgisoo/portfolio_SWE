import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Bot, Terminal } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';

// Local response generator - no API required
const generateLocalResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Knowledge base for responses
  const responses: { [key: string]: string[] } = {
    'project': [
      "📊 ",
      "🔗 "
    ],
    'experience': [
      "🔬 Human-Robot Researcher @University of Waterloo: Focused on LLM-powered robots and its benefits for human communication.",
      "🏢 I have held Software Engineer Internships in tech, building scalable backends with Python & C# & Node.js",
      "🚀 Developed and maintained distributed systems and microservices, AI & ML systems."
    ],
    'research': [
      "🧠 My research focuses on LLM-powered Furhat robot for optometry students communication training, building Kotlin application with OpenAI API",
      "📈 Currently pursuing a Master's degree in Computer Engineering with specialization in LLM and robotics."
    ],
    'hobby': [
      "🏔️ I love playing tennis and teach in summer camps",
      "🌌 Big fan of sci-fi. I enjoy exploring futuristic concepts and their implications on technology."
    ],
    'skill': [
      "💻 Proficient in: Python, C#, .NET, ML frameworks.",
      "🛠️ Specialized in: LLMs, full-stack development"
    ]
  };

  // Check for keyword matches
  for (const [keyword, answerList] of Object.entries(responses)) {
    if (lowerMessage.includes(keyword)) {
      return answerList[Math.floor(Math.random() * answerList.length)];
    }
  }

  // Default responses
  const defaultResponses = [
    "📡 Connection stable. Feel free to inquire about anything related to my work and experience."
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "Ping for any info about my projects, experience, research or skills. ",
      sender: ChatSender.BOT,
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: ChatSender.USER,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const responseText = generateLocalResponse(userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: ChatSender.BOT,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {isOpen && (
        <div className="glass-panel w-80 md:w-96 h-[500px] rounded-lg flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 border-2 border-factory-cyan/30">
          {/* Header */}
          <div className="p-3 bg-factory-panel border-b border-factory-cyan/20 flex justify-between items-center relative">
             <div className="absolute top-0 left-0 w-full h-1 hazard-stripes opacity-30"></div>
            <div className="flex items-center gap-2 mt-1">
              <Bot size={18} className="text-factory-cyan" />
              <span className="font-mono text-sm font-bold text-white tracking-wider">FACTORY_OS_v9000</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/50 hover:text-white transition-colors hover:rotate-90 duration-300"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm font-mono border ${
                    msg.sender === ChatSender.USER
                      ? 'bg-factory-cyan/20 text-cyan-100 border-factory-cyan/30 rounded-br-none'
                      : 'bg-white/5 text-gray-300 border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.sender === ChatSender.BOT && <span className="text-[10px] text-factory-cyan/50 block mb-1"> SYSTEM_MSG</span>}
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-lg rounded-bl-none border border-white/10 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-factory-cyan rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                   <span className="w-1.5 h-1.5 bg-factory-cyan rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                   <span className="w-1.5 h-1.5 bg-factory-cyan rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-factory-cyan/20 bg-factory-panel">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter command..."
                className="flex-1 bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-white/30 font-mono focus:border-factory-cyan/50 outline-none transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !inputText.trim()}
                className="p-2 rounded bg-factory-cyan/20 border border-factory-cyan/30 hover:bg-factory-cyan/30 disabled:opacity-50 transition-colors text-factory-cyan"
              >
                {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 border-2 border-factory-cyan ${
          isOpen ? 'bg-factory-danger rotate-90 border-red-500' : 'bg-factory-panel hover:scale-110'
        }`}
      >
         {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-factory-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-factory-cyan"></span>
            </span>
        )}
        {isOpen ? <X className="text-white" /> : <Terminal className="text-factory-cyan" />}
      </button>
    </div>
  );
};