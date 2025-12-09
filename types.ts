export interface Position {
  x: number;
  y: number;
}

export interface NodeData {
  id: string;
  title: string;
  type: 'hero' | 'about' | 'projects' | 'research' | 'experience' | 'contact';
  position: Position;
  content: any; // Can be complex nested structures
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ResearchPaper {
  title: string;
  venue: string;
  year: string;
  abstract: string;
  link?: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: number;
}